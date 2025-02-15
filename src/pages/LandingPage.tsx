import styled from "styled-components";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/landingPage/HeroSection";
import { Service } from "../components/landingPage/ServiceSection";
import Testimonial from "../components/landingPage/Testimonial";
import BlogSection from "../components/landingPage/BlogsSection";
import FooterSection from "../components/layouts/Footer";

import CompanySection from "../components/landingPage/ImageSection";

const LandingPage = () => {
    return (
        <Main>
            <Container>
                <Navbar />
                <Hero />
                <CompanySection />
                <Service />
                <Testimonial />
                <BlogSection />
            </Container>
            
            {/* Footer outside of Container to be full width */}
            <FooterWrapper>
                <FooterSection />
            </FooterWrapper>
        </Main>
    );
};

export default LandingPage;

const Main = styled.div`
    width: 100%;
    overflow-x: hidden; /* Prevents unwanted horizontal scrolling */
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterWrapper = styled.div`
    width: 100%;
    position: relative;
`;
