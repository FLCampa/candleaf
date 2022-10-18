import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 255px;
  height: 230px;
  background: #f7f8fa;

  filter: drop-shadow(0px 4px 24px rgba(123, 123, 123, 0.15));
  transition: transform 0.17s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  > img {
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 76px;
    padding: 15px 26px;
    background: white;

    h4 {
      font-size: 16px;
    }

    span {
      align-self: flex-end;
      color: #56b280;
    }
  }
`;
