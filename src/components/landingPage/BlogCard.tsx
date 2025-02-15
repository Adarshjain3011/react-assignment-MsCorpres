import styled from "styled-components";
import BlogCardBox from "./BlogCardbox";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard = ({ title, description, image }: BlogCardProps) => {
  return (
    <Container>
      <HyperImage>
        <img src={image} alt="Blog Image" />
      </HyperImage>
      <BlogCardBox title={title} description={description} />
    </Container>
  );
};

export default BlogCard;

const Container = styled.div`
  width: 100%; // Adjust width as per design requirements
  max-width: 366px; // Example max-width for better control
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* padding: ${({theme})=>theme.spacing.sm}; */


`;

const HyperImage = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto; // Maintain aspect ratio
    object-fit: cover;
    border-radius: 8px;
  }
`;
