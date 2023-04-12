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
                <div className="flex flex-row w-full relative m-10">
                    <Image
                        src='https://storage.googleapis.com/portfolio-photos/portfolio/photos-block-image.jpg'
                        alt="A spotted leopard, in Yala National Park"
                        fill
                        className={`object-scale-down ${frameColor} p-4`}
                        onClick={() => (window.open("https://photos.landho.me", '_blank', 'noreferrer'))}
                    />
                </div>
            </div>
        </Block>
    );
}