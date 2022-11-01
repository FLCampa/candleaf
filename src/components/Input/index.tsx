// External Libraries
import React from "react";

// Stylization
import { Container, InputElement } from "./styles";

interface InputProps {
  label?: string;
  value: any;
  required: boolean;
  type?: "text" | "email" | "password";
  placeholder?: string;
  onChangeValue: (newValue: any) => void;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  required,
  type,
  placeholder,
  onChangeValue,
  width,
}) => {
  return (
    <Container>
      {label && <label>{label}</label>}

      <InputElement
        type={type ?? "text"}
        value={value}
        onChange={(event) => onChangeValue?.(event.target.value)}
        placeholder={placeholder}
        required={required}
        width={width}
      />
    </Container>
  );
};

export default Input;
