import React, {useState, useEffect, useRef} from 'react'
import HeroImage from './HeroImage'
import ProfessionalSummary from './ProfessionalSummary'
import styled, { keyframes } from 'styled-components'

export default function Hero(props) {
    const [professionalSummaryVisible, setProfessionalSummaryVisible] = useState(false);
    const [professionalSummaryWasJustVisible, setProfessionalSummaryWasJustVisible] = useState(false);

    const ref = useRef(null)

    useEffect(() => {
        if (professionalSummaryWasJustVisible & !professionalSummaryVisible) {
            scrollToTop()
        }
    }, [professionalSummaryVisible])

    function toggleProfessionalSummaryVisible() {
        //TODO: Investigate potential race condition
        setProfessionalSummaryWasJustVisible(professionalSummaryVisible) 
        setProfessionalSummaryVisible(!professionalSummaryVisible)
    }

    function moreOrLess() {
        if (professionalSummaryVisible) {
            return 'Less';
        }
        return 'More'
    }

    function scrollToTop() {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }


    function ToggleSummaryButton(props) {
        return(
            <div className='bg-purple-500' onClick={toggleProfessionalSummaryVisible}>
                <h1 className='text-3xl'>
                    {`Read ${moreOrLess()}`}
                </h1>
            </div>
        )
    }

    return (
        <div ref={ref} className='flex flex-col min-h-96'>
            <div className='flex h-full min-h-96 flex-row'>
                <div className="flex flex-col">
                    <HeroImage />
                </div>
                <div className="bg-blue-400">
                    <div className="flex flex-row gap-5">
                        <img src='/github-logo.png' width='60' onClick={() => (window.open("https://github.com/lreardon", '_blank', 'noreferrer'))}/>
                        <img src='/linkedin-logo.png' width='60' onClick={() => (window.open("https://linkedin.com/in/landh0", '_blank', 'noreferrer'))}/>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className="text-3xl font-bold underline">
                            Hello world!
                        </h1>
                        <p className="text-xl">
                            I am a mathematician-turned-full-stack-developer with a passion for well-structured, well-organized code. I've built and deployed three full-stack applicaitons from scratch, and initialized techincal development for a thriving startup. My hobbies include surfing, seeking out waterfalls, taking photos, reading and coding.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-center'>
                    <ToggleSummaryButton />
                </div>
                <ProfessionalSummary visible={professionalSummaryVisible}/>
                {professionalSummaryVisible ? 
                    <div className='flex flex-row justify-center'>
                        <ToggleSummaryButton />
                    </div> : null}
            </div>
        </div>
    )
}