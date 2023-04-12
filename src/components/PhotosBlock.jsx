import React from "react";
import Image from 'next/image'
import Block from './Block';

export default function PhotosBlock(props) {

    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor

    return (
        <Block className={`${backgroundColor}`}>
            <div className="flex flex-row w-full">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className="flex flex-row w-3/4">
                    <h1 className={`${frameColor} text-3xl`}>
                        From time to time I take photos, and I post my favorites <a className='text-purple-800' href="https://photos.landho.me" target="_blank">here</a>!
                    </h1>
                    </div>
                </div>
                <div className="flex flex-row w-2/3 justify-center relative mx-10">
                    <img
                        src='https://storage.googleapis.com/portfolio-photos/portfolio/photos-block-image.jpg'
                        alt="Lucas the spotted leopard, prowling around Yala National Park"
                        className={`object-scale-down ${frameColor} p-4`}
                        onClick={() => (window.open("https://photos.landho.me", '_blank', 'noreferrer'))}
                    />
                </div>
            </div>
        </Block>
    );
}