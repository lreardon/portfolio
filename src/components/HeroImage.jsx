import React from 'react'
import Image from 'next/image'

export default function HeroImage(props) {
    return (
        <div className="w-80 h-80 bg-red-400 relative">
            <img
                src='https://storage.googleapis.com/portfolio-photos/portfolio/me-square.jpg'
                alt="Hi there!"
                className="object-scale-down rounded-full"
            />
        </div>
    )
}