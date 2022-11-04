// External Libraries
import React from "react";

// Stylization
import { Container } from "./styles";

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, width, color, onClick }) => {
  return (
    <Container onClick={onClick} width={width} color={color}>
      {text}
    </Container>
  );
};

export default Button;
