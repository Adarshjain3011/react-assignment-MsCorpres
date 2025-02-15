import styled from "styled-components";
import Button from "../common/Button";

import BlogCard from "./BlogCard";

import { blogsData } from "../../utils/data";

const BlogSection = () => {
    return (
        <Container>

            <h1>Our Blogs</h1>
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

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  /* padding: 2rem; */

  align-items: start;
  padding-top: 2rem;
  padding-left:${({ theme }) => theme.spacing.medium};
  padding-right:${({ theme }) => theme.spacing.medium};

  margin-bottom: 20rem !important;

  h1{

    font-size: 2.5rem;
    text-align: start;
    color: #0F0049;
}

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

    margin-bottom: 5rem;

`

