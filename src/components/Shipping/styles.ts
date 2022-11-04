import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 22px;
    margin-bottom: 25px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 445px;

  label {
    font-size: 14px;
    font-weight: 400;
    padding: 20px;
    margin-bottom: 5px;
    border: 2px solid #e6e6e6;
    border-radius: 7px;

    > span {
      font-size: 14px;
      font-weight: 400;
      color: #818181;
    }

    &:hover {
      cursor: pointer;
    }
  }

  input {
    margin-right: 15px;
  }

  input[type="radio"]:checked:after {
    content: "";
    display: inline-block;

    position: relative;
    top: -1px;
    left: -1px;

    width: 11px;
    height: 11px;
    background-color: #87d6ac;

    border: 2px solid #dbdbdb;
    border-radius: 50%;
  }
`;
