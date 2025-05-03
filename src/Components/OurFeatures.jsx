import React, { useRef, useEffect, useState } from 'react';
import img from '../assets/images/Visuals.png';
import { Heart, Zap, Shield, Globe, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function OurFeatures() {
    const { t } = useTranslation();

    const features = [
        {
            title: t('ourFeatures.feature1.title'),
            icon: <Zap color='#3499c5' />,
            animation: "animate__fadeInTopLeft",
            description: t('ourFeatures.feature1.description'),
        },
        {
            title: t('ourFeatures.feature2.title'),
            icon: <Shield color='#3499c5' />,
            animation: "animate__fadeInTopRight",
            description: t('ourFeatures.feature2.description'),
        },
        {
            title: t('ourFeatures.feature3.title'),
            icon: <Globe color='#3499c5' />,
            animation: "animate__fadeInBottomLeft",
            description: t('ourFeatures.feature3.description'),
        },
        {
            title: t('ourFeatures.feature4.title'),
            icon: <Clock color='#3499c5' />,
            animation: "animate__fadeInBottomRight",
            description: t('ourFeatures.feature4.description'),
        }
    ];


    return (
        <div className="flex flex-col lg:flex-row items-center py-10 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full lg:w-2/5 lg:flex justify-center items-center mb-10 lg:mb-0 hidden">
                <img
                    src={img}
                    className='w-11/12 max-w-lg'
                    alt="Our Features Visual"
                />
            </div>

            <div className="w-full lg:w-3/5 flex flex-col gap-5 text-black">
                <h1 className="text-4xl sm:text-5xl font-bold">
                    {t('ourFeatures.title_w1')} <span className="text-primary"> {t('ourFeatures.title_w2')}</span>
                </h1>

                <p className='text-lg text-gray-600'>
                    {t('ourFeatures.description')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            icon={feature.icon}
                            animation={feature.animation}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ title, icon, animation, description }) {
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
            { threshold: 0.1 }
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
            className={`shadow-xl shadow-[#349ac515] rounded-xl p-5 transition-all duration-500 transform ${isVisible ?
                `opacity-100 translate-y-0 animate__animated ${animation}` :
                'opacity-0 translate-y-10'
                }`}
        >
            <h2 className="text-xl sm:text-2xl flex items-center gap-3 text-gray-900 font-medium">
                <div className="flex justify-center items-center bg-primary bg-opacity-20 w-10 h-10 rounded-lg">
                    {icon}
                </div>
                {title}
            </h2>
            <p className="mt-2 text-gray-600">
                {description}
            </p>
        </div>
    );
}