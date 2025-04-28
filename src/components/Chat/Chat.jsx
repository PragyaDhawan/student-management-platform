import { useState, useEffect, useRef } from 'react';
import { useChat } from '../../context/ChatContext';

export default function Chat() {
  const { conversations, sendMessage } = useChat();
  const [selectedId, setSelectedId] = useState(conversations[0]?.studentId || '');
  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef(null);

  const currentConversation = conversations.find(c => c.studentId === selectedId);

  function handleSend() {
    if (newMessage.trim()) {
      sendMessage(selectedId, 'advisor', newMessage);
      setNewMessage('');
    }
  }

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [currentConversation?.messages.length]);

  return (
    <div className="flex h-[85vh] rounded-2xl overflow-hidden bg-white shadow-2xl">
      
      {/* Left Panel */}
      <div className="w-1/3 bg-gradient-to-b from-blue-100 to-blue-50 overflow-y-auto p-4 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-blue-700">Students</h2>
        <div className="space-y-2">
          {conversations.map((c) => (
            <div
              key={c.studentId}
              onClick={() => setSelectedId(c.studentId)}
              className={`p-4 rounded-2xl cursor-pointer transition-all ${
                c.studentId === selectedId
                  ? 'bg-blue-500 text-white font-semibold'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              {c.studentName}
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 flex flex-col p-6 bg-gray-50">

        {/* Dummy Chat Messages */}
        <div ref={chatRef} className="flex-1 overflow-y-auto space-y-4 pr-2">
          {currentConversation?.messages.length > 0 ? (
            currentConversation.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === 'advisor' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[65%] p-4 rounded-2xl shadow-md ${
                    msg.sender === 'advisor'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-gray-300 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 mt-10">No messages yet.</div>
          )}
        </div>

        {/* Message Input Box*/}
        <div className="flex items-center mt-6 gap-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-4 rounded-full bg-white border border-gray-300 shadow-inner outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            Send
          </button>
        </div>

      </div>

    </div>
  );
}