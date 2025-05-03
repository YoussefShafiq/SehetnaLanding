import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

    useEffect(() => {
        setIsEnglish(i18n.language === 'en');
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.lang = lng;
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => changeLanguage(isEnglish ? 'ar' : 'en')}
                className="relative flex items-center w-24 h-10 rounded-full bg-gray-100 shadow-inner cursor-pointer transition-all duration-300 hover:shadow-md focus:outline-none"
                aria-label="Toggle language"
            >
                {/* Sliding pill */}
                <div
                    className={`absolute left-1 w-10 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-md transform transition-transform duration-300 ${isEnglish ? 'translate-x-0' : 'translate-x-12'
                        }`}
                ></div>

                {/* Language labels */}
                <span
                    className={`flex-1 text-center z-10 font-medium text-sm transition-colors duration-200 ${isEnglish ? 'text-gray-100' : 'text-gray-100'
                        }`}
                >
                    {isEnglish ? 'EN' : 'AR'}
                </span>
                <span
                    className={`flex-1 text-center z-10 font-medium text-sm transition-colors duration-200 ${!isEnglish ? 'text-gray-600' : 'text-gray-600'
                        }`}
                >
                    {!isEnglish ? 'EN' : 'AR'}
                </span>
            </button>
        </div>
    );
};

export default LanguageSwitcher;