import styled from "styled-components";

interface ContainerProps {
  width: string;
  color: string;
}

export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: 40px;
  background: ${({ color }) => (color ? color : "#56b280")};

  font-size: 18px;
  color: white;

  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
