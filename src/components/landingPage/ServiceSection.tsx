
import styled from 'styled-components'
import Para from '../common/Para'

import { serviceData } from '../../utils/data';

import ServiceCard from './ServiceCard';
import Button from '../common/Button';

export const Service = () => {
    return (

        <ServiceSection>

            <FirstPhase>

                <h1>Explore Our Services</h1>
                <Para>We are self-service data analytics software that lets you create visually.</Para>

            </FirstPhase>

            <SecondPhase>

                <MainContent>

                    {

                        serviceData.map((data: any) => (

                            <ServiceCard key={data.id} title={data.name} description={data.desc} path={data.path} />

                        ))

                    }

                </MainContent>


                <Button>Learn More</Button>

            </SecondPhase>



        </ServiceSection>
    )
}



const ServiceSection = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;

`


const FirstPhase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  gap: 1.2rem;
  margin-bottom: 3rem;

  h1 {
    color: ${({ theme }) => theme.colors.headColor};
    font-size: 3rem; /* Default h1 size */
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 1.5rem;
    height: 200px; /* Example height for smaller screens */

    h1 {
      font-size: 2rem; /* Minimized h1 text size */
    }
  }
`;



const MainContent = styled.div`

    display: flex;
    width: 100%;
    gap: ${({ theme }) => theme.fontSizes.xxLarge};

    @media screen and (max-width: 750px){

        flex-direction: column;
        gap: 1.5rem;
    }

`


const SecondPhase = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxxl};

    margin-top: ${({ theme }) => theme.spacing.xxl};

`;

