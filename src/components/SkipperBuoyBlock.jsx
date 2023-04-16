import React from "react";
import Image from 'next/image'
import Block from './Block';

export default function SkipperBuoyBlock(props) {
    
    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor

    return (
        <Block className={`${backgroundColor}`}>
            <div className="flex flex-row w-full">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className="flex flex-row w-3/4">
                    <h1 className={`${frameColor} text-3xl`}>
                        <a className='text-purple-800' href="https://ratemyskipper.uc.r.appspot.com" target="_blank">This site</a> brings some accountability to the high sea's devil dogs!
                    </h1>
                    </div>
                    <div className={`${frameColor} m-4 flex-row w-3/4 text-xs`}>
                        <p>Google App Engine + Tailwind + No $$$ = Extremely long wait on inital site load.</p>
                    </div>
                </div>
                <div className='flex flex-row w-2/3 h-full justify-center relative mx-10'>
                    <img
                        src='https://storage.googleapis.com/portfolio-photos/portfolio/skipperbuoy-block-image.jpg'
                        alt="Shipwrecked!"
                        className={`object-scale-down ${frameColor} p-4`}
                        onClick={() => (window.open("https://ratemyskipper.uc.r.appspot.com", '_blank', 'noreferrer'))}
                    />
                </div>
            </div>
        </Block>
    )
}