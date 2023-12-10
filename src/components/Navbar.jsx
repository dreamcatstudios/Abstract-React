import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="border-b border-[#333] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Abstract - React
        </Link>
        <div className="space-x-4">
          <NavLink to="/about" title="About" />
          <NavLink to="/privacy-policy" title="Policy" />
          <NavLink to="/points" title="Points: 10" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, title }) => (
  <Link
    to={to.toLowerCase()} // Assuming your routes follow the same pattern
    className="text-white hover:text-gray-300"
  >
    {title}
  </Link>
);

export default Navbar;
