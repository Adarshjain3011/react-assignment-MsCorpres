import styled from "styled-components";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/landingPage/HeroSection";
import { Service } from "../components/landingPage/ServiceSection";
import Testimonial from "../components/landingPage/Testimonial";
import BlogSection from "../components/landingPage/BlogsSection";
import FooterSection from "../components/layouts/Footer";
import CompanySection from "../components/landingPage/CompanySection";

const LandingPage: React.FC = () => {
    return (
        <Main data-testid="landing-page">
            <Container>
                <Navbar data-testid="navbar" />
                <Hero data-testid="hero-section" />
                <CompanySection data-testid="company-section" />
                <Service data-testid="service-section" />
                <Testimonial data-testid="testimonial-section" />
                <BlogSection data-testid="blog-section" />
            </Container>

            {/* Footer outside of Container to be full width */}
            <FooterWrapper>
                <FooterSection data-testid="footer-section" />
            </FooterWrapper>
        </Main>
    );
};

export default LandingPage;

// Styled Components
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
