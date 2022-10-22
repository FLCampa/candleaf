// External Libraries
import React from "react";

// Stylization
import { Container } from "./styles";

interface ButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, width, onClick }) => {
  return (
    <Container onClick={onClick} width={width}>
      {text}
    </Container>
  );
};

export default Button;
