import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 400px;
  background: #272727;

  > hr {
    width: 100%;
    max-width: 1110px;
    margin-top: 60px;
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1130px;
  padding: 0 20px;

  > :nth-child(1) {
    h3 {
      font-size: 16px;
      font-weight: 300;
      color: white;
    }
  }

  > :nth-child(2) {
    display: flex;
  }

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 70px;
  }

  > a {
    width: fit-content;
    margin-bottom: 15px;
    padding: 4px;
    color: #e1e1e1;
  }

  > a:first-of-type {
    font-size: 16px;
    margin-top: 45px;
    margin-bottom: 20px;
    color: #56b280;
  }

  > a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    cursor: pointer;
  }
`;
