import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Static categories data with services
const categories = [
    {
        id: 1,
        name: 'Home Nursing',
        desc: 'Professional nursing care at your home',
        icon: '🏥',
        services: [
            { name: 'Elderly Care', icon: '👵' },
            { name: 'Post-Op Care', icon: '🩹' },
            { name: 'Chronic Care', icon: '🫀' },
            { name: 'Post-Op Care', icon: '🩹' },
            { name: 'Post-Op Care', icon: '🩹' },
            { name: 'Post-Op Care', icon: '🩹' },
            { name: 'Palliative Care', icon: '🛌' }
        ]
    },
    {
        id: 2,
        name: 'Physiotherapy',
        desc: 'Rehabilitation and mobility services',
        icon: '💪',
        services: [
            { name: 'Post-Surgery Rehab', icon: '🚶' },
            { name: 'Sports Injury', icon: '🏃' },
            { name: 'Stroke Rehab', icon: '🧠' },
            { name: 'Pain Management', icon: '🦵' }
        ]
    },
    {
        id: 3,
        name: 'Medical Tests',
        desc: 'Comprehensive diagnostic services',
        icon: '🩺',
        services: [
            { name: 'Blood Tests', icon: '💉' },
            { name: 'ECG', icon: '📈' },
            { name: 'Urine Analysis', icon: '🧪' },
            { name: 'Glucose Test', icon: '🍬' }
        ]
    },
    {
        id: 4,
        name: 'Baby Care',
        desc: 'Specialized care for newborns',
        icon: '👶',
        services: [
            { name: 'Newborn Care', icon: '🍼' },
            { name: 'Vaccination', icon: '💊' },
            { name: 'Growth Monitoring', icon: '📏' },
            { name: 'Postnatal Care', icon: '🤱' }
        ]
    },
    {
        id: 5,
        name: 'Mental Health',
        desc: 'Psychological support services',
        icon: '🧠',
        services: [
            { name: 'Counseling', icon: '💬' },
            { name: 'Therapy', icon: '🛋️' },
            { name: 'Psychiatric Care', icon: '💊' },
            { name: 'Stress Management', icon: '🧘' }
        ]
    }
];

const CategoryCard = ({ category, animation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.05 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`p-4 mx-2 h-[350px] transition-all duration-500 perspective-1000 ${isVisible
                ? `opacity-100 translate-y-0 animate__animated ${animation}`
                : 'opacity-0 translate-y-10'
                }`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-primary to-[#1a4a5e] rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-white`}>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-center">{category.name}</h3>
                    <p className="text-sm text-center opacity-90">{category.desc}</p>
                    <div className="mt-4 text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {category.services.length} services
                    </div>
                </div>

                {/* Back Side */}
                <div className={`absolute w-full h-full  backface-hidden rotate-y-180 bg-gray-50 rounded-xl shadow-lg p-6`}>
                    <h3 className="text-lg font-bold mb-4 text-primary text-center">{category.name} Services</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {category.services.length <= 6 ? <>
                            {category.services.slice(0, 6).map((service, index) => (
                                <div key={index} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50">
                                    <span className="text-2xl mb-1">{service.icon}</span>
                                    <span className="text-xs text-center font-medium text-gray-700">{service.name}</span>
                                </div>
                            ))}
                        </> : <>
                            {category.services.slice(0, 5).map((service, index) => (
                                <>
                                    <div key={index} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50">
                                        <span className="text-2xl mb-1">{service.icon}</span>
                                        <span className="text-xs text-center font-medium text-gray-700">{service.name}</span>
                                    </div>
                                </>
                            ))}
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50">

                                <span className="text-xs text-center font-medium text-gray-700">+ {category.services.length - 5} more</span>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function CategoriesSlider() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    function getData() {
        return axios.get('https://api.sehtnaa.com/api/landing');
    }

    const { data: landingData } = useQuery({
        queryKey: ['landing'],
        queryFn: getData,
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const animations = [
        'animate__fadeIn',
    ];

    return (
        <div
            ref={sectionRef}
            className={`py-12 px-4 bg-white h-fit transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <h2 className="text-4xl font-bold text-center mb-16 text-black">Our <span className='text-primary'>Services Categories</span></h2>
            <Slider {...settings}>
                {landingData?.data?.data?.categories?.map((category, index) => (
                    <div key={category.id} className="px-2">
                        <CategoryCard
                            category={category}
                            animation={animations[index % animations.length]}
                        />
                    </div>
                )) || categories.map((category, index) => (
                    <div key={category.id} className="px-2">
                        <CategoryCard
                            category={category}
                            animation={animations[index % animations.length]}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}