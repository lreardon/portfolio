import React from "react";

export default function Block(props) {
    return (
        <div className={`flex ${props.className} block-container items-center`}>
            {props.children}
        </div>
    );
}