import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '/Logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export default function CategoryServices() {
    const { categoryId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;


    function getCategoryData() {
        return axios.get('https://api.sehtnaa.com/api/landing/categories/' + categoryId);
    }

    const { data: categoryData, isLoading: categoryLoading, isError: categoryError } = useQuery({
        queryKey: ['category'],
        queryFn: getCategoryData,
    });




    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    }, []);



    if (categoryLoading) {
        return <>
            <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
                {/* Category Header Skeleton */}
                <div className="mb-8 text-center">
                    <div className="h-10 bg-gray-200 rounded-lg w-1/5 mx-auto animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded-lg w-1/3 mx-auto mt-3 animate-pulse"></div>
                </div>

                {/* Services Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                        >
                            <div className="p-6 text-center">
                                {/* Icon Skeleton */}
                                <div className="flex justify-center mb-4">
                                    <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
                                </div>

                                {/* Title Skeleton */}
                                <div className="h-6 bg-gray-200 rounded-lg w-3/4 mx-auto mb-3"></div>

                                {/* Button Skeleton */}
                                <div className="h-10 bg-gray-200 rounded-lg mt-4 w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    }

    if (categoryError) {
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
            <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">{categoryData?.data?.data?.name?.[currentLanguage]}</h1>
                    <p className="text-gray-600 mt-2">{categoryData?.data?.data?.description?.[currentLanguage]}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryData?.data?.data?.services.map(service => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6 text-center">
                                <div className="text-4xl mb-4 flex justify-center"><img src={'https://api.sehtnaa.com/storage/' + service.icon} className=" h-16" alt="" /></div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name?.[currentLanguage]}</h3>
                                <button onClick={() => serviceDetails(service)} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primarydark transition-colors">
                                    {t('CategoryServices.ViewDetails')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}