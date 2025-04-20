import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Static feedback data
const feedbacks = [
    {
        id: 1,
        user: {
            first_name: 'Ahmed',
            last_name: 'Mahmoud',
            user_type: 'admin'
        },
        location: 'Cairo',
        comment: 'The app has revolutionized how we deliver home healthcare in Egypt. The real-time nurse assignment feature works flawlessly.',
        rating: 5
    },
    {
        id: 2,
        user: {
            first_name: 'Ahmed',
            last_name: 'Mahmoud',
            user_type: 'admin'
        },
        location: 'Alexandria',
        comment: 'As a nurse using this platform, I appreciate the clean interface and reliable notifications. My income has increased by 40% since joining.',
        rating: 5
    },
    {
        id: 3,
        user: {
            first_name: 'Ahmed',
            last_name: 'Mahmoud',
            user_type: 'admin'
        },
        location: 'Giza',
        comment: 'Used the app when my mother needed urgent care at 2 AM. A nurse arrived within 25 minutes. Lifesaving service!',
        rating: 5
    }
];





const FeedbackCard = ({ feedback, animation }) => {
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

    return (
        <div
            ref={cardRef}
            className={`p-6 mx-2 mb-8 bg-gray-50 rounded-lg shadow-xl h-full transition-all duration-500 transform ${isVisible
                ? `opacity-100 translate-y-0 animate__animated ${animation}`
                : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="mt-auto capitalize">
                <h4 className="font-semibold text-lg">{feedback.user.first_name} {feedback.user.last_name}</h4>
                <p className="text-gray-500 text-sm">{(feedback.user.user_type === 'provider'?'doctor':feedback.user.user_type)}</p>
            </div>
            <div className="flex items-center mt-2 mb-3">
                {[...Array(feedback.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-gray-600 mb-4 italic h-[70px] overflow-hidden">"{feedback.comment}"</p>
        </div>
    );
};

export default function FeedbacksSlider() {


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
    })

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
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
            <h2 className="text-4xl font-bold text-center mb-16 text-black">What Our <span className='text-primary'>Users Say</span></h2>
            <Slider {...settings}>
                {landingData?.data?.data?.feedbacks.map((feedback, index) => (
                    <div key={feedback.id} className="px-2">
                        <FeedbackCard
                            feedback={feedback}
                            animation={animations[index % animations.length]}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}