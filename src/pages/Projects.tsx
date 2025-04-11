import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A full-stack e-commerce platform with product management, cart functionality, and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      demoLink: 'https://demo-link.com',
      codeLink: 'https://github.com/yourusername/project'
    },
    {
      title: 'Task Management App',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      description: 'A responsive task manager with drag-and-drop functionality, categories, and priority settings.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: 'https://demo-link.com',
      codeLink: 'https://github.com/yourusername/project'
    },
    {
      title: 'Portfolio Website',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A personal portfolio website built with React.js and React Router.',
      technologies: ['React.js', 'React Router', 'Tailwind CSS'],
      demoLink: 'https://demo-link.com',
      codeLink: 'https://github.com/yourusername/project'
    },
    {
      title: 'Weather Dashboard',
      category: 'app',
      image: '/api/placeholder/400/300',
      description: 'A weather application displaying current conditions and forecasts based on location.',
      technologies: ['React.js', 'OpenWeather API', 'Chart.js'],
      demoLink: 'https://demo-link.com',
      codeLink: 'https://github.com/yourusername/project'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-12">
      <SectionHeader title="Projects" subtitle="Some of my recent work" />
      
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          {['all', 'web', 'mobile', 'app'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 text-sm rounded text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Demo
                </a>
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
