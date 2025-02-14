import styled from "styled-components";
import Navbar from "../components/layouts/Navbar";

import Hero from "../components/landingPage/HeroSection";

import { Service } from "../components/landingPage/ServiceSection";

const LandingPage = () => {
    return (
        <Container>

            <Navbar />

            {/* <HeroSection></HeroSection> */}

            <Hero></Hero>

            <Service></Service>

        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  max-width: 1200px;

  margin: 0 auto;

`;


export default LandingPage;
