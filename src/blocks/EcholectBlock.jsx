import React from "react";
import Block from "@components/block/Block";
import BlockImage from '@components/block/BlockImage';
import BlockHeadline from '@components/block/BlockHeadline';


export default function EcholectBlock(props) {
    const imageLeft = props.imageLeft
    const backgroundColor = props.twcssBackgroundColor
    const frameColor = props.twcssFrameColor
    const href = "https://echolect.co"
    const imgSrc = 'https://storage.googleapis.com/portfolio-photos/portfolio/echolect-logo/640.png'
    const imgAlt = "Echolect logo"

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
                <BlockHeadline
                    frameColor={frameColor}
                >
                    <a className='text-purple-800' href={href} target="_blank">Echolect</a> leverages one-way messaging and state-of-the-art transcription models to create powerful lecture transcripts.
                </BlockHeadline>
            }
        />
    );
}