import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '/Logo.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

export default function ServiceDetails() {
    const { serviceId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    function getServiceData() {
        return axios.get('https://api.sehtnaa.com/api/landing/services/' + serviceId);
    }

    const { data: ServiceData, isLoading: ServiceLoading, isError: ServiceError } = useQuery({
        queryKey: ['Service'],
        queryFn: getServiceData,
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    }, []);

    if (ServiceLoading) {
        return <>
            <div className="max-w-4xl mx-auto py-8 mb-5">
                {/* Service Header Skeleton */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded-lg w-3/4 mx-auto mb-3 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded-lg w-2/3 mx-auto mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-1/4 mx-auto mt-4 animate-pulse"></div>
                </div>

                {/* Service Details Card Skeleton */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
                    <div className="md:flex">
                        {/* Image Section Skeleton */}
                        <div className="md:w-1/3 bg-gray-200 p-12 flex items-center justify-center">
                            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
                        </div>

                        {/* Content Section Skeleton */}
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="flex items-center mb-6">
                                <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
                                <div className="ml-auto h-6 bg-gray-200 rounded-full w-20"></div>
                            </div>

                            <div className="space-y-6">
                                {/* Description Skeleton */}
                                <div>
                                    <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-3"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
                                        <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
                                        <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
                                    </div>
                                </div>

                                {/* Category Skeleton */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="h-6 bg-gray-200 rounded-lg w-1/3 mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
                                    </div>
                                </div>

                                {/* What's Included Skeleton */}
                                <div>
                                    <div className="h-7 bg-gray-200 rounded-lg w-1/3 mb-4"></div>
                                    <ul className="space-y-4">
                                        {[...Array(4)].map((_, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="h-6 w-6 bg-gray-200 rounded-full mr-3"></div>
                                                <div className="h-5 bg-gray-200 rounded-lg w-3/4"></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    }

    if (ServiceError) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
                    <p className="text-gray-600">The requested service could not be loaded.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-5">
            <div className="max-w-4xl mx-auto py-8 mb-5">
                {/* Service Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-6xl mb-4"><img src={'https://api.sehtnaa.com/storage/' + ServiceData?.data?.data?.category?.icon} className=" h-16" alt="" /></span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">{ServiceData?.data?.data?.name?.[currentLanguage]}</h1>
                    <p className="text-xl text-gray-600">{ServiceData?.data?.data?.description?.[currentLanguage]}</p>
                    <div className="mt-4 inline-block bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {ServiceData?.data?.data?.category?.name?.[currentLanguage]}
                    </div>
                </div>

                {/* Service Details Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Service Image/Icon Section */}
                        <div className="md:w-1/3 bg-gradient-to-br from-primary to-primarydark p-12 flex items-center justify-center">
                            <img src={'https://api.sehtnaa.com/storage/' + ServiceData?.data?.data?.icon} className=" w-full" alt="" />
                        </div>

                        {/* Service Content Section */}
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="flex items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">{t('ServiceDetails.ServiceDetails')}</h2>
                                <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {t('ServiceDetails.Avilable')}
                                </span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('ServiceDetails.Description')}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {ServiceData?.data?.data?.description?.[currentLanguage]}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('ServiceDetails.Category')}</h3>
                                        <p className="text-gray-600">{ServiceData?.data?.data?.category?.name?.[currentLanguage]}</p>
                                    </div>
                                </div>

                                <div className="">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('ServiceDetails.Whats_Included')}</h2>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{t('ServiceDetails.include_1')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{t('ServiceDetails.include_2')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{t('ServiceDetails.include_3')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{t('ServiceDetails.include_4')}</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}