import styled from "styled-components";
import Para from "../common/Para";

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
}

const ServiceCard = ({ title, description, path }: ServiceCardProps) => {
  console.log("path is ", path);

  return (
    <Card>
      <HeroImage>
        <img src={path} alt={title} />
      </HeroImage>
      <Heading>{title}</Heading>
      <Para>{description}</Para>
    </Card>
  );
};

export default ServiceCard;

// Styled Components with Theme Integration
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium}; // Uses theme spacing
  padding: ${({ theme }) => theme.spacing.large}; // Adds padding for better spacing
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // Theme border-radius
  box-shadow: ${({ theme }) => theme.shadows.card}; // Adds card shadow for better visibility
  background: ${({ theme }) => theme.colors.cardBg}; // Theme-based card background
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.button}; // Adds slight lift on hover
  }
`;

const HeroImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.small}; // Adds spacing around image
  background: ${({ theme }) => theme.colors.secondary}; // Background from theme
  border-radius: ${({ theme }) => theme.borderRadius.full}; // Makes image container circular
  width: 50px;
  height: 50px;

  img {
    width: 35px;
    height: 35px;
    object-fit: cover;
  }
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large}; // Uses theme font size
  font-weight: 600;
  color: ${({ theme }) => theme.colors.headColor}; // Uses theme heading color
`;
