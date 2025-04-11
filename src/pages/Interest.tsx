import SectionHeader from '../components/SectionHeader';

const Interests = () => {
    const interests = [
        {
            title: 'Web Development',
            icon: '💻',
            description: 'Exploring new web technologies and frameworks to build better user experiences.'
        },
        {
            title: 'UI/UX Design',
            icon: '🎨',
            description: 'Creating intuitive and visually appealing interfaces that users love.'
        },
        {
            title: 'Open Source',
            icon: '🌐',
            description: 'Contributing to and learning from open source projects in the developer community.'
        },
        {
            title: 'Photography',
            icon: '📷',
            description: 'Capturing moments and exploring visual storytelling through photography.'
        },
        {
            title: 'Reading',
            icon: '📚',
            description: 'Reading technical books, science fiction, and philosophy to broaden my perspective.'
        },
        {
            title: 'Hiking',
            icon: '🥾',
            description: 'Exploring nature trails and mountains for inspiration and rejuvenation.'
        }
    ];

    return (
        <section className="py-12">
            <SectionHeader title="Interests" subtitle="What I love besides coding" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interests.map((interest, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="text-4xl mb-4">{interest.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                        <p className="text-gray-600">{interest.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Interests;