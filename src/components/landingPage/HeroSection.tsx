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
          <ProjectPart />
        </ProjectCard>
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

const Content = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const MinContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.headColor};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxLarge};
  }
`;

const HeroImage = styled.div`
  position: relative;
  max-width: 50%;

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const ProjectCard = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  min-width: 120px;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    padding: ${({ theme }) => theme.spacing.xs};
  }
`;