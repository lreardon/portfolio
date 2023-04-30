import React from "react";
import Block from './Block';
import BlockImage from './BlockImage'
import BlockHeadline from './BlockHeadline'

export default function PhotosBlock(props) {

    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor
    const href = "https://photos.landho.me"
    const imgSrc = 'https://storage.googleapis.com/portfolio-photos/leopard-far-lighter-2.jpg'
    const imgAlt = 'Lucas the spotted leopard, prowling around Yala National Park'

    return (
        <Block className={`${backgroundColor}`}>
            <BlockHeadline frameColor={frameColor} >
                From time to time I take photos, and I post my favorites <a className='text-purple-800' href={"https://photos.landho.me"} target="_blank">here</a>!
            </BlockHeadline>
            <BlockImage
                src={imgSrc}
                alt={imgAlt}
                frameColor={frameColor}
                href={href}
            />
        </Block>
    );
}