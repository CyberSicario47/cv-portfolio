import React from 'react';
import {Canvas} from "@react-three/fiber";
import {LilRobort} from "../Models/Lil_robort"
import {OrbitControls, Stage} from "@react-three/drei";
import Description from "./Description.jsx";

function Illustration(props) {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <LilRobort/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            <Description description={"hello world"}/>
        </>
    );
}

export default Illustration;