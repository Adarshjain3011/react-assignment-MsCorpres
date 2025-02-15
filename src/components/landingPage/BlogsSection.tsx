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

// Styled Components with Theme Integration
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: start;
  align-items: start;
  padding-top: ${({ theme }) => theme.spacing.large};
  padding-left: ${({ theme }) => theme.spacing.medium};
  padding-right: ${({ theme }) => theme.spacing.medium};
  margin-bottom: 25rem !important;
  
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxLarge};
  text-align: start;
  color: ${({ theme }) => theme.colors.headColor};
`;

const Blogs = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  width: 100%;
`;

const ButtonSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;


