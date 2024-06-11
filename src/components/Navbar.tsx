
const Navbar = () => {
    const navItems = [
        {link: "Accueil", path: "home"},
        {link: "Présentation", path: "presentation"},
        {link: "Contact", path: "contact"},
    ]
    return (
        <nav>
            <div>
                <a href="/" className="text-2xl font-semibold flex items-center text-primary">Logo</a>
                <ul className="md:flex space-x-12">
                    {
                        navItems.map(({link,path}) => <a key={link} href={path} className="block text-primary font-medium hover:text-gray-300">{link}</a>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;