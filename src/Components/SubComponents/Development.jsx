import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Atom} from "../Models/Atom"
import {OrbitControls, Stage} from "@react-three/drei";
import Description from "./Description.jsx";

function Development(props) {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Atom/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            <Description description={"hello world"}/>
        </>
    );
}

export default Development;