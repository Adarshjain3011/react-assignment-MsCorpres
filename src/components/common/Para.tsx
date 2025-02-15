import styled from "styled-components";

interface ParaProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // variant is optional
}

const Para = ({ children, variant = "secondary" }: ParaProps) => {
  return <StyledPara variant={variant}>{children}</StyledPara>;
};

const StyledPara = styled.p<{ variant: "primary" | "secondary" }>`
  font-size: 1.3rem;
  line-height: 1.2;
  color: ${({ theme, variant }) =>
    variant === "primary" ? "white" : theme.colors.textSecondary};
`;

export default Para;
