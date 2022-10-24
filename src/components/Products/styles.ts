import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 50px 0 90px 0;

  > h2 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #0b254b;
  }

  > p {
    font-size: 18px;
    margin-bottom: 60px;
    color: #5e6e89;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 30px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 875px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 585px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
