import React from 'react';
import styled from "styled-components";

const Section = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      `
const Container = styled.div`
  justify-content: space-between;
      width: 100%;
      height: 100%;
  display: flex;
  gap: 50px;
      `
const Left = styled.div`
      flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
      `
const Title = styled.h1`
      font-weight: 200;
      `
const Form = styled.form`
      width: 500px;
  gap: 25px;
  display: flex;
  
      `
const TextArea = styled.textarea`
      height: 100vh;
      scroll-snap-align: center;
      `
const Input = styled.input`
      height: 100vh;
      scroll-snap-align: center;
      `
const Button = styled.button`
      height: 100vh;
      scroll-snap-align: center;
      `
const Right = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      `

function Contact(props) {
    return (
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>Contact Us</Title>
                        <Input placeholder="Name"/>
                        <Input placeholder="Email"/>
                        <TextArea placeholder="Write Your Message"/>
                        <Button>hola</Button>
                    </Form>
                </Left>
                <Right>

                </Right>
            </Container>
        </Section>
    );
}

export default Contact;