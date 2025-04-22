import React from 'react'
import Hero from './Hero'
import OurFeatures from './OurFeatures'
import Stats from './Stats'
import FeedbacksSlider from './FeedbacksSlider'
import AppLinks from './AppLinks'
import Footer from './Footer'
import ContactUs from './ContactUs'
import CategoriesSlider from './CategoriesSlider'

export default function Home() {
    return <>
        <div className="overflow-hidden">
            <Hero />
            <OurFeatures />
            <CategoriesSlider />
            <Stats />
            <FeedbacksSlider />
            <ContactUs />
            <AppLinks />
            <Footer />
        </div>
    </>
}
