import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">AKALA</div>
        <nav className="space-x-8 text-gray-700 font-semibold">
          <Link to="/students" className="hover:text-blue-600 transition">
            Students
          </Link>
          <Link to="/chat" className="hover:text-blue-600 transition">
            Chat
          </Link>
        </nav>
      </div>
    </header>
  );
}