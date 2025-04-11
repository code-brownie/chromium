import SectionHeader from "../components/SectionHeader";

const About = () => {
    const skills = [
        { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Vercel'] },
    ];

    return (
        <section className="py-12">
            <SectionHeader title="About Me" subtitle="Get to know me better" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                    <p className="text-gray-700 mb-4">
                        I'm a passionate web developer with a focus on creating responsive, user-friendly
                        interfaces. With a background in computer science and design, I bring both technical
                        expertise and creative problem-solving to every project.
                    </p>
                    <p className="text-gray-700 mb-4">
                        I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                        When I'm not coding, you can find me exploring the outdoors, reading about new
                        technologies, or contributing to open-source projects.
                    </p>
                    <p className="text-gray-700">
                        My goal is to continue learning and growing as a developer while creating
                        meaningful digital experiences that make a positive impact.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
                    <div className="space-y-8">
                        {skills.map((skillGroup) => (
                            <div key={skillGroup.category}>
                                <h4 className="text-lg font-medium mb-2">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;