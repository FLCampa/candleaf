import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 75px;

  background: whitesmoke;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 1024px;
  padding: 0 5px;

  > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  ul:nth-child(2) {
    width: 378px;
  }

  ul:nth-child(3) {
    width: 110px;
  }
`;
