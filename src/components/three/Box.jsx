import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
    const texture = useLoader(TextureLoader, "me.jpg");
  return (
    <mesh {...props} receiveShadow={true} castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
}
export default Box;