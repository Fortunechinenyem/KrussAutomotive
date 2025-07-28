"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Preventive Maintenance", path: "/services/preventive" },
        { name: "CNG Conversion", path: "/services/cng" },
        { name: "Diagnostics", path: "/services/diagnostics" },
        { name: "Body Repair", path: "/services/body" },
      ],
    },
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

  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Top Announcement Bar
      <div className="bg-[#0c4187] text-white text-center py-2 px-4 text-sm">
        <p>
          Professional automotive services you can trust |{" "}
          <Link href="/book-appointment" className="font-semibold underline">
            Book your appointment today
          </Link>
        </p>
      </div> */}

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/krusslogo (1).svg"
              alt="Kruss Automotive"
              width={160}
              height={60}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <div className="flex items-center">
                  <Link
                    href={item.path}
                    className={`text-lg ${
                      scrolled
                        ? "text-[#0c4187] hover:text-[#2cbbd4]"
                        : "text-[#0c4187] hover:text-[#2cbbd4]"
                    } font-medium transition-colors`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="ml-1 focus:outline-none"
                    >
                      <FaChevronDown
                        className={`text-sm ${
                          scrolled ? "text-[#0c4187]" : "text-[#0c4187]"
                        } transition-transform ${
                          openSubmenu === item.name
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 ${
                      openSubmenu === item.name ? "block" : "hidden"
                    } group-hover:block`}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className="block px-4 py-2 text-[#0c4187] hover:bg-[#e6edf7]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <a
              href="tel:+2349025301696"
              className="text-[#0c4187] hover:text-[#2cbbd4] transition-colors"
              aria-label="Call us"
            >
              <FaPhoneAlt className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c4187] focus:outline-none"
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
            className="hidden lg:flex items-center bg-[#2cbbd4] hover:bg-[#2395a9] text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white fixed top-28 left-0 right-0 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    item.submenu ? toggleSubmenu(item.name) : setIsOpen(false)
                  }
                >
                  <Link
                    href={item.path}
                    className="block py-3 text-lg text-[#0c4187] font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button className="p-2 focus:outline-none">
                      <FaChevronDown
                        className={`text-sm text-[#0c4187] transition-transform ${
                          openSubmenu === item.name
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && openSubmenu === item.name && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-[#0c4187] hover:text-[#2cbbd4]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#2cbbd4] hover:bg-[#2395a9] text-white px-6 py-3 rounded-lg mt-4 transition-colors font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
