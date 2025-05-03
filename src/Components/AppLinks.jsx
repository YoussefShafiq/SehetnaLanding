import React from 'react';
import QRCode from 'react-qr-code';
import { FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

export default function AppLinks() {
    const { t } = useTranslation();
    const clientplayStoreUrl = "https://play.google.com/store/apps/details?id=com.sehtna";
    const clientappStoreUrl = "https://apps.apple.com/app/sehtna";
    const providerplayStoreUrl = "https://play.google.com/store/apps/details?id=com.sehtna";
    const providerappStoreUrl = "https://apps.apple.com/app/sehtna";

    return (
        <div
            id='download'
            className="flex flex-col gap-14 items-center justify-center py-16 bg-primary p-5"
            dir={t('appLinks._dir')}
        >
            <h1 className='text-4xl font-bold capitalize text-white text-center'>
                {t('appLinks.title')}
            </h1>

            <div className="flex lg:flex-row flex-col gap-10 justify-around w-full items-center">
                {/* Client App Section */}
                <div className="flex flex-col justify-center gap-5">
                    <h1 className='text-4xl font-bold capitalize text-white text-center'>
                        {t('appLinks.clientApp')}
                    </h1>

                    <div className="flex lg:flex-row flex-row justify-center items-center gap-5">
                        {/* Google Play */}
                        <div className="flex flex-col gap-5">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={clientplayStoreUrl}
                                target='_blank'
                                className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center space-x-2"
                            >
                                <FaGooglePlay className="text-xl" />
                                <span>{t('appLinks.playStore')}</span>
                            </motion.a>

                            <QRCodeContainer value={clientplayStoreUrl} />
                        </div>

                        {/* App Store */}
                        <div className="flex flex-col gap-5">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={clientappStoreUrl}
                                target="_blank"
                                className="px-6 py-3 bg-black text-white rounded-xl flex items-center space-x-2"
                            >
                                <IoLogoAppleAppstore className="text-xl" />
                                <span>{t('appLinks.appStore')}</span>
                            </motion.a>

                            <QRCodeContainer value={clientappStoreUrl} />
                        </div>
                    </div>
                </div>

                {/* Provider App Section */}
                <div className="flex flex-col justify-center gap-5">
                    <h1 className='text-4xl font-bold capitalize text-white text-center'>
                        {t('appLinks.providerApp')}
                    </h1>

                    <div className="flex lg:flex-row flex-row justify-center items-center gap-5">
                        {/* Google Play */}
                        <div className="flex flex-col gap-5">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={providerplayStoreUrl}
                                target='_blank'
                                className="px-6 py-3 bg-green-600 text-white rounded-xl flex items-center space-x-2"
                            >
                                <FaGooglePlay className="text-xl" />
                                <span>{t('appLinks.playStore')}</span>
                            </motion.a>

                            <QRCodeContainer value={providerplayStoreUrl} />
                        </div>

                        {/* App Store */}
                        <div className="flex flex-col gap-5">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={providerappStoreUrl}
                                target="_blank"
                                className="px-6 py-3 bg-black text-white rounded-xl flex items-center space-x-2"
                            >
                                <IoLogoAppleAppstore className="text-xl" />
                                <span>{t('appLinks.appStore')}</span>
                            </motion.a>

                            <QRCodeContainer value={providerappStoreUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Extracted QR Code component for better readability
function QRCodeContainer({ value }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gray-50 p-3 mx-auto w-fit rounded-2xl text-center"
        >
            <div className="mx-auto w-24 md:w-32 transition-all aspect-square">
                <QRCode
                    value={value}
                    size={128}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="Q"
                    className="w-full h-full"
                />
            </div>
        </motion.div>
    );
}