import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity size={24} />
            <span className="text-xl font-bold">NexGenSpeed</span>
          </Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link>
            <Link to="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;