import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    width: 445px;
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

export const InfoSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 445px;
  margin: 45px 0;

  border: 2px solid #e6e6e6;
  border-radius: 7px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 19px 20px;

    > div {
      display: flex;
      align-items: center;

      > h4 {
        width: 75px;
        color: #818181;
        font-weight: 400;
      }

      > p {
        max-width: 290px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    > h4,
    p,
    a,
    button {
      font-size: 14px;
    }

    > button {
      background: transparent;
      color: #56b280;

      &:hover {
        cursor: pointer;
      }
    }
  }

  > hr {
    width: 90%;
    border: 1px solid #e6e6e6;
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
