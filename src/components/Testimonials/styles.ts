import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 600px;
  background: rgba(86, 178, 128, 0.1);

  > h2 {
    font-size: 40px;
    font-style: italic;
    margin-bottom: 8px;
    color: #0b254b;
  }

  > p {
    font-size: 18px;
    font-style: italic;
    color: #5e6e89;
    margin-bottom: 35px;
  }

  > div {
    display: flex;
  }
`;
