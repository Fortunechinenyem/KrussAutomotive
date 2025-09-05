import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Regular Maintenance", href: "/services/maintenance" },
        { name: "CNG Services", href: "/services/cng" },
        { name: "Diagnostics", href: "/services/diagnostics" },
        { name: "Body Repair", href: "/services/body" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/about#careers" },
        { name: "Testimonials", href: "/about#testimonials" },
        { name: "Blog", href: "/blog" },
      ],
    },
    // {
    //   title: "Support",
    //   links: [
    //     { name: "Contact Us", href: "/contact" },
    //     { name: "FAQs", href: "/faq" },
    //     { name: "Privacy Policy", href: "/privacy" },
    //     { name: "Terms of Service", href: "/terms" },
    //   ],
    // },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2cbbd4] rounded-full opacity-10 blur-xl"></div>
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#0c4187] rounded-full opacity-5 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] p-2 rounded-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-2xl font-bold"></span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2cbbd4] to-white">
                Kruss Automotive
              </span>
            </Link>
            <p className="mt-4 text-gray-300 max-w-md text-lg leading-relaxed">
              Reinventing vehicle ownership, repair & maintenance experience
              using technology with comprehensive automotive solutions you can
              trust.
            </p>
            <div className="flex mt-6 space-x-4">
              {[
                {
                  name: "Facebook",
                  icon: <FaFacebookF className="h-4 w-4" />,
                  color: "hover:bg-blue-600",
                },
                {
                  name: "Twitter",
                  icon: <FaTwitter className="h-4 w-4" />,
                  color: "hover:bg-blue-400",
                },
                {
                  name: "Instagram",
                  icon: <FaInstagram className="h-4 w-4" />,
                  color: "hover:bg-pink-600",
                },
                {
                  name: "LinkedIn",
                  icon: <FaLinkedinIn className="h-4 w-4" />,
                  color: "hover:bg-blue-700",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`bg-gray-800 p-3 rounded-full hover:text-white transition-all duration-300 group ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6 relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#2cbbd4] rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#2cbbd4] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#2cbbd4] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#2cbbd4] rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-[#2cbbd4]/10 p-2 rounded-lg mt-1">
                  <FaMapMarkerAlt className="h-5 w-5 text-[#2cbbd4]" />
                </div>
                <span className="text-gray-300 ml-3">
                  Kosofe, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#2cbbd4]/10 p-2 rounded-lg mt-1">
                  <FaPhoneAlt className="h-5 w-5 text-[#2cbbd4]" />
                </div>
                <span className="text-gray-300 ml-3">(+234) 9030-1696</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#2cbbd4]/10 p-2 rounded-lg mt-1">
                  <FaEnvelope className="h-5 w-5 text-[#2cbbd4]" />
                </div>
                <span className="text-gray-300 ml-3 break-all">
                  info@krussauto.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kruss Automotive Services. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#2cbbd4] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#2cbbd4] text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
