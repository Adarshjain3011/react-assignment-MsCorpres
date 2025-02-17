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
  padding-top: ${({ theme }) => theme.spacing.section};
  margin-top: ${({ theme }) => theme.spacing.section};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing.large};
    margin-top: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

const Title = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
  flex-wrap: wrap;

  img {
    width: 107px;
    height: auto;
    object-fit: cover;
    filter: grayscale(50%);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.medium};

    img {
      width: 80px;
    }
  }
`;

