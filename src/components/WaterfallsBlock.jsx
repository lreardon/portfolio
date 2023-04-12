import React from "react";
import Image from 'next/image'
import Block from "./Block";

export default function WaterfallsBlock(props) {
    return (
        <Block className='bg-pink-400'>
            <div className="flex flex-row w-full justify-start">
                <div className="flex flex-row w-1/2 relative m-10">
                    <Image
                        src='/waterfalls-block-image.jpeg'
                        alt="Waterfalls are the best!"
                        fill
                        className="object-scale-down bg-blue-300 p-4"
                        onClick={() => (window.open("https://waterfalls.landho.me", '_blank', 'noreferrer'))}
                    />
                </div>
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className="flex flex-row w-3/4">
                    <h1 className="bg-blue-300 text-3xl">
                        I also have a <a className='text-purple-800' href="https://waterfalls.landho.me" target="_blank">blog</a> documenting my favorite waterfalls!
                    </h1>
                    </div>
                </div>
            </div>
        </Block>
    );
}