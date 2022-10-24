import styled from "styled-components";

interface ContainerProps {
  width: string;
}

export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: 40px;
  background: #56b280;

  font-size: 18px;
  color: white;

  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
