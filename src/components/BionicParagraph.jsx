import React from 'react'
import { bionicReading } from 'bionic-reading';

export default function BionicParagraph(props){
    return(
        <p dangerouslySetInnerHTML={{ __html: bionicReading(props.children)}} />
    );
}