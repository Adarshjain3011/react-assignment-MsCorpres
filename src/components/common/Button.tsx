import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ variant = "primary", onClick, children }: ButtonProps) => {
  return <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button<{ variant: string }>`
  background: ${({ theme }) => theme.colors.primary}; // Always same bg color
  color: ${({ variant, theme }) =>
    variant === "primary" ? "#fff" : theme.colors.textPrimary}; // Change text color
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent}; // Slightly different on hover
    transform: translateY(-2px);
  }
`;

export default Button;
