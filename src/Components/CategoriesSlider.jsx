import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const CategoriesSlider = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language; // 'en' or 'ar'


    function getCategoriesData() {
        return axios.get('https://api.sehtnaa.com/api/landing/categories');
    }

    const { data: categoriesData, isLoading: categoriesLoading, isError: categoriesError } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategoriesData,
    });


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
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        initialSlide: 0,
        centerMode: false,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
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
                <div className="w-full h-[270px] transition-all duration-300 bg-gradient-to-br from-primary to-primarydark rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-xl hover:scale-105 overflow-hidden">
                    <div className="text-4xl mb-4"><img src={'https://api.sehtnaa.com/storage/' + category?.icon} alt={category?.name?.[currentLanguage]} className="w-20 h-20" /></div>
                    <h3 className="text-xl font-bold mb-2 text-center">{category?.name?.[currentLanguage]}</h3>
                    <p className="text-sm text-center opacity-90">{category?.desc?.[currentLanguage]}</p>
                    <div className="mt-4 text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {category?.services?.length} {t('ourServices.services')}
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
            <h2 className="text-4xl font-bold text-center mb-16 text-black">{t('ourServices.title_w1')} <span className='text-primary'>{t('ourServices.title_w2')}</span></h2>
            <Slider {...settings}>
                {categoriesData?.data?.data?.map((category, index) => (
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