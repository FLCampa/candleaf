import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 800px;
  background: #f7f8fa;

  > div {
    h2 {
      font-size: 40px;
      margin-bottom: 8px;
      color: #1d252c;
    }

    p {
      margin-bottom: 38px;
      font-weight: 300;
      color: #56b280;
    }

    div {
      margin-bottom: 20px;
    }

    button {
      margin-top: 70px;
    }
  }

  > div:last-child {
    margin-left: 60px;
    box-shadow: 0px 4px 94px rgba(123, 123, 123, 0.35);
  }
`;
