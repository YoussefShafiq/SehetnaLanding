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
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
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

                {/* Additional Information Section
                <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Initial consultation with our specialist</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Personalized treatment plan</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Regular progress tracking</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">24/7 customer support</span>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}