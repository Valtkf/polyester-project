const NavItems = () => {
  const navItems = [
    // { link: "Accueil", path: "home" },
    { link: "Présentation", path: "presentation" },
    { link: "Galerie", path: "galerie" },
  ];

  return (
    <>
      {navItems.map(({ link, path }) => (
        <a
          key={link}
          href={path}
          className="block text-primary font-medium hover:text-gray-300"
        >
          {link}
        </a>
      ))}
    </>
  );
};

export default NavItems;
