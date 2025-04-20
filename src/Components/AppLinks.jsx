import React from 'react';
import QRCode from 'react-qr-code';
import { FaApple, FaGooglePlay, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import img from '../assets/images/Mockup.svg'

export default function AppLinks() {
    const appStoreUrl = "https://apps.apple.com/app/sehtna";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.sehtna";
    const directDownloadUrl = "https://download.sehtna.com";

    return <>
        <div id='download' className="flex flex-col gap-14 items-center justify-center py-16 bg-primary p-5">
            <h1 className='text-4xl font-bold capitalize text-white text-center'>use sehtnaa app today!</h1>
            <div className="flex flex-wrap justify-center gap-5">
                <div className="flex flex-col gap-5">
                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href={playStoreUrl}
                        target='_blank'
                        className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center space-x-2"
                    >
                        <FaGooglePlay className="text-xl" />
                        <span>Play Store</span>
                    </motion.a>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-gray-50 p-4 rounded-2xl text-center"
                    >
                        <div className="mx-auto w-32 h-32">
                            <QRCode
                                value={playStoreUrl}
                                size={128}
                                bgColor="#ffffff"
                                fgColor="#000000"
                                level="Q"
                                className="w-full h-full"
                            />
                        </div>

                    </motion.div>
                </div>
                <div className="flex flex-col gap-5">
                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        href={appStoreUrl}
                        target="_blank"
                        className="px-6 py-3 bg-black text-white rounded-xl flex items-center space-x-2"
                    >
                        <FaApple className="text-xl" />
                        <span>App Store</span>
                    </motion.a>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-gray-50 p-4 rounded-2xl text-center"
                    >
                        <div className="mx-auto w-32 h-32">
                            <QRCode
                                value={appStoreUrl}
                                size={128}
                                bgColor="#ffffff"
                                fgColor="#000000"
                                level="Q"
                                className="w-full h-full"
                            />
                        </div>

                    </motion.div>
                </div>
            </div>
            <div className="hidden lg:flex justify-center">
                <img src={img} alt="" className='w-5/6' />
            </div>
        </div >
    </>



}