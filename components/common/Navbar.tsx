import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "CNG Services", path: "/cng" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Kruss Automotive
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-white hover:text-orange-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/book-appointment"
            className="bg-white bg-opacity-10 px-6 py-2 rounded-full text-[#7f870c] border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
