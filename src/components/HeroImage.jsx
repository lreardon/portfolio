import React from 'react'
import Image from 'next/image'

export default function HeroImage(props) {
    return (
        <div className="w-80 h-80 bg-red-400 relative">
            <Image
                src='/me-square.jpg'
                alt="Picture of the author"
                fill
                className="object-scale-down rounded-full"
            />
        </div>
    )
}