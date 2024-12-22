import React, {useState, useEffect, useRef} from 'react'
import HeroImage from '@/components/hero/HeroImage'
import SocialLinks from '@components/hero/SocialLinks'
import ProfessionalSummary from '@/components/hero/ProfessionalSummary'

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


    function ReadMoreButton(props) {
        return(
            <button className='bg-purple-500 ' onClick={toggleProfessionalSummaryVisible}>
                <h1 className='text-3xl'>
                    {`Read ${moreOrLess()}`}
                </h1>
            </button>
        )
    }

    return (
        <div ref={ref} className='flex flex-col'>
            <div className='flex flex-row hero-content'>
                <div className='flex flex-col bg-red-400 hero-image-container justify-evenly gap-4 p-4'>
                    <HeroImage />
                    <SocialLinks />
                </div>
                <div className="flex flex-col bg-blue-400 hero-description-container justify-center p-4">
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                    <p className="text-xl">
                        I am a mathematician-turned-full-stack-developer with a passion for well-structured, well-organized code. I've built and deployed full-stack applications from scratch, initialized techincal development for startups, and modernized legacy applications and built new solutions for established companies.
                    </p>
                    <br/>
                    <p className="text-xl">
                       My hobbies include surfing, seeking out waterfalls, taking photos, climbing trees, reading and coding.
                    </p>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-center'>
                    <ReadMoreButton />
                </div>
                <ProfessionalSummary visible={professionalSummaryVisible}/>
                {professionalSummaryVisible ? 
                    <div className='flex flex-row justify-center'>
                        <ReadMoreButton />
                    </div> : null}
            </div>
        </div>
    )
}