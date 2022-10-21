import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width: 730px;
  height: 350px;

  background: rgba(247, 248, 250, 0.8);
  backdrop-filter: blur(5px);

  > h2 {
    font-size: 40px;
    font-weight: 500;
    color: #1d252c;
  }

  > span {
    text-align: center;
    margin: 0 90px 50px 90px;
    color: #1d252c;
  }
`;
