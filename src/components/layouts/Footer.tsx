import styled from "styled-components";
import { footerData } from "../../utils/data";
import { socialLinks } from "../../utils/data";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <FooterContainer>
      <Main>
        <LeftSection>
          <h3>Digital agency</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
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

// Styled Components

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

  @media screen and (max-width: 768px) {
    position: relative;
    padding: 30px 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: white;
    font-weight: 100;
    opacity: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 2rem;

  a {
    color: white;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: 600;
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
      font-weight: 400;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
