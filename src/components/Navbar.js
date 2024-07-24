import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/dashboard" className="text-white">Dashboard</Link>
        <Link to="/profile" className="text-white">Profile</Link>
        <Link to="/add-movie" className="text-white">Add Movie</Link>
      </div>
    </nav>
  );
};

export default Navbar;
