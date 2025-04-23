import React from 'react'
import Footer from './Footer'
import { Rocket } from 'lucide-react'
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '/Logo.png';

export default function Layout({ children }) {
    const navigate = useNavigate();


    return <>
        <div className="bg-primary py-3">
            <div className={`flex bg-primary flex-row justify-between items-center px-4 sm:px-8 transition-all duration-1000 ${true ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <div onClick={() => { navigate('/') }} className="flex items-center text-lg font-bold uppercase cursor-pointer">
                    <img src={logo} alt="sehtnaa logo" className="md:w-24 w-20 mr-2" />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 font-semibold ">
                    <button onClick={() => { navigate('/') }} className={`flex items-center gap-2 bg-secondary text-white text-xs md:text-base px-4 sm:px-5 py-2 sm:py-3 rounded-xl hover:bg-secondary/90 transition-all ${true ? 'animate__animated animate__bounceIn' : 'opacity-0'}`}>
                        <Rocket size={14} className='md:hidden' />
                        <Rocket size={16} className='hidden md:block' /> Get Started
                    </button>
                </div>
            </div>
        </div>

        {children}
        <Outlet></Outlet>

        <Footer />
    </>
}
