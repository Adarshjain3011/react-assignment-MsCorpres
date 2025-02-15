import { ImageSectionData } from "../../utils/data";


import styled from "styled-components";

const CompanySection = ()=>{

    return(

        <Container>

            <p>Powering next-gen companies</p>

            <ImageContent>

                {

                    ImageSectionData.map((item:any, index:any)=>(

                        <img src={item} alt={item.alt} />
                    ))
                }

            </ImageContent>

        </Container>

    )
}


export default CompanySection;


const Container = styled.div`

    position: relative;
    padding-top: 10%;

    p{

        text-align: center;
        color: black;
    }

`;

const ImageContent = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    margin-bottom: 8rem;

    img{

        width: 107px;

        height: 25px;
        object-fit: cover;
        height: auto;

    }

`



