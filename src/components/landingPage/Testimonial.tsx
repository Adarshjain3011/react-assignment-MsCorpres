import { useState } from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface TestimonialData {
    image: string;
    name: string;
    position: string;
    company: string;
    quote: string;
}

const testimonials: TestimonialData[] = [
    {
        image: "/landing/userImage.png", // Replace with actual image
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

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  width: 100%;
  padding: 1rem;
  margin: auto;
  position: relative;

  margin-bottom: 8rem;

  margin-top: 9rem;
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
  gap: 3rem;

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
  color: #000;
`;

const Image = styled.img`
  width: 304px;
  height: 450px;
  object-fit: cover;
  border-radius: 5px;
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 20px;
`;

const Quote = styled.p`
  font-size: 1.8rem;
  color: #47536B;
  
`;

const Author = styled.p`
  font-weight: 200;
  color: #47536B;
  font-size: 1.5rem;
  margin-top: 1rem;

  padding-top: 1rem;

    strong {
      font-weight: 700;
      font-size: 1.6rem;
    }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #666;
  &:hover {
    color: #000;
  }
`;

const Arrows = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
