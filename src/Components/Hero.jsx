import React from 'react';
import styled from "styled-components";
import Navbar from "./SubComponents/Navbar.jsx";

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
                    <Img src="/img/moon.png"/>
                </Right>
            </Container>
        </Section>
    );
}

export default Hero;