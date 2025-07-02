import React from "react";

export default function Block(props) {
    const backgroundColor = props.backgroundColor;
    const imageLeft = props.imageLeft;
    const headline = props.headline;
    const image = props.image;

    const contents = imageLeft ? [image, headline] : [headline, image];
    
    return (
        <div className={`flex ${backgroundColor} block-container items-center p-4 gap-4`}>
            {contents}
        </div>
    );
}