import React, { useState, useRef } from 'react'
import HeroImage from '@/components/hero/HeroImage'
import SocialLinks from '@components/hero/SocialLinks'
import ProfessionalSummary from '@/components/hero/ProfessionalSummary'

export default function Hero() {
    const [summaryVisible, setSummaryVisible] = useState(false);
    const ref = useRef(null)

    function toggleSummary() {
        if (summaryVisible) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        setSummaryVisible(!summaryVisible)
    }

    const button = (
        <div className='flex flex-row justify-center'>
            <button className='bg-purple-500 text-3xl px-4' onClick={toggleSummary}>
                {summaryVisible ? 'Read Less' : 'Read More'}
            </button>
        </div>
    )

    return (
        <div ref={ref} className='flex flex-col'>
            <div className='flex flex-row hero-content'>
                <div className='flex flex-col bg-red-400 hero-image-container justify-evenly gap-4 p-4'>
                    <HeroImage />
                    <SocialLinks />
                </div>
                <div className="flex flex-col bg-blue-400 hero-description-container justify-center gap-4 p-4">
                    <h1 className="text-3xl font-bold">Leland Reardon</h1>
                    <p className="text-xl">
                        I'm a mathematician turned full-stack software engineer. I've built and deployed full-stack applications from scratch, led initial technical development for startups, and modernized legacy systems and built new products for established companies.
                    </p>
                    <p className="text-xl">
                        My hobbies include surfing, seeking out waterfalls, taking photos, climbing trees, reading, and coding.
                    </p>
                </div>
            </div>
            <div className='flex flex-col'>
                {button}
                {summaryVisible && <ProfessionalSummary />}
                {summaryVisible && button}
            </div>
        </div>
    )
}
