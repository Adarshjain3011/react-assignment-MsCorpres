import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface TestimonialProps {
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
}

const Testimonial = ({ image, name, position, quote }: TestimonialProps) => {
  return (
    <Container>
      <QuoteIcon>
        <FaQuoteLeft size={40} />
      </QuoteIcon>
      <Content>
        <ImageWrapper>
          <Image src={image} alt={name} />
        </ImageWrapper>
        <TextWrapper>
          <Quote>{quote}</Quote>
          <Author>
            <strong>{name}</strong> – {position}
          </Author>
        </TextWrapper>
      </Content>
      <Navigation>
        <ArrowButton>
          <FaArrowLeft />
        </ArrowButton>
        <ArrowButton>
          <FaArrowRight />
        </ArrowButton>
      </Navigation>
    </Container>
  );
};

export default Testimonial;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: auto;
  text-align: left;
  padding: 20px;
  position: relative;
`;

const QuoteIcon = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 5px;
  display: inline-block;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Quote = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Author = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Navigation = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
