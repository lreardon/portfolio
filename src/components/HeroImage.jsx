import React from 'react'
import Image from 'next/image'

export default function HeroImage(props) {
    return (
        <div className="flex w-full relative items-center">
            <img
                src='https://storage.googleapis.com/portfolio-photos/portfolio/me-square.jpg'
                alt="Hi there!"
                className="object-scale-down rounded-full hero-image"
            />
        </div>
    )
}