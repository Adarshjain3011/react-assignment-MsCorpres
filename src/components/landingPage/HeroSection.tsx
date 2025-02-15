import styled from "styled-components";
import Button from "../common/Button";
import Para from "../common/Para";

import ProjectPart from "./ProjectContent";

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <MinContent>
          <Title>
            Building Brands <br /> in the <span>Digital Age</span>
          </Title>
          <Para>
            Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
          </Para>
        </MinContent>
        <ButtonContainer>
          <Button>Learn More</Button>
        </ButtonContainer>
      </Content>
      <HeroImage>
        <img src="/landing/heroSection.png" alt="Team working" />
        <ProjectCard>

          <ProjectPart></ProjectPart>

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

  margin-top: 8rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large} 0;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const MinContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const Star = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #1d1d1d;
`;


const Title = styled.h1`
  font-size: 4rem;
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
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 120px;
`;

// const ProjectContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;
