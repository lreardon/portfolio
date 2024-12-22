import React from 'react'

export default function HeroImage(props) {
    return (
        <div className="flex w-full relative justify-center items-center">
            <img
                src='https://storage.googleapis.com/portfolio-photos/portfolio/me-square.jpg'
                alt="Hi there!"
                className="object-scale-down rounded-full hero-image"
            />
        </div>
    )
}