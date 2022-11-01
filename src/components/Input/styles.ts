import styled from "styled-components";

interface InputElementProps {
  width?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  > label {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const InputElement = styled.input<InputElementProps>`
  width: ${({ width }) => (width ? width : "none")};

  outline: none;
  padding: 9px 17px;
  border: 0.5px solid #56b280;

  &:focus {
  }
`;
