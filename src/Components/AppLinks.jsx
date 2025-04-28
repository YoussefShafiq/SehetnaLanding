import React from 'react';
import QRCode from 'react-qr-code';
import { FaApple, FaGooglePlay, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import img from '../assets/images/iPhone 12 Pro.svg'
import { IoLogoAppleAppstore } from 'react-icons/io5';

export default function AppLinks() {
    const clientplayStoreUrl = "https://play.google.com/store/apps/details?id=com.sehtna";
    const clientappStoreUrl = "https://apps.apple.com/app/sehtna";
    const providerplayStoreUrl = "https://play.google.com/store/apps/details?id=com.sehtna";
    const providerappStoreUrl = "https://apps.apple.com/app/sehtna";

    return <>
        <div id='download' className="flex flex-col gap-14 items-center justify-center py-16 bg-primary p-5">
            <h1 className='text-4xl font-bold capitalize text-white text-center'>use sehtnaa app today!</h1>
            <div className="flex lg:flex-row flex-col gap-10 justify-around w-full items-center">
                <div className="flex flex-col justify-center gap-5">

                    <h1 className='text-4xl font-bold capitalize text-white text-center'> client app</h1>
                    {/* client apps qr codes */}
                    <div className="flex lg:flex-row flex-row justify-center items-center gap-5">
                        <div className="flex flex-col gap-5">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={clientplayStoreUrl}
                                target='_blank'
                                className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center space-x-2"
                            >
                                <FaGooglePlay className="text-xl" />
                                <span>Play Store</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 bg-gray-50 p-3 mx-auto w-fit rounded-2xl text-center"
                            >
                                <div className="mx-auto w-24 md:w-32 transition-all aspect-square">
                                    <QRCode
                                        value={clientplayStoreUrl}
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
                                href={clientappStoreUrl}
                                target="_blank"
                                className="px-6 py-3 bg-black text-white rounded-xl flex items-center space-x-2"
                            >
                                <IoLogoAppleAppstore className="text-xl" />
                                <span>App Store</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 bg-gray-50 p-3 mx-auto w-fit rounded-2xl text-center"
                            >
                                <div className="mx-auto w-24 md:w-32 transition-all aspect-square">
                                    <QRCode
                                        value={clientappStoreUrl}
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
                </div>
                {/* <div className="hidden lg:flex justify-center text-center w-1/5">
                    <img src={img} className='w-full' />
                </div> */}
                <div className="flex flex-col justify-center gap-5">
                    <h1 className='text-4xl font-bold capitalize text-white text-center'> providers app</h1>
                    {/* provider apps qr codes */}
                    <div className="flex lg:flex-row flex-row justify-center items-center gap-5">
                        <div className="flex flex-col gap-5">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={providerplayStoreUrl}
                                target='_blank'
                                className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center space-x-2"
                            >
                                <FaGooglePlay className="text-xl" />
                                <span>Play Store</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 bg-gray-50 p-3 mx-auto w-fit rounded-2xl text-center"
                            >
                                <div className="mx-auto w-24 md:w-32 transition-all aspect-square">
                                    <QRCode
                                        value={providerplayStoreUrl}
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
                                href={providerappStoreUrl}
                                target="_blank"
                                className="px-6 py-3 bg-black text-white rounded-xl flex items-center space-x-2"
                            >
                                <IoLogoAppleAppstore className="text-xl" />
                                <span>App Store</span>
                            </motion.a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex-1 bg-gray-50 p-3 mx-auto w-fit rounded-2xl text-center"
                            >
                                <div className="mx-auto w-24 md:w-32 transition-all aspect-square">
                                    <QRCode
                                        value={providerappStoreUrl}
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
                </div>
            </div>
        </div >
    </>



}