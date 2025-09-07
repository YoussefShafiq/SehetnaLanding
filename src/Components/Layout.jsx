import React from 'react'
import Footer from './Footer'
import { InfoIcon, Rocket } from 'lucide-react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '/Logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import Navbar from './Navbar';

export default function Layout({ children }) {
    const navigate = useNavigate();


    return <>
        <div className="font-ultima">
            <Navbar />


            <div className="mt-16">
                {children}
            </div>
            <Outlet></Outlet>

            <Footer />
        </div>
        <div className="fixed bottom-5 right-5 h-50 w-10 flex flex-col justify-between items-center bg-primary text-white shadow-xl rounded-full p-2 z-50">
            <Link to={'/info'} >
                <InfoIcon />
            </Link>
        </div>
    </>
}
