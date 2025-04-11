import SectionHeader from '../components/SectionHeader';

const Education = () => {
    const education = [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'University Name',
            period: '2018 - 2020',
            description: 'Specialized in Web Technologies and Human-Computer Interaction. Developed an award-winning thesis on improving accessibility in web applications.',
            achievements: [
                'GPA: 3.9/4.0',
                'Outstanding Graduate Student Award',
                'Published research paper on web accessibility'
            ]
        },
        {
            degree: 'Bachelor of Engineering in Information Technology',
            institution: 'College Name',
            period: '2014 - 2018',
            description: 'Gained strong foundations in programming, algorithms, and software development. Participated in various hackathons and coding competitions.',
            achievements: [
                'GPA: 3.8/4.0',
                'Dean\'s List for Academic Excellence',
                'Led team to win the Annual Coding Challenge'
            ]
        },
        {
            degree: 'Web Development Bootcamp',
            institution: 'Coding Academy',
            period: 'Summer 2017',
            description: 'Intensive 12-week program focused on modern web development technologies and best practices.',
            achievements: [
                'Developed 5 full-stack web applications',
                'Best Project Award for e-learning platform',
                'Mentored junior participants'
            ]
        }
    ];

    const certifications = [
        'AWS Certified Developer – Associate',
        'Google Professional Web Developer',
        'MongoDB Certified Developer',
        'React.js Certification – Meta Front-End Developer'
    ];

    return (
        <section className="py-12">
            <SectionHeader title="Education" subtitle="My academic background" />

            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Academic Education</h3>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                    <span className="text-gray-600 md:text-right">{edu.period}</span>
                                </div>
                                <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                                <p className="text-gray-700 mb-3">{edu.description}</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {edu.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                <div className="flex items-center">
                                    <div className="text-blue-600 mr-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span>{cert}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;