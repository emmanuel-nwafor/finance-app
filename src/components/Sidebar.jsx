import React, { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 transform z-50 md:w-64 md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">My App</h1>
      </div>
      <ul className="py-4 space-y-2">
        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Users
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;