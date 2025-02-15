import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

import BlogCard from "./BlogCard";

import { blogsData } from "../../utils/data";

const BlogSection = () => {
    return (
        <Container>

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
        </Container>
    );
};

export default BlogSection;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* padding: 2rem; */

  padding-top: 2rem;
  padding-left:${({theme})=>theme.spacing.medium};
  padding-right:${({theme})=>theme.spacing.medium};

  margin-bottom:20rem;


`;


const Blogs = styled.div`

    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    width: 100%;
`

