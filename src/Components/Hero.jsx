import React, { useRef, useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import Mockup from '../assets/images/Mockup.png';
import logo from '/Logo.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Navbar from './Navbar';

export default function Hero() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        setAnimated(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [animated]);

    return (
        <div
            ref={sectionRef}
            className="flex flex-col p-5 pb-0 bg-primary text-white "
        >
            {/* Navbar */}
            {/* <Navbar /> */}

            {/* Hero Content */}
            <div className="flex flex-col container lg:flex-row justify-between items-center mt-10 sm:mt-5 lg:mt-0 flex-grow">
                <div className={`flex flex-col  gap-3 sm:gap-5 w-full lg:w-1/2 transition-all duration-1000 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize">
                        {t('hero.title')}
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        {t('hero.subtitle')}
                    </h1>
                    <p className="text-sm sm:text-base opacity-90">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 font-semibold mt-3">
                        <a href="#download" className={`flex items-center gap-2 bg-[#fff] text-primary px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-[#009379] hover:text-white transition-all ${animated ? 'animate__animated animate__bounceIn' : 'opacity-0'
                            }`}>
                            <Rocket size={18} /> {t('hero.button')}
                        </a>

                    </div>
                </div>

                <div className={`w-full lg:w-1/2 overflow-hidden flex justify-center mt-10 lg:mt-0 transition-all duration-1000 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <img
                        src={Mockup}
                        className="w-full max-w-md lg:max-w-lg xl:max-w-xl hover:scale-105 transition-transform duration-500"
                        alt="Sehetna App Mockup"
                    />
                </div>
            </div>
        </div>
    );
}