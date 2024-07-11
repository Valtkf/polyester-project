import { Link } from "react-router-dom";

interface NavItem {
  link: string;
  path: string;
}

const NavItems: React.FC = () => {
  const navItems: NavItem[] = [
    // { link: "Accueil", path: "home" },
    // { link: "Galerie", path: "galerie" },
    // { link: "Nous Contacter", path: "contact" },
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
