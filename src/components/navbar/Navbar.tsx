import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { FaXmark } from "react-icons/fa6";
import NavItems from "./NavItems";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0 z-50">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center">
            <img
              src="../../../images/PolyDesignLogo2.png"
              alt=""
              className="w-[140px] h-[65px]"
            />
          </div>
          <div className="flex items-center ml-auto space-x-12">
            <ul className="md:flex space-x-12 hidden">
              <Link className="" to="/">
                Accueil
              </Link>
              <NavItems />

              <Link className="" to="/gallerypage">
                Galerie
              </Link>

              <Link
                className="bg-stonedark hover:bg-stone text-white active:bg-stonedark font-medium py-2 px-4 transition-all duration-300 rounded hidden md:block"
                to="/mailform"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <TbMenuDeep className="w-8 h-8 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <ResponsiveMenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navbar;
