"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaWhatsapp, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        {
          name: "Preventive Maintenance",
          path: "/services/detail?id=preventive",
        },
        {
          name: "Auto-Errand",
          path: "/services/detail?id=errand",
        },
        { name: "CNG Conversion", path: "/services/detail?id=cng" },
        { name: "Diagnostics", path: "/services/detail?id=diagnostics" },
        { name: "Body Repair", path: "/services/detail?id=body" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg border-b border-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform hover:scale-105 duration-200"
          >
            <Image
              src="/images/krusslogo (1).svg"
              alt="Kruss Automotive"
              width={isScrolled ? 140 : 160}
              height={isScrolled ? 50 : 60}
              priority
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative group">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                        pathname === item.path
                          ? "text-[#2cbbd4] bg-[#e6edf7] font-semibold"
                          : "text-[#0c4187] hover:text-[#2cbbd4]"
                      }`}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`ml-1 text-xs transition-transform duration-300 ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown */}
                    <div
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        openSubmenu === item.name
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-6 py-3 text-[#0c4187] hover:text-[#2cbbd4] hover:bg-[#e6edf7] transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      pathname === item.path
                        ? "text-[#2cbbd4] bg-[#e6edf7] font-semibold"
                        : "text-[#0c4187] hover:text-[#2cbbd4]"
                    }`}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#2cbbd4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/2349025301696"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-300 shadow-md"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="tel:+2349025301696"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6edf7] text-[#0c4187] hover:bg-[#2cbbd4] hover:text-white transition-colors duration-300 shadow-md"
              aria-label="Call us"
            >
              <FaPhoneAlt className="h-4 w-4" />
            </a>
            <Link
              href="/book-appointment"
              className="px-4 py-2 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white text-sm font-medium rounded-lg hover:from-[#2395a9] hover:to-[#0a3266] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="tel:+2349025301696"
              className="p-2 text-[#0c4187] hover:text-[#2cbbd4] transition-colors"
              aria-label="Call us"
            >
              <FaPhoneAlt className="h-5 w-5" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0c4187] hover:text-[#2cbbd4] focus:outline-none transition-colors"
              aria-label="Main menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current transition duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-6 bg-current transform transition duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg border border-gray-100 mt-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div className="flex justify-between items-center py-3">
                  <Link
                    href={item.path}
                    className={`block flex-1 text-base font-medium transition-colors duration-200 ${
                      pathname === item.path
                        ? "text-[#2cbbd4] font-semibold"
                        : "text-[#0c4187] hover:text-[#2cbbd4]"
                    }`}
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="p-2 focus:outline-none"
                    >
                      <FaChevronDown
                        className={`text-[#0c4187] transition-transform duration-300 ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && openSubmenu === item.name && (
                  <div className="pl-4 pb-3">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-[#0c4187] hover:text-[#2cbbd4] transition-colors text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 px-2 space-y-3">
              <a
                href="https://wa.me/2349025301696"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-lg font-medium w-full"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </a>
              <Link
                href="/book-appointment"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white py-3 px-4 rounded-lg font-medium"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] opacity-60"></div>
    </header>
  );
};

export default Navbar;
