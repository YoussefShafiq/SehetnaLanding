import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '/Logo.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className={`fixed top-0 left-0 z-50 h-16  w-full bg-primary flex flex-row justify-between items-center px-4 sm:px-8 transition-all duration-1000 ${true ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
            <div onClick={() => navigate('/')} className="flex items-center text-lg font-bold uppercase cursor-pointer">
                <img src={logo} alt="sehtnaa logo" className="w-28 mr-2" />
            </div>
            <LanguageSwitcher />
        </div>
    )
}
