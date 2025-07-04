import React from 'react';

export default function BlockHeadline(props) {
    const frameColor = props.frameColor;
    
    return (
        <div className={`flex flex-row ${frameColor} p-2 justify-center items-center`}>
            <h1 className='text-xl sm:text-3xl block-headline-text'>
                {props.children}
            </h1>
        </div>
    );
}
