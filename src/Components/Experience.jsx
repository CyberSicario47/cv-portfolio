import React, {useState} from 'react';
import styled from "styled-components";
import WebDesign from "./SubComponents/WebDesign.jsx";
import Development from "./SubComponents/Development.jsx";
import Illustration from "./SubComponents/Illustration.jsx";
import SocialMedia from "./SubComponents/SocialMedia.jsx";
import ProductDesign from "./SubComponents/ProductDesign.jsx";

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
  position: relative;
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

    const [component, setComponent] = useState(<WebDesign/>)

    const handleClick = (e) =>{
        console.log(e.target.textContent)
        switch (e.target.textContent) {
            case "Web Design":
                setComponent(<WebDesign/>)
                break;
            case "Development":
                setComponent(<Development/>)
                break;
            case "Illustration":
                setComponent(<Illustration/>)
                break;
            case "Product Design":
                setComponent(<ProductDesign/>)
                break;
            case "Social Media":
                setComponent(<SocialMedia/>)
                break;
            default:
                setComponent(<WebDesign/>)
        }
    }
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item, index) => (
                            <ListItem key={index} text={item} onClick={handleClick}>{item}</ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {component}
                </Right>
            </Container>
        </Section>
    );
}

export default Experience;