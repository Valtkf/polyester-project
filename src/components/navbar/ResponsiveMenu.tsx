import React from "react";

interface ResponsiveMenuProps {
  isMenuOpen: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isMenuOpen }) => {
  const navItems = [
    { link: "Accueil", path: "home" },
    { link: "Présentation", path: "presentation" },
    { link: "Galerie", path: "galerie" },
    { link: "Nous Contacter", path: "contact" },
  ];

  return (
    <div
      className={`rounded-br-[150px] fixed w-full overflow-hidden top-0 right-0 left-0 px-4 pt-24 pb-5 bg-white text-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {navItems.map(({ link, path }) => (
        <a
          key={link}
          href={path}
          className="block text-primary font-medium hover:text-gray-300 pt-4"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default ResponsiveMenu;
