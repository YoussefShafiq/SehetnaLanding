import { HandHeart, User2, Users2, UsersRound } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export default function Stats() {
    const { t } = useTranslation();
    function getData() {
        return axios.get('https://api.sehtnaa.com/api/landing');
    }

    const { data: landingData } = useQuery({
        queryKey: ['landing'],
        queryFn: getData,
    })

    const stats = [
        {
            title: t("metrics.users"),
            value: (landingData?.data?.data?.customers?.count < 275 ? 275 : landingData?.data?.data?.customers?.count) || 0,
            icon: <User2 size={40} color='#3499c5' strokeWidth={2} />
        },
        {
            title: t("metrics.providers"),
            value: landingData?.data?.data?.providers?.count || 0,
            icon: <UsersRound size={40} color='#3499c5' strokeWidth={2} />
        },
        {
            title: t("metrics.services"),
            value: landingData?.data?.data?.services?.count || 0,
            icon: <HandHeart size={40} color='#3499c5' strokeWidth={2} />
        },
        {
            title: t("metrics.totalUsers"),
            value: (landingData?.data?.data?.users?.count < 412 ? 412 : landingData?.data?.data?.users?.count) || 0,
            icon: <UsersRound size={40} color='#3499c5' strokeWidth={2} />
        }
    ];

    return (
        <div className="flex flex-col gap-8 py-20  px-4 bg-primary bg-opacity-15 text-center">
            <h1 className='text-4xl font-bold text-black'> {t("metrics.title_w1")} <span className='text-primary'>{t("metrics.title_w2")}</span> {t("metrics.title_w3")}</h1>
            <div className="flex justify-center gap-8 flex-wrap">
                {landingData?.data?.data && <>
                    {stats.map((stat, index) => (
                        <StatItem
                            key={stat.value + index}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    ))}
                </>}
            </div>
        </div>
    );
}

function StatItem({ title, value, icon }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCount();
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => {
            if (statRef.current) {
                observer.unobserve(statRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCount = () => {
        const duration = 500; // Animation duration in ms
        const startTime = performance.now();
        const startValue = 0;
        const endValue = value;

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                const progress = elapsedTime / duration;
                const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
                setCount(currentValue);
                requestAnimationFrame(updateCount);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <div
            ref={statRef}
            className="flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 bg-white shadow-xl shadow-[#569bb94d] rounded-xl p-5 transition-all hover:scale-105"
        >
            {icon}
            <h2 className="text-lg sm:text-xl font-medium text-[#2a7b9e]">{title}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">
                {count.toLocaleString()}
            </p>
        </div>
    );
}