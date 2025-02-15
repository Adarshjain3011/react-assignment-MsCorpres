import styled from "styled-components";
const ProjectPart = () => {

    return (

        <ProjectContent>
            <Star>
                <span>⭐</span>
                <p>Projects</p>
            </Star>
            <ProjectNumber>
                <h3>600+</h3>
                <p>Done</p>
            </ProjectNumber>
        </ProjectContent>
    )
}

export default ProjectPart;


const ProjectContent = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  position: absolute;
    gap: 5px;
  padding: 5px;

  margin-top: 1rem;

  padding-left: 30px;
  padding-right: 30px;

  padding-top: 15px;
  padding-bottom: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  right: -50%;
  
`;

const ProjectNumber = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 3px;

  h3 {
    color: #1d1d1d;
    font-weight: bold;
    font-size: 1.5rem;
  }

p {
    font-size: 1.3rem;
  }
`;



const Star = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;

  p{

    color: #1D1D1D;
  }
  
`;