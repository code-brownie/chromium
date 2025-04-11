import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Interests', path: '/interests' },
        { name: 'Education', path: '/education' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Aman Kumar</Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`hover:text-blue-300 transition ${location.pathname === item.path ? 'text-blue-300 font-semibold' : ''
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 pb-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-2 hover:bg-gray-600 ${location.pathname === item.path ? 'bg-gray-600 font-semibold' : ''
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;