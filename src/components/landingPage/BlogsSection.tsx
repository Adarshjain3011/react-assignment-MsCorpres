import styled from "styled-components";
import Button from "../common/Button";
import BlogCard from "./BlogCard";
import { blogsData } from "../../utils/data";

const BlogSection = () => {
  return (
    <Container>
      <Title>Our Blogs</Title>
      <Blogs>
        {blogsData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.path}
          />
        ))}
      </Blogs>
      <ButtonSection>
        <Button>View All Post</Button>
      </ButtonSection>
    </Container>
  );
};

export default BlogSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium};
  margin-bottom: 25rem !important;

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }

  @media screen and (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxLarge};
  text-align: start;
  color: ${({ theme }) => theme.colors.headColor};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const Blogs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media screen and (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }

  @media screen and (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;
