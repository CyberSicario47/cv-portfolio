import React from 'react';
import styled from "styled-components";

const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
]
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(prop) => prop.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

function Experience(props) {
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item, index) => (
                            <ListItem key={index} text={item}>{item}</ListItem>
                        ))}
                    </List>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    );
}

export default Experience;