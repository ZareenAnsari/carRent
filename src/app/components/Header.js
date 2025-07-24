'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="w-full px-6 py-4 shadow-md bg-white flex items-center justify-between">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Rentle" className="w-8 h-8" />
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Rentle
        </span>
      </div>

      {/* Categories + Search */}
      <div className="flex items-center gap-2 w-1/2">
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center px-4 py-2 bg-white border rounded-md text-sm shadow-sm hover:bg-gray-50"
          >
            Categories <ChevronDown size={16} className="ml-1" />
          </button>
          {showDropdown && (
            <div className="absolute top-full mt-2 left-0 bg-white border shadow-md rounded-md z-10 w-40">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Electronics</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vehicles</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Furniture</li>
              </ul>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
          Login
        </button>
        <button className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
          Rent Out
        </button>
      </div>
    </header>
  );
}
