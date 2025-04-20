import React from 'react'
import Hero from './Hero'
import OurFeatures from './OurFeatures'
import Stats from './Stats'
import FeedbacksSlider from './FeedbacksSlider'

export default function Home() {
    return <>
        <div className="overflow-hidden">
            <Hero />
            <OurFeatures />
            <Stats />
            <FeedbacksSlider />
        </div>
    </>
}
