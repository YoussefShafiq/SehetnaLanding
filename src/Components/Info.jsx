import React from 'react'
import step1img from '../assets/images/info/1.jpeg'
import step2img from '../assets/images/info/2.jpeg'
import step3img from '../assets/images/info/3.jpeg'
import step4img from '../assets/images/info/4.jpeg'

export default function Info() {
    const steps = [
        {
            id: 1,
            title: 'Open the mobile app',
            description:
                'Open the mobile app and go to your Account/Profile screen from the bottom navigation or menu.',
            image: step1img,
            alt: 'Open account screen',
        },
        {
            id: 2,
            title: 'Open your profile',
            description:
                'go to your Account/Profile screen from the bottom navigation or menu',
            image: step2img,
            alt: 'Tap delete icon',
        },
        {
            id: 3,
            title: "click Delete Account, and confirm",
            description:
                "A confirmation dialog will appear. Type the word 'confirm' exactly to validate your confirmation.",
            image: step3img,
            alt: 'Type confirm to validate',
        },
        {
            id: 4,
            title: 'Click Yes',
            description:
                "After typing 'confirm' Press the Yes button to proceed with deleting your account.Your account will be deleted immediately. This action cannot be undone.",
            image: step4img,
            alt: 'Press confirm button',
        }
    ]

    return (
        <div className="bg-primary bg-opacity-15">
            <div className="container py-20">
                {/* Page Title */}
                <div className="mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Delete <span className="text-primary">Your Account</span>
                    </h1>
                    <p className="text-gray-600">
                        Follow these steps to delete your account from the mobile application. We’ll add an
                        illustrative image for each step once provided.
                    </p>
                </div>

                {/* Steps */}
                <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Step header */}
                            <div className="flex items-center gap-3 px-6 pt-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">
                                    {step.id}
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
                            </div>

                            {/* Image placeholder */}
                            <div className="px-6 pt-4">
                                <div className="w-full bg-gray-100 rounded-md border border-dashed border-gray-300 flex items-center justify-center text-gray-500">
                                    {step.image ? (
                                        <img src={step.image} alt={step.alt} className="w-full h-full object-cover rounded-md" />
                                    ) : (
                                        <div className="text-center px-4">
                                            <p className="font-medium">Step {step.id} image</p>
                                            <p className="text-sm">(will be added here)</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="px-6 py-6">
                                <p className="text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Notes */}
                <div className="mx-auto mt-12">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Important</h3>
                        <ul className="list-disc ms-5 text-gray-700 space-y-1">
                            <li>Deleting your account is permanent and cannot be undone.</li>
                            <li>Some data may be retained as required by law or our privacy policy.</li>
                            <li>
                                If you face any issues, please contact support via the Contact Us section.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
