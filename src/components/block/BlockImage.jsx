import React from 'react';

export default function BlockImage(props) {
    return (
        <div className={`bg-green-100 relative block-image-container`}>
            <img
                src={props.src}
                alt={props.alt}
                className={`object-scale-down ${props.frameColor} ${props.frameColor} p-4`}
                onClick={() => (window.open(props.href, '_blank', 'noreferrer'))}
            />
        </div>
    );
}