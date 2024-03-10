import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const CondoNavbar = ({ condoName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Set hasAnimated to true after the component has mounted
    setHasAnimated(true);
  }, []);

  return (
    <nav className={`bg-gray-800 p-4 fixed w-full top-0 z-10 transition-opacity ${hasAnimated ? 'opacity-100 duration-1000' : 'opacity-0'}`}>
      <div className="flex justify-between items-center">
        <Link href="#opener" className="text-white">{condoName}</Link>
        <div className="hidden lg:flex space-x-4">
          <a href="#section1" className="text-white">
            Welcome
          </a>
          <a href="#section2" className="text-white">
           Things to Do
          </a>
          <a href="#section3" className="text-white">
           About Us
          </a>
          <a href="#section4" className="text-white">
            Guest Book
          </a>
          <a href="#section5" className="text-white">
            Booking
          </a>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          ☰
        </button>
      </div>

      {isDropdownOpen && (
        <div className="lg:hidden mt-2">
          <a href="#section1" className="block text-white py-2 px-4 w-full text-left" onClick={closeDropdown}>
            Welcome
          </a>
          <a href="#section2" className="block text-white py-2 px-4 w-full text-left" onClick={closeDropdown}>
            Things to Do
          </a>
          <a href="#section3" className="block text-white py-2 px-4 w-full text-left" onClick={closeDropdown}>
            About Us
          </a>
          <a href="#section4" className="block text-white py-2 px-4 w-full text-left" onClick={closeDropdown}>
            Guest Book
          </a>
          <a href="#section5" className="block text-white py-2 px-4 w-full text-left" onClick={closeDropdown}>
            Booking
          </a>
        </div>
      )}
    </nav>
  );
};

export default CondoNavbar;