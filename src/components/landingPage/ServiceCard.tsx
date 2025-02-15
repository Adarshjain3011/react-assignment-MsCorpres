

import styled from 'styled-components';
import Para from '../common/Para';


interface ServiceCardProps{

    title: string;
    description: string;
    path: string;
}

const ServiceCard = ({title,description,path}:ServiceCardProps) => {

    console.log("path is ",path);

    return (

        <Card>

            <HeroImage>
                <img src={path} alt="Team working" />
            </HeroImage>

            <Heading>{title}</Heading>
            <Para>{description}</Para>

        </Card>
    )
}

export default ServiceCard


const Card = styled.div`

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};

    margin-bottom: 2rem;

`

const HeroImage = styled.div`

    position: relative;

    img {

        width: 35px;
        height: 35px;

        font-weight: bold;


    }

`

const Heading = styled.h1`
    
    font-size: 1.5rem;
    font-weight: bold;
    /* font-family: ${({ theme }) => theme.fonts.heading}; */
    color: ${({ theme }) => theme.colors.headColor};
`

