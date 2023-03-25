import React from 'react';
import {Canvas} from "@react-three/fiber";
import {WebDesignModel} from "../Models/Webdesign.jsx";
import {OrbitControls, Stage} from "@react-three/drei";
import Description from "./Description.jsx";

function WebDesign(props) {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.7}>
                    <WebDesignModel/>
                </Stage>
                <OrbitControls enableZoom={false}/>
            </Canvas>
            <Description description={"hello world"}/>
        </>
    );
}

export default WebDesign;