import styled from "styled-components";

interface RowProps {
  marginTop?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  max-width: 100%;
  padding-left: 10%;

  > section {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: white;
  }

  h1:nth-of-type(2) {
    margin-top: 40px;
  }

  input[type="submit"] {
    width: 222px;
    height: 40px;

    font-size: 18px;
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
  align-items: center;

  width: 445px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};

  > a {
    color: #56b280;
  }

  > button {
    margin-top: 10px;
    margin-left: 10px;
  }

  > h4 {
    font-size: 14px;
  }
`;

export const CouponCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-right: 10%;

  background: #f2f2f2;

  > hr {
    width: 445px;
    border: 1px solid rgba(86, 178, 128, 0.2);
  }

  hr:nth-of-type(1) {
    margin: 28px 0 18px 0;
  }

  hr:nth-of-type(2) {
    margin: 28px 0;
  }

  hr:nth-of-type(3) {
    margin: 30px 0 15px 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 445px;
  margin-bottom: 22px;

  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  h3 {
    color: #56b280;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 130px;
  margin-right: 60px;
  background: #f7f8fa;

  > img {
    width: 160px;
    height: auto;
  }
`;
