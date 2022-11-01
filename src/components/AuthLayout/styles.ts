import styled from "styled-components";

interface RowProps {
  marginTop?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  max-width: 100%;

  > section {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: white;
  }

  > div {
    width: 100%;
    height: 100vh;

    background: #f2f2f2;
  }

  input[type="submit"] {
    width: 222px;
    height: 40px;

    font-size: 20px;
    color: white;
    background: #56b280;

    border: none;
    border-radius: 4px;
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 445px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};

  > a {
    color: #56b280;
  }
`;
