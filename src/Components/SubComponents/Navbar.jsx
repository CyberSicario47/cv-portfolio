import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const Logo = styled.img`
  height: 50px;
`
const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`
const ListItems = styled.li`
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  list-style: none;
  gap: 20px;
`
const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 10px;
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

function Navbar(props) {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png"/>
                    <List>
                        <ListItems>Home</ListItems>
                        <ListItems>Studio</ListItems>
                        <ListItems>Experience</ListItems>
                        <ListItems>Contact</ListItems>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"/>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
}

export default Navbar;