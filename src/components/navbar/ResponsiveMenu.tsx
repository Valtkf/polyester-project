import React from "react";

interface ResponsiveMenuProps {
  isMenuOpen: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ isMenuOpen }) => {
  const navItems = [
    { link: "Accueil", path: "home" },
    { link: "Présentation", path: "presentation" },
    { link: "Nos Produits", path: "produits" },
  ];

  return (
    <div
      className={`space-y-4 px-4 pt-24 pb-5 bg-cyan text-xl ${
        isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
      }`}
    >
      {navItems.map(({ link, path }) => (
        <a
          key={link}
          href={path}
          className="block text-primary font-medium hover:text-gray-300"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default ResponsiveMenu;
