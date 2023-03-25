import React,{useRef } from 'react';
import {RenderTexture,PerspectiveCamera, Text} from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
function Cube(props) {
    const textRef = useRef()
    useFrame((state)=>
         textRef.current.position.x = Math.sin(state.clock.elapsedTime * 1.5)
    )
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera
                        makeDefault
                        position={[0,0,2]}
                    />
                    <color attach="background" args={["#dc9dcd"]}/>
                    <Text ref={textRef} fontSize={1} color="#555">
                        Hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>.
        </mesh>
    );
}

export default Cube;