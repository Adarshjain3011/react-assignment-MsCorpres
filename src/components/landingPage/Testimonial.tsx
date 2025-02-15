import { useState } from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface TestimonialData {
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
}

const testimonials: TestimonialData[] = [
  {
    image: "/landing/userImage.png",
    name: "David Calathan",
    position: "Director of Design Operations, New York",
    company: "Power Digital",
    quote:
      `"The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be."`,
  },
  {
    image: "/landing/userImage.png",
    name: "Emily Parker",
    position: "Head of Marketing, Los Angeles",
    company: "GrowthHub",
    quote:
      `"Working with Power Digital has been an amazing experience. Their insights and strategies have helped us scale our business effectively."`,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, name, position, quote } = testimonials[currentIndex];

  return (
    <Container>
      <Main>
        <Content>
          <ImageWrapper>
            <QuoteIcon>
              <FaQuoteLeft size={30} />
            </QuoteIcon>
            <Image src={image} alt={name} />
          </ImageWrapper>
          <TextWrapper>
            <Quote>{quote}</Quote>
            <Author>
              <strong>{name}</strong> – {position}
            </Author>
          </TextWrapper>
        </Content>
        <Arrows>
          <ArrowButton onClick={handlePrev}>
            <FaArrowLeft />
          </ArrowButton>
          <ArrowButton onClick={handleNext}>
            <FaArrowRight />
          </ArrowButton>
        </Arrows>
      </Main>
    </Container>
  );
};

export default Testimonial;

// Styled Components with Theme Integration
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  margin: auto;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.section};
  margin-top: ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.background};
`;

const Main = styled.div`
  display: flex;
  position: relative;
  max-width: 1200px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: baseline;
  align-items: start;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -30px;
  left: -60px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Image = styled.img`
  width: 304px;
  height: 450px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: 768px) {
    width: 250px;
    height: 350px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.medium};
`;

const Quote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Author = styled.p`
  font-weight: 200;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding-top: ${({ theme }) => theme.spacing.medium};

  strong {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.headColor};
  }
`;

const Arrows = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  position: absolute;
  bottom: 0;
  right: 0;
`;

