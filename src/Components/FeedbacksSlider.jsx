import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';

// Static feedback data
const feedbacks = [
    {
        id: 1,
        name: 'Dr. Ahmed Mahmoud',
        role: 'Medical Director',
        location: 'Cairo',
        comment: 'The app has revolutionized how we deliver home healthcare in Egypt. The real-time nurse assignment feature works flawlessly.',
        rating: 5
    },
    {
        id: 2,
        name: 'Nurse Yasmin Hassan',
        role: 'Registered Nurse',
        location: 'Alexandria',
        comment: 'As a nurse using this platform, I appreciate the clean interface and reliable notifications. My income has increased by 40% since joining.',
        rating: 5
    },
    {
        id: 3,
        name: 'Mohamed Ali',
        role: 'Patient',
        location: 'Giza',
        comment: 'Used the app when my mother needed urgent care at 2 AM. A nurse arrived within 25 minutes. Lifesaving service!',
        rating: 5
    },
    {
        id: 4,
        name: 'Hospital Administrator',
        role: 'Healthcare Manager',
        location: 'Port Said',
        comment: "We've integrated this with our aftercare program. The admin dashboard gives us perfect control over patient follow-ups.",
        rating: 4
    },
    {
        id: 5,
        name: 'Nurse Samira Farouk',
        role: 'Certified Nurse',
        location: 'Luxor',
        comment: 'The document verification process was smooth. I was approved within 24 hours and started receiving requests immediately.',
        rating: 5
    },
    {
        id: 6,
        name: 'Rania Sobhy',
        role: 'Patient',
        location: 'Mansoura',
        comment: 'Canceling within 3 minutes when I accidentally booked the wrong service was so easy. Very user-friendly.',
        rating: 4
    },
    {
        id: 7,
        name: 'Dr. Karim Adel',
        role: 'General Practitioner',
        location: 'Aswan',
        comment: 'The payment system works perfectly - both cash and credit card options are essential for our patients.',
        rating: 5
    },
    {
        id: 8,
        name: 'Hanaa Mohamed',
        role: 'Caregiver',
        location: 'Ismailia',
        comment: 'Scheduling recurring visits for my elderly father has never been easier. The calendar integration is perfect.',
        rating: 5
    },
    {
        id: 9,
        name: 'Ahmed Samir',
        role: 'Patient',
        location: 'Tanta',
        comment: 'The complaint section actually works! I got a response within 2 hours when I had an issue.',
        rating: 4
    },
    {
        id: 10,
        name: 'Nurse Team Leader',
        role: 'Senior Nurse',
        location: 'Suez',
        comment: 'Managing my team through the nurse app is efficient. The profile section shows all necessary credentials clearly.',
        rating: 5
    },
    {
        id: 11,
        name: 'Lamia Gamal',
        role: 'Pharmacist',
        location: 'Zagazig',
        comment: 'We recommend this app to all our chronic patients who need regular home care. The scheduling is reliable.',
        rating: 5
    },
    {
        id: 12,
        name: 'Patient\'s Daughter',
        role: 'Family Member',
        location: 'Damietta',
        comment: 'Used the immediate service feature when my father fell. The GPS tracking showed exactly when help would arrive.',
        rating: 5
    },
    {
        id: 13,
        name: 'Nurse Trainer',
        role: 'Healthcare Educator',
        location: 'Minya',
        comment: 'Training new nurses on this app takes less than 10 minutes. The interface is very intuitive.',
        rating: 5
    },
    {
        id: 14,
        name: 'Corporate Client',
        role: 'HR Manager',
        location: 'New Cairo',
        comment: 'We provide this as a benefit to our employees. The admin dashboard lets us monitor usage and costs perfectly.',
        rating: 4
    },
    {
        id: 15,
        name: 'Elderly Patient',
        role: 'Senior User',
        location: 'Assiut',
        comment: 'Even at 72 years old, I find this app easy to use. Big buttons and clear instructions make it accessible.',
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
            className={`p-6 mx-2 mb-4 bg-white rounded-lg shadow-md h-full transition-all duration-500 transform ${isVisible
                ? `opacity-100 translate-y-0 animate__animated ${animation}`
                : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="flex items-center mb-4">
                {[...Array(feedback.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-gray-600 mb-4 italic">"{feedback.comment}"</p>
            <div className="mt-auto">
                <h4 className="font-semibold text-lg">{feedback.name}</h4>
                <p className="text-gray-500 text-sm">{feedback.role}</p>
            </div>
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
        'animate__fadeInTopLeft',

    ];

    return (
        <div
            ref={sectionRef}
            className={`py-12 px-4 bg-gray-50 h-fit transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <Slider {...settings}>
                {feedbacks.map((feedback, index) => (
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