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
        <p>{description}</p>
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
  width: 90%;
  background-color: white;

  padding: 0 ${({ theme }) => theme.spacing.lg}; // Only horizontal padding (left & right)
  transform: translate(50px, -5rem);

  padding: 1rem;

  padding-right: 2.5rem;
  // Minimizing the spacing
  gap: 4px; // Reducing gap between title & description

  p{

    color: #0F0049;
    opacity: 36%;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
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
  padding-top: 10px;
  svg {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
