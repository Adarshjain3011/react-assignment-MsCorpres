import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import Para from "../common/Para";

interface BlogCardBoxProps {
  title: string;
  description: string;
}

const BlogCardBox = ({ title, description }: BlogCardBoxProps) => {
  return (
    <Container>
      <Card>
        <Title>{title}</Title>
        <Para>{description}</Para>
        <ArrowWrapper>
          <FaArrowRight />
        </ArrowWrapper>
      </Card>
    </Container>
  );
};

export default BlogCardBox;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: white;

  padding: 0 ${({ theme }) => theme.spacing.lg}; // Only horizontal padding (left & right)
  transform: translate(50px, -5rem);

  // Minimizing the spacing
  gap: 4px; // Reducing gap between title & description
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.headColor};
  margin-bottom: 2px; // Slightly reduce bottom margin
`;

// Arrow stays at bottom with minimal spacing
const ArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: auto; // Pushes it to bottom with minimal spacing
  padding: 5px 0; // Reduce padding

  svg {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
