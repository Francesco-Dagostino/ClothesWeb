const Header = () => {
    return (
        <div className="bg-white p-4 fixed top-0 left-0 w-full shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-2xl font-bold relative group">
                    Jungle
                    <span className="absolute left-0 right-0 bottom-0 border-b border-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" style={{ transformOrigin: 'left' }}></span>
                </div>

                <nav className="text-black text-2xl relative group">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#">
                                Inicio
                                <span className="absolute left-0 right-0 bottom-0 border-b border-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" style={{ transformOrigin: 'left' }}></span>
                            </a>    
                        </li>
                    </ul>
                </nav>

                <nav className="text-black text-2xl relative group">
                    <ul>
                        <li>
                            <a href="#">
                                Perfil
                                <span className="absolute left-0 right-0 bottom-0 border-b border-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" style={{ transformOrigin: 'left' }}></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;