import { Link } from "react-router-dom";

const NavItems = () => {
  const navItems = [
    // { link: "Accueil", path: "home" },
    // { link: "Accueil", path: "home" },
    // { link: "Galerie", path: "galerie" },
    // { link: "Nous Contacter", path: "galerie" },
  ];

  return (
    <>
      {navItems.map(({ link, path }) => (
        <Link
          key={link}
          to={path}
          className="block text-primary font-medium hover:text-gray-300"
        >
          {link}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
