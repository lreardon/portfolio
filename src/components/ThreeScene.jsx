import React from 'react'
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";
import {Suspense} from "react";
import css from "../styles/Home.module.css";

export default function ThreeScene(props) {
return (
    <div className="flex h-96 bg-orange-400">
        <Canvas
            shadows
            className={'bg-black'}
            camera={{
                position: [10,10,20],
            }}
        >
        <OrbitControls />
        <ambientLight color={"white"} intensity={0.1} />
        <LightBulb position={[0, 10, 0]} />
        {/* <Draggable>
            <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
            </Suspense>
        </Draggable> */}
        <Floor position={[0, -1, 0]} />
        </Canvas>
    </div>);
}
