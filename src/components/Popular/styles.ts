import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 600px;

  > h2 {
    font-size: 40px;
    margin-bottom: 8px;
    color: #0b254b;
  }

  > p {
    font-size: 18px;
    margin-bottom: 60px;
    color: #5e6e89;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-gap: 30px;
  }
`;
