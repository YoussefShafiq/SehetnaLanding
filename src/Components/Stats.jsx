import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
    const stats = [
        { title: "Users", value: 1000 },
        { title: "Providers", value: 500 },
        { title: "Services", value: 750 },
        { title: "Total Users", value: 2000 }
    ];

    return (
        <div className="flex justify-center gap-8 py-10 flex-wrap px-4">
            {stats.map((stat, index) => (
                <StatItem
                    key={index}
                    title={stat.title}
                    value={stat.value}
                />
            ))}
        </div>
    );
}

function StatItem({ title, value }) {
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
            className="flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 bg-primary bg-opacity-20 shadow-xl shadow-[#569bb99e] rounded-xl p-5 transition-all hover:scale-105"
        >
            <h2 className="text-lg sm:text-xl font-medium text-gray-700">{title}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">
                {count.toLocaleString()}
            </p>
        </div>
    );
}