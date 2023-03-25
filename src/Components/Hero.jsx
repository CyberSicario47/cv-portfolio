import React from 'react';
import styled from "styled-components";
import Navbar from "./SubComponents/Navbar.jsx";
import {Canvas} from "@react-three/fiber"
import {OrbitControls, Sphere, MeshDistortMaterial} from "@react-three/drei"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Right = styled.div`
  flex: 3;
  position: relative;
`
const Title = styled.div`
  font-size: 74px
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
    height: 5px;
`
const Desc = styled.div`
  color: lightgray;
  font-size: 24px;
`

const Subtitle = styled.div`
  color: #da4ea2
`
const Button = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

@keyframes animate {
  to {
    transform: translateY(20px);
  }
}
`
const cameraAdj = { fov: 25, position: [5, 5, 5] }

function Hero(props) {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>
                        Think. Make. Solve.
                    </Title>
                    <WhatWeDo>
                        <Line src="/img/line.png"/>
                        <Subtitle>What We Do</Subtitle>
                    </WhatWeDo>
                    <Desc>We Enjoy Creating delightful, human-centered digital experiences</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas >
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere args={[1,100,200]} scale={2.2}>
                        <MeshDistortMaterial
                        color="#550b8e" attach="material" distort={0.5} speed={2}
                        />
                        </Sphere>
                    </Canvas>
                    <Img src="/img/moon.png"/>
                </Right>
            </Container>
        </Section>
    );
}

export default Hero;