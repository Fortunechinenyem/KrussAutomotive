import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Regular Maintenance", href: "/services#maintenance" },
        { name: "CNG Services", href: "/cng" },
        { name: "Diagnostics", href: "/services#diagnostics" },
        { name: "Body Repair", href: "/services#body-repair" },
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
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Kruss Automotive</h3>
            <p className="text-gray-400 mb-6">
              Reinventing vehicle ownership, repair & maintenance experience
              using technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                {/* Icon would go here */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                {/* Icon would go here */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                {/* Icon would go here */}
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Kosofe</p>
              <p>Lagos, Nigeria</p>
              <p>Phone: (+234) 9030-1696</p>
              <p>Email: info@krussauto.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Kruss Automotive Services. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
