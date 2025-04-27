import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StudentsPage from './pages/StudentsPage';
import ChatPage from './pages/ChatPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <nav className="bg-white shadow-md rounded-full flex justify-center p-4 gap-6 my-6 mx-auto w-fit">
          <NavLink to="/students" className="px-4 py-2 rounded-full hover:bg-blue-100 transition">Students</NavLink>
          <NavLink to="/chat" className="px-4 py-2 rounded-full hover:bg-blue-100 transition">Chat</NavLink>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-6xl">
            <Routes>
              <Route path="/" element={<Navigate to="/students" />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </div>
      </div>
      <Footer/>
      </div>
    </Router>
  );
}