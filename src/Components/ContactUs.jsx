import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
    const { t } = useTranslation();
    const contactData = {
        email: 'support@sehtnaa.com',
        phone: '+201012345678',
        address: 'Cairo, Egypt'
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

        window.location.href = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <div className="py-20 px-4 bg-primary bg-opacity-15">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">
                    {t('contactUs.title_w1')} <span className="text-primary">{t('contactUs.title_w2')}</span>
                </h1>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    {t('contactUs.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    {t('contactUs.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                    {t('contactUs.form.subject')}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    {t('contactUs.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300 font-medium"
                            >
                                {t('contactUs.form.submit')}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('contactUs.info.title')}</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                                        <Mail className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-gray-800">{t('contactUs.info.email')}</h3>
                                        <p className="text-gray-600">{contactData.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                                        <Phone className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-gray-800">{t('contactUs.info.call')}</h3>
                                        <p className="text-gray-600">{contactData.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                                        <MapPin className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg text-gray-800"> {t('contactUs.info.address')}</h3>
                                        <p className="text-gray-600">{contactData.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-medium text-lg mb-4 text-gray-800">{t('contactUs.info.hours')}</h3>
                                <ul className="space-y-2 text-gray-600 capitalize">
                                    <li className="flex justify-between">
                                        <span>sunday - thursday</span>
                                        <span>9:00 AM - 5:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 2:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>friday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}