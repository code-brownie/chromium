import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-16">
            <img
                src="profile.jpg"
                alt="Profile"
                className="rounded-full w-32 h-32 mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aman Kumar</h1>
            <p className="text-xl text-gray-600 mb-8">Frontend Developer & UI/UX Enthusiast</p>
            <p className="max-w-lg mb-8 text-gray-700">
                Welcome to my portfolio! I'm passionate about creating beautiful, user-friendly
                web experiences using modern technologies like React.js.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    View My Work
                </Link>
                <Link to="/contact" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                    Get In Touch
                </Link>
            </div>
        </section>
    );
};

export default Home;