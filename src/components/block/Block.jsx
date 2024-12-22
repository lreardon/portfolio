import React from "react";

export default function Block(props) {
    return (
        <div className={`flex ${props.className} block-container items-center p-4 gap-4`}>
            {props.children}
        </div>
    );
}