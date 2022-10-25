import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  max-width: 100%;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1100px;
  min-height: 720px;
`;

export const ImageContainer = styled.div`
  width: 540px;

  > div {
    background: #f7f8fa;
    border-radius: 3px;
  }

  h3 {
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
  }

  h4 {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
    color: #56b280;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 540px;
  margin-left: 30px;

  > h2 {
    margin-bottom: 30px;
  }
`;

export const Details = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 26px;
    color: #56b280;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 75px;
  margin-top: 30px;

  > h5 {
    font-size: 16px;
    margin-bottom: 4px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    border: 2px #56b280 solid;

    > button {
      width: 100%;
      background: white;

      font-size: 20px;
      color: #56b280;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    > input {
      width: 25px;

      text-align: center;
      font-size: 20px;
      border: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 350px;
  height: 300px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 400;
    padding: 20px;
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

export const Description = styled.div`
  padding: 14px 14px 6px 14px;
  margin-top: 40px;

  border: 2px solid #e6e6e6;
  border-radius: 7px;

  > p {
    font-size: 15px;
    font-weight: 400;
    color: #56b280;
    margin-bottom: 8px;

    > b {
      color: black;
    }
  }
`;
