import styled from "styled-components";

interface paraProps {
  children: React.ReactNode;
}

const Para = ({ children }: paraProps) => {
  return <StyledPara>{children}</StyledPara>;
};

const StyledPara = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default Para;

