import React from 'react';
import styled from "styled-components";
import Cube from "./SubComponents/Cube.jsx";
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  position: relative;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
  width: 120px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const cameraAdj = { fov: 25, position: [5, 5, 5] }
function Myself(props) {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={cameraAdj}>
                        <OrbitControls enableZoom={false} autoRotate={true}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Cube/>
                    </Canvas>
                </Left>
                <Right>
                    <Title>
                        Think Outside the square space
                    </Title>
                    <WhatWeDo>
                        <Line src="/img/line.png"/>
                        <Subtitle>What we Are</Subtitle>
                    </WhatWeDo>
                    <Desc>a creative group of designers and developers with a passion for the arts</Desc>
                    <Button>See out works</Button>
                </Right>
            </Container>
        </Section>
    );
}

export default Myself;