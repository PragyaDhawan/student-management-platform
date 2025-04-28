import { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem('conversations');
    return saved
      ? JSON.parse(saved)
      : [
          {
            studentId: '1',
            studentName: 'John Doe',
            messages: [
              { sender: 'student', text: 'Hello, Advisor!' },
              { sender: 'advisor', text: 'Hi John, how can I assist you?' },
            ],
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  function sendMessage(studentId, sender, text) {
    setConversations(prev =>
      prev.map(conv =>
        conv.studentId === studentId
          ? { ...conv, messages: [...conv.messages, { sender, text }] }
          : conv
      )
    );
  }

  return (
    <ChatContext.Provider value={{ conversations, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
