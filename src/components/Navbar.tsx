import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Accueil", path: "home" },
    { link: "Présentation", path: "presentation" },
    { link: "Nos Produits", path: "produits" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center text-primary"
            >
              Logo
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block text-primary font-medium hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <button className="bg-tartiary hover:bg-hovertartiary hover:text-white active:bg-tartiary font-medium py-2 px-4 transition-all duration-300 rounded">
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div></div>
    </>
  );
};

export default Navbar;
