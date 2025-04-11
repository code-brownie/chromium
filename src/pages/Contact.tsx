import { ChangeEvent, FormEvent, useState } from 'react';
import SectionHeader from '../components/SectionHeader';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);


        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setSubmitMessage('Thank you! Your message has been sent successfully.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <section className="py-12">
            <SectionHeader title="Contact Me" subtitle="Let's get in touch" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                    <p className="text-gray-700 mb-6">
                        Have a question or want to work together? Feel free to reach out to me through this form or using the contact information below.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="text-blue-600 mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:random.email@example.com" className="text-gray-600 hover:text-blue-600">your.email@example.com</a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <p className="text-gray-600">(123) 456-7890</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="text-blue-600 mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-gray-600">San Francisco, CA</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-medium mb-2">Connect on Social Media</h4>
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                                    GitHub
                                </a>
                                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full px-6 py-3 rounded-lg text-white font-medium ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                                } transition`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitMessage && (
                            <div className={`mt-4 p-3 rounded-lg ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;