import React from "react";
import Planet from "/Planet";

function Earth(props) {
  return (
    <Planet surface={props.surface} atmosphere={props.atmosphere}/>
  );
}


export default Earth;