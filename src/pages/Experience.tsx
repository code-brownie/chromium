import SectionHeader from '../components/SectionHeader';

const Experience = () => {
    const experiences = [
        {
            company: 'Company ABC',
            position: 'Senior Frontend Developer',
            period: 'Jan 2023 - Present',
            description: 'Led the development of a responsive web application using React.js and Redux. Implemented modern UI/UX designs and optimized performance for a seamless user experience.',
            achievements: [
                'Reduced load time by 40% through code optimization',
                'Implemented automated testing with Jest, increasing code coverage to 85%',
                'Mentored junior developers and conducted code reviews'
            ]
        },
        {
            company: 'XYZ Tech',
            position: 'Frontend Developer',
            period: 'Mar 2020 - Dec 2022',
            description: 'Developed and maintained responsive web applications using React.js, HTML5, CSS3, and JavaScript. Collaborated with design and backend teams to implement new features.',
            achievements: [
                'Redesigned the company website, improving user engagement by 25%',
                'Built reusable component library reducing development time',
                'Integrated third-party APIs for enhanced functionality'
            ]
        },
        {
            company: 'StartUp Inc',
            position: 'Web Developer Intern',
            period: 'Jun 2019 - Feb 2020',
            description: 'Assisted in developing and maintaining web applications. Gained hands-on experience with modern frontend technologies.',
            achievements: [
                'Created interactive user interfaces with React.js',
                'Implemented responsive designs for mobile and desktop',
                'Contributed to the company blog with technical articles'
            ]
        }
    ];

    return (
        <section className="py-12">
            <SectionHeader title="Work Experience" subtitle="My professional journey" />

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <span className="text-gray-600 md:text-right">{exp.period}</span>
                        </div>
                        <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                        <p className="text-gray-700 mb-3">{exp.description}</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;