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
  width: 100%; 
  max-width: 366px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    max-width: 100%; 
  }
`;

const HyperImage = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: cover;
    border-radius: 8px;
  }
`;
