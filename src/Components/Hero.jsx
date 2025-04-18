import React, { useRef, useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import Mockup from '../assets/images/Mockup.png';

export default function Hero() {
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
            className="flex flex-col p-5 pb-0 bg-primary text-white"
        >
            {/* Navbar */}
            <div className={`flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <div className="flex items-center text-lg font-bold uppercase">
                    Sehetna App
                </div>
                <div className="hidden lg:flex items-center gap-3 sm:gap-5 font-semibold">
                    <button className="hover:underline">Contact</button>
                    <button className="flex items-center gap-2 bg-white bg-opacity-90 text-primary px-3 sm:px-4 py-1 sm:py-2 rounded-xl hover:bg-opacity-100 transition-all">
                        How it works
                    </button>
                    <button className="flex items-center gap-2 bg-secondary text-white px-3 sm:px-4 py-1 sm:py-2 rounded-xl hover:bg-secondary/90 transition-all">
                        <Rocket size={18} /> Get Started
                    </button>
                </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 mt-10 sm:mt-20 flex-grow">
                <div className={`flex flex-col gap-3 sm:gap-5 w-full lg:w-1/2 transition-all duration-1000 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Welcome to Sehetna
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        The best app for your Health management
                    </h1>
                    <p className="text-sm sm:text-base opacity-90">
                        Your comprehensive health companion that connects you with healthcare providers,
                        tracks your wellness, and simplifies medical management.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 font-semibold mt-3">
                        <button className={`flex items-center gap-2 bg-secondary text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-secondary/90 transition-all ${animated ? 'animate__animated animate__bounceIn' : 'opacity-0'
                            }`}>
                            <Rocket size={18} /> Get Started
                        </button>
                        <button className={`flex items-center gap-2 bg-white bg-opacity-90 text-primary px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-opacity-100 transition-all ${animated ? 'animate__animated animate__bounceIn delay-200' : 'opacity-0'
                            }`}>
                            How it works
                        </button>
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