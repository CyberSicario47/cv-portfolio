import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Coffee} from "../Models/Coffee"
import {OrbitControls, Stage} from "@react-three/drei";
import Description from "./Description.jsx";

function ProductDesign(props) {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Coffee/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            <Description description={"hello world"}/>
        </>
    );
}

export default ProductDesign;