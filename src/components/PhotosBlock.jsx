import React from "react";
import Image from 'next/image'
import Block from './Block';

export default function PhotosBlock(props) {
    return (
        <Block className='bg-orange-400'>
            <div className="flex flex-row w-full">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className="flex flex-row w-3/4">
                    <h1 className="bg-gray-400 text-3xl">
                        From time to time I take photos, and I post my favorites <a className='text-purple-800' href="https://photos.landho.me" target="_blank">here</a>!
                    </h1>
                    </div>
                </div>
                <div className="flex flex-row w-full relative bg-orange-400 m-10">
                    <Image
                        src='/photos-block-image.jpg'
                        alt="A spotted leopard, in Yala National Park"
                        fill
                        className="object-scale-down bg-gray-400 p-4"
                        onClick={() => (window.open("https://photos.landho.me", '_blank', 'noreferrer'))}
                    />
                </div>
            </div>
        </Block>
    );
}