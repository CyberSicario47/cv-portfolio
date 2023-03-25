import React from 'react';
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`
const Para = styled.p`
color:black;
font-size:14px;
  font-weight: 300;
`

function Description(props) {
    return (
        <Desc>
            <Para>{props.description}</Para>
        </Desc>
    );
}

export default Description;