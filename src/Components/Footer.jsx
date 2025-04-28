import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { TbBrandLinkedinFilled } from 'react-icons/tb'

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-5 py-3 bg-[#2d2d2d] text-white flex-wrap">
            <p className='text-sm'>© 2025 sehtna app copyrights. </p>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#4e4d4d] flex justify-center items-center rounded-full text-xl">
                    <FaSquareXTwitter />
                </div>
                <div className="w-8 h-8 bg-[#4e4d4d] flex justify-center items-center rounded-full text-xl">
                    <AiFillInstagram />
                </div>
                <div className="w-8 h-8 bg-[#4e4d4d] flex justify-center items-center rounded-full text-xl">
                    <FaFacebook />
                </div>
                <div className="w-8 h-8 bg-[#4e4d4d] flex justify-center items-center rounded-full text-xl">
                    <TbBrandLinkedinFilled />
                </div>
            </div>
        </div>
    )
}
