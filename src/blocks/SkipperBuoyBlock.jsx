import React from "react";
import Block from '@components/block/Block';
import BlockImage from '@components/block/BlockImage'
import BlockHeadline from '@components/block/BlockHeadline'

export default function SkipperBuoyBlock(props) {
    
    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor
    const href = "https://skipperbuoy.com"
    const imgSrc = 'https://storage.googleapis.com/portfolio-photos/portfolio/skipperbuoy-block-image.jpg'
    const imgAlt = "Shipwrecked!"

    return (
        <Block className={`${backgroundColor} flex-row-reverse`}>
            <BlockImage
                src={imgSrc}
                alt={imgAlt}
                frameColor={frameColor}
                href={href}
            />
            <BlockHeadline frameColor={frameColor}>
                <a className='text-purple-800' href={href} target="_blank">This site</a> brings some accountability to the high seas' devil dogs!
            </BlockHeadline>
        </Block>
    )
}