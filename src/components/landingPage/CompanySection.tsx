import { ImageSectionData } from "../../utils/data";
import styled from "styled-components";

const CompanySection = () => {
  return (
    <Container>
      <Title>Powering next-gen companies</Title>
      <ImageContent>
        {ImageSectionData.map((item: any, index: any) => (
          <img key={index} src={item} alt={item.alt} />
        ))}
      </ImageContent>
    </Container>
  );
};

export default CompanySection;

// Styled Components with Theme Integration
const Container = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.section}; // Uses theme spacing
  margin-top: ${({ theme }) => theme.spacing.section};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large}; // Theme spacing
  margin-bottom: ${({ theme }) => theme.spacing.section}; // Theme spacing
  background: ${({ theme }) => theme.colors.background}; // Background from theme
`;

const Title = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary}; // Primary text color from theme
  font-size: ${({ theme }) => theme.fontSizes.large}; // Theme font size
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading}; // Theme font
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl}; // Theme spacing

  img {
    width: 107px;
    height: auto;
    object-fit: cover;
    filter: grayscale(50%); // Adds a professional muted effect
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%); // Removes grayscale on hover for effect
    }
  }
`;
