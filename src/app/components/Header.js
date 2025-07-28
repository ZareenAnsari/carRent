'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 py-4 bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">
     
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Rentle"
            width={100}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-1/2">
       
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between w-full sm:w-auto px-4 py-2 bg-white border rounded-md text-sm shadow-sm hover:bg-gray-50"
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

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-md border bg-gray-100 focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <button className="w-full md:w-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
            Login
          </button>
          <button className="w-full md:w-auto px-4 py-2 text-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
            Rent Out
          </button>
        </div>
      </div>
    </header>
  );
}
