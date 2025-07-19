"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "CNG Services", path: "/cng" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0c4187] shadow-lg" : "bg-[#0c4187]/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-xl md:text-2xl font-bold flex items-center"
          >
            <span className="bg-[#2cbbd4] text-white p-1 rounded mr-2">K</span>
            <span>russ Automotive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white hover:text-[#2cbbd4] transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href="tel:+1234567890"
              className="text-white hover:text-[#2cbbd4] transition-colors"
              aria-label="Call us"
            >
              <FaPhoneAlt className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/book-appointment"
            className="hidden md:flex items-center bg-[#2cbbd4] hover:bg-[#2395a9] text-white px-4 py-2 rounded-full transition-colors font-medium text-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } bg-[#0c4187] transition-all duration-300`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-white hover:bg-[#2cbbd4]/20 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              onClick={closeMobileMenu}
              className="block w-full text-center bg-[#2cbbd4] hover:bg-[#2395a9] text-white px-4 py-2 rounded-full mt-4 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
