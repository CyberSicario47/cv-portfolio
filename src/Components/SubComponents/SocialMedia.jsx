import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Magazine} from "../Models/Magazine"
import {OrbitControls, Stage} from "@react-three/drei";
import Description from "./Description.jsx";

function SocialMedia(props) {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Magazine/>
                </Stage>
                <OrbitControls enableZoom={false}/>
            </Canvas>
            <Description description={"hello world"}/>
        </>
    );
}

export default SocialMedia;