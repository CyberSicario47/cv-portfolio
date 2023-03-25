import React, {useRef, useState} from 'react';
import styled from "styled-components";
import Maps from "./SubComponents/Maps"
import emailjs from "@emailjs/browser"

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
  justify-content: flex-end;
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  gap: 25px;
  flex-direction: column;

`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
`
const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
`
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
`
const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`
const FinalContainer = styled.div`
  position: relative;
  z-index: 2;
  top: 13%;
`

function Contact(props) {

    const serviceId = "service_iupkzx8";
    const templateId = "template_gslet1d";
    const publicKey = "89tXE2lY0TB00BO6f";
    const form = useRef();
    const [success, setSuccess] = useState(null)

    console.log(serviceId,templateId,publicKey)
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });
    }


    return (
        <Section>
                <LayoutContainer>
                    <OverlayContainer>
                        <Maps/>
                    </OverlayContainer>
                    <FinalContainer>
                        <Container>
                        <Left>
                            <Form ref={form} onSubmit={handleSubmit}>
                                <Title>Contact Us</Title>
                                <Input placeholder="Name" name="name"/>
                                <Input placeholder="Email" name="email" type="email"/>
                                <TextArea placeholder="Write Your Message" name="message"rows={10}/>
                                <Button>Send</Button>
                                {success && "Your message has been sent. We'll get back to you soon :) "}
                            </Form>
                        </Left>
                        <Right>
                        </Right>
            </Container>
                    </FinalContainer>
                </LayoutContainer>
        </Section>
    );
}

export default Contact;