import styled from "styled-components";

import Button from "../common/Button";


import Para from "../common/Para";

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>
          Building Brands <br /> in the <span>Digital Age</span>
        </Title>
        <Para>
          Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
        </Para>
        <Button>Learn More</Button>
        
      </Content>
      <HeroImage>
        <img src="/landing/heroSection.png" alt="Team working" />
        <ProjectCard>
          ⭐ <strong>600+</strong> Done
        </ProjectCard>
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large} 0;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 34%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;



const HeroImage = styled.div`
  position: relative;
  max-width: 50%;

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const ProjectCard = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #fff;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;
