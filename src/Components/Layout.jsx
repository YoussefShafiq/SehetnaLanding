import React from 'react'
import Footer from './Footer'
import { Rocket } from 'lucide-react'
import { Outlet, useNavigate } from 'react-router-dom';
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
    </>
}
