

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

`

const HeroImage = styled.div`

    position: relative;

    img {

        width: 20px;
        height: 20px;

    }

`

const Heading = styled.h1`
    
    font-size: 1.5rem;
    font-weight: bold;
    /* font-family: ${({ theme }) => theme.fonts.heading}; */
    color: ${({ theme }) => theme.colors.headColor};
`

