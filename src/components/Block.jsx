import React from "react";

export default function Block(props) {
    return (
        <div className={`flex h-96 ${props.className}`}>
            {props.children}
        </div>
    );
}