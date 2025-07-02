import React from "react";

function BlockContainer(props) {
    const children = props.children;

    return (
    <>
        {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { 
                        ...child.props,
                        imageLeft: index % 2 === 0 
                    });
                }
                return child;
            })}
    </>
    );
}

export default BlockContainer;