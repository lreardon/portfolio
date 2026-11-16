import React from 'react'

export default function HeroImage(props) {
    return (
        <div className="flex w-full relative justify-center items-center">
            <img
                src='/me-square-640.jpg'
                width={640}
                height={640}
                fetchPriority='high'
                alt="Leland Reardon"
                className="object-scale-down rounded-full hero-image"
            />
        </div>
    )
}