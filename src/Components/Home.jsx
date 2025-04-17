import React from 'react'
import Hero from './Hero'
import OurFeatures from './OurFeatures'
import Stats from './Stats'

export default function Home() {
    return <>
        <div className="overflow-hidden">
            <Hero />
            <OurFeatures />
            <Stats />
        </div>
    </>
}
