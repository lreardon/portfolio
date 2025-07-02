import React from "react";
import Block from "@components/block/Block";
import BlockImage from '@components/block/BlockImage';
import BlockHeadline from '@components/block/BlockHeadline';


export default function WaterfallsBlock(props) {
    const imageLeft = props.imageLeft
    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor
    const href = "https://waterfalls.landho.me"
    const imgSrc = 'https://storage.googleapis.com/portfolio-photos/portfolio/waterfalls-block-image/640.jpg'
    const imgAlt = "Waterfalls are the best!"

    return (
        <Block
            backgroundColor={backgroundColor}
            imageLeft={imageLeft}
            image={
                <BlockImage
                    src={imgSrc}
                    alt={imgAlt}
                    frameColor={frameColor}
                    href={href}
                />
            }
            headline={
                <BlockHeadline frameColor={frameColor}>
                    I also have a <a className='text-purple-800' href="https://waterfalls.landho.me" target="_blank">maps-based blog</a> documenting my favorite waterfalls!
                </BlockHeadline>
            }
        />
    );
}