import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Static categories data with services
const categories = [
    {
        id: 1,
        name: 'Home Nursing',
        desc: 'Professional nursing care at your home',
        icon: '🏥',
        services: [
            { id: 101, name: 'Elderly Care', icon: '👵' },
            { id: 102, name: 'Post-Op Care', icon: '🩹' },
            { id: 103, name: 'Chronic Care', icon: '🫀' },
            { id: 104, name: 'Palliative Care', icon: '🛌' }
        ]
    },
    {
        id: 2,
        name: 'Physiotherapy',
        desc: 'Rehabilitation and mobility services',
        icon: '💪',
        services: [
            { id: 201, name: 'Post-Surgery Rehab', icon: '🚶' },
            { id: 202, name: 'Sports Injury', icon: '🏃' },
            { id: 203, name: 'Stroke Rehab', icon: '🧠' },
            { id: 204, name: 'Pain Management', icon: '🦵' }
        ]
    },
    {
        id: 3,
        name: 'Medical Tests',
        desc: 'Comprehensive diagnostic services',
        icon: '🩺',
        services: [
            { id: 301, name: 'Blood Tests', icon: '💉' },
            { id: 302, name: 'ECG', icon: '📈' },
            { id: 303, name: 'Urine Analysis', icon: '🧪' },
            { id: 304, name: 'Glucose Test', icon: '🍬' }
        ]
    },
    {
        id: 4,
        name: 'Baby Care',
        desc: 'Specialized care for newborns',
        icon: '👶',
        services: [
            { id: 401, name: 'Newborn Care', icon: '🍼' },
            { id: 402, name: 'Vaccination', icon: '💊' },
            { id: 403, name: 'Growth Monitoring', icon: '📏' },
            { id: 404, name: 'Postnatal Care', icon: '🤱' }
        ]
    },
    {
        id: 5,
        name: 'Mental Health',
        desc: 'Psychological support services',
        icon: '🧠',
        services: [
            { id: 501, name: 'Counseling', icon: '💬' },
            { id: 502, name: 'Therapy', icon: '🛋️' },
            { id: 503, name: 'Psychiatric Care', icon: '💊' },
            { id: 504, name: 'Stress Management', icon: '🧘' }
        ]
    }
];

const CategoriesSlider = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const categoryServices = (category) => {
        navigate(`/category/${category.id}`, { state: { category } });
    };

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
        slidesToShow: 4.5,
        initialSlide: 0,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipeToSlide: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    const CategoryCard = ({ category, animation }) => {
        const [isVisible, setIsVisible] = useState(false);
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

        const handleCardClick = () => {
            categoryServices(category);
        };

        return (
            <div
                ref={cardRef}
                className={`p-4 mx-2 transition-all duration-300 ${isVisible
                    ? `opacity-100 translate-y-0 animate__animated ${animation}`
                    : 'opacity-0 translate-y-10'
                    }`}
                onClick={handleCardClick}
            >
                <div className="w-full h-[270px] transition-all duration-300 bg-gradient-to-br from-primary to-primarydark rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-xl hover:scale-105">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-center">{category.name}</h3>
                    <p className="text-sm text-center opacity-90">{category.desc}</p>
                    <div className="mt-4 text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {category.services.length} services
                    </div>
                </div>
            </div>
        );
    };

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
};

export default CategoriesSlider;