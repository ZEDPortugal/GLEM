import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Smooth and slow scroll to section
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top - (window.innerHeight / 1.2 - section.offsetHeight / 4), // Center the section vertically
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close the mobile menu after navigation
    }
  };

  return (
    <nav className="animate-fade-down animate-once animate-duration-[200ms] flex w-full h-18 shadow-xl fixed top-0 left-0 z-10 bg-white font-helvetica">
      <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16 ease-in-out duration-200 bg-white">
        <div onClick={() => scrollToSection('#home')} className="text-black ease-in-out hover:text-gray-500 duration-1000 font-helvetica font-bold text-3xl">GLEM</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex font-helvetica text-base mr-10">
          <ul className="flex text-black">
            <li
              onClick={() => scrollToSection('#home')}
              className="ml-10 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
            >
              Home
            </li>
            
            <li
              onClick={() => scrollToSection('#wedding-packages')}
              className="ml-10 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
            >
              Our Packages
            </li>
            <li
              onClick={() => scrollToSection('#services')}
              className="ml-10 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection('#about')}
              className="ml-10 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
            >
              About Us
            </li>
            <li
              onClick={() => scrollToSection('#contact')}
              className="ml-10 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
            >
              Contact Us
            </li>
            
          </ul>
          
        </div>

    

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer text-black" aria-label="Toggle menu">
          <AiOutlineMenu size={25} />
        </div>
        
        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[70%] md:hidden h-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 h-screen ease-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end text-black">
            <div onClick={handleNav} className="cursor-pointer" aria-label="Close menu">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="py-4 flex flex-col text-black font-helvetica text-lg">
            <ul>
              <li
                onClick={() => scrollToSection('#home')}
                className="py-4 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
              >
                Home
              </li>
              
              <li
                onClick={() => scrollToSection('#wedding-packages')}
                className="py-4 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
              >
                Our Packages
              </li>
              <li
                onClick={() => scrollToSection('#services')}
                className="py-4 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
              >
                Services
              </li>
              <li
                onClick={() => scrollToSection('#about')}
                className="py-4 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection('#contact')}
                className="py-4 uppercase hover:text-gray-200 ease-in-out duration-200 cursor-pointer"
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;