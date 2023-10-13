import React from "react";
import Block from "./Block";
import BlockImage from './BlockImage';
import BlockHeadline from './BlockHeadline';


export default function WaterfallsBlock(props) {

    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor
    const href = "https://waterfalls.landho.me"
    const imgSrc = 'https://storage.googleapis.com/portfolio-photos/portfolio/waterfalls-block-image.jpeg'
    const imgAlt = "Waterfalls are the best!"

    return (
        <Block className={`${backgroundColor} flex-row-reverse`}>
            <BlockImage
                src={imgSrc}
                alt={imgAlt}
                frameColor={frameColor}
                href={href}
            />
            <BlockHeadline frameColor={frameColor}>
                I also have a <a className='text-purple-800' href="https://waterfalls.landho.me" target="_blank">maps-based blog</a> documenting my favorite waterfalls!
            </BlockHeadline>
        </Block>
    );
}