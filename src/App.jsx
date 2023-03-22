import styled from "styled-components"
import Hero from "./Components/Hero.jsx";
import Myself from "./Components/Myself.jsx";
import Experience from "./Components/Experience.jsx";
import Contact from "./Components/Contact.jsx";

// styles
const Container = styled.div`
      height: 100vh;
      overflow-y: auto;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      scrollbar-width: none;
      &::-webkit-scrollbar{
        display: none;
      }
      color: white;
      background-image: url("./img/bg.jpeg");
  `
function App() {
    return (
        <Container>
            <Hero/>
            <Myself/>
            <Experience/>
            <Contact/>
        </Container>
    )
}

export default App
