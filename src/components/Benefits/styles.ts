import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 800px;
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
      width: 548px;
      margin-bottom: 20px;
    }

    button {
      margin-top: 70px;

      @media (max-width: 1150px) {
        margin-top: 0;
        margin-bottom: 60px;
      }
    }
  }

  > div:last-child {
    box-shadow: 0px 4px 94px rgba(123, 123, 123, 0.35);
  }

  @media (max-width: 1150px) {
    flex-direction: column;
    padding: 50px 0 80px 0;
  }
`;
