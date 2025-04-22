import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '/Logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import Footer from './Footer';

export default function CategoryServices() {
    const { categoryId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    async function getCategoryServices() {
        try {
            setIsLoading(true);
            const response = await axios.get('/CategoriesServices.json');
            const category = response.data.find(category => category.id == categoryId);
            setSelectedCategory(category);
        } catch (error) {
            console.error("Error fetching category services:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCategoryServices();
    }, [categoryId]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!selectedCategory) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500">No services found for this category</p>
            </div>
        );
    }

    function serviceDetails(service) {
        navigate(`/service/${service.id}`);
    }

    return (
        <div className="bg-gray-100">
            {/* navbar */}
            <div className="bg-primary py-3">
                <div className={`flex bg-primary flex-row justify-between items-center px-4 sm:px-8 transition-all duration-1000 ${true ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div onClick={() => { navigate('/') }} className="flex items-center text-lg font-bold uppercase cursor-pointer">
                        <img src={logo} alt="sehtnaa logo" className="md:w-24 w-20 mr-2" />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 font-semibold ">
                        <button onClick={() => { navigate('/') }} className={`flex items-center gap-2 bg-secondary text-white text-xs md:text-base px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-secondary/90 transition-all ${true ? 'animate__animated animate__bounceIn' : 'opacity-0'}`}>
                            <Rocket size={14} className='md:hidden' />
                            <Rocket size={16} className='hidden md:block' /> Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">{selectedCategory.name}</h1>
                    <p className="text-gray-600 mt-2">{selectedCategory.desc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {selectedCategory.services.map(service => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6 text-center">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                                <button onClick={() => serviceDetails(service)} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primarydark transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedCategory.services.map(service => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
                        >
                            <div className="flex flex-col md:flex-row-reverse p-6 gap-6 h-full">
                                <div className="flex-shrink-0 flex items-center justify-center md:w-1/5">
                                    <div className="bg-primary w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full">
                                        <span className="text-2xl">{service.icon}</span>
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-bold text-gray-900">{service.name}</h2>
                                    </div>

                                    <div className="flex-grow">
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {service.desc}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

            <Footer />
        </div>
    );
}