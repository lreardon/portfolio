import React from "react";
import Block from '@/components/block/Block';
import BlockImage from '@components/block/BlockImage'
import BlockHeadline from '@/components/block/BlockHeadline'

export default function PhotosBlock(props) {

    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor
    const href = "https://photos.landho.me"
    const imgSrc = 'https://storage.googleapis.com/portfolio-photos/leopard-far-lighter-2.jpg'
    const imgAlt = 'Lucas the spotted leopard, prowling around Yala National Park'

    return (
        <Block className={`${backgroundColor}`}>
            <BlockImage
                src={imgSrc}
                alt={imgAlt}
                frameColor={frameColor}
                href={href}
            />
            <BlockHeadline frameColor={frameColor} >
                From time to time I take photos, and I post my favorites <a className='text-purple-800' href={"https://photos.landho.me"} target="_blank">here</a>!
            </BlockHeadline>
        </Block>
    );
}