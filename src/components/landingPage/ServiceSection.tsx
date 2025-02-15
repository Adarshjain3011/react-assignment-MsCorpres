import React from 'react'
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
  /* align-items: center;
  justify-content: space-between; */

  /* gap: ${({ theme }) => theme.spacing.small}; */
  width: 100%;
  max-width: 1200px;

`


const FirstPhase = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: x-large;

    gap: 0;
    margin-bottom: 3rem;

    h1{


        color: ${({ theme }) => theme.colors.headColor};

    }
`;


const MainContent = styled.div`

    display: flex;
    gap: 2rem;

`


const SecondPhase = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme})=>theme.spacing.small};


`;

