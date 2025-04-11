const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {currentYear} Aman Kumar. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;