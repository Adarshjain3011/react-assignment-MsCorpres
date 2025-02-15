import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
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

  padding: 0 ${({ theme }) => theme.spacing.lg}; 
  transform: translate(50px, -5rem);

  padding: 1rem;

  padding-right: 2.5rem;

  gap: 4px; 

  p{

    color: #0F0049;
    opacity: 36%;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.headColor};
  margin-bottom: 2px; 
`;


const ArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: auto; 
  padding: 5px 0; 
  padding-top: 10px;
  svg {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
