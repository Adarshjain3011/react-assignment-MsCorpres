import styled from "styled-components";
import { footerData } from "../../utils/data";

import { socialLinks } from "../../utils/data";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Para from "../common/Para";

const FooterSection = () => {
    return (
        <FooterContainer>

            <Main>

                <LeftSection>
                    <h3>Digital agency</h3>
                    <Para variant="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</Para>
                    <SocialIcons>
                        {socialLinks.map((item: any) => (
                            <a key={item.id} href={item.url}>
                                {item.icon === "twitter" && <FaTwitter />}
                                {item.icon === "facebook" && <FaFacebook />}
                                {item.icon === "instagram" && <FaInstagram />}
                            </a>
                        ))}
                    </SocialIcons>
                </LeftSection>

                <RightSection>
                    {footerData.map((category: any, index: any) => (
                        <FooterColumn key={index}>
                            <h4>{category.title}</h4>
                            <ul>
                                {category.links.map((link: any, i: any) => (
                                    <li key={i}>{link}</li>
                                ))}
                            </ul>
                        </FooterColumn>
                    ))}
                </RightSection>

            </Main>


        </FooterContainer>
    );
};

export default FooterSection;

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background: black;
  color: white;
  padding: 50px;
  display: flex;
  justify-content: space-between;
`;


const Main = styled.div`
    
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


`;


const LeftSection = styled.div`
  width: 30%;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;

  a {
    color: white;
    font-size: 1.2rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: 200;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    
    li {
      margin-bottom: 8px;
      font-size: 0.9rem;
      font-weight: 100;
    }
  }
`;
