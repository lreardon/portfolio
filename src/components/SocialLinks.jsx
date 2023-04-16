import React from 'react';

export default function SocialLinks(props) {
    return (
        <div className="flex flex-row gap-5 justify-center">
            <img src='/github-logo.png' className='w-10' onClick={() => (window.open("https://github.com/lreardon", '_blank', 'noreferrer'))}/>
            <img src='/linkedin-logo.png' className='w-10' onClick={() => (window.open("https://linkedin.com/in/landh0", '_blank', 'noreferrer'))}/>
        </div>
    )
}