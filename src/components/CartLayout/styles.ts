import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 720px;

  > h1 {
    font-size: 26px;
  }

  > a {
    font-size: 18px;
    font-weight: 400;
    color: #56b280;
    margin-top: 30px;
    margin-bottom: 70px;
  }

  > table {
    width: 100%;
    max-width: 1110px;

    overflow: hidden;
    border-collapse: collapse;

    > thead {
      > tr {
        th:not(:nth-child(4)) {
          min-width: 150px;
        }
        th:nth-child(4) {
          min-width: 80px;
        }
      }
    }

    > tbody {
      > tr {
        height: 195px;

        img {
          width: 155px;
          height: auto;
        }

        > td {
          > div {
            display: flex;

            > div {
              > h3 {
                font-size: 26px;
                margin-bottom: 25px;
                margin-left: 30px;
              }
              > a {
                font-weight: 400;
                color: #56b280;
                margin-left: 30px;
              }
            }
          }
        }
      }
    }

    th,
    td {
      text-align: left;
      padding: 5px;
      border-bottom: 1px solid #e5e5e5;
    }
  }

  > div {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    max-width: 1110px;
    margin-top: 42px;

    h3 {
      font-size: 18px;
      text-align: right;
    }

    span {
      font-size: 14px;
      color: #9e9e9e;
    }

    > button {
      margin-left: 70px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 130px;
  background: #f7f8fa;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 75px;

  > h5 {
    font-size: 16px;
    margin-bottom: 4px;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;

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

  input[type="number"]:focus {
    outline: none;
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
`;
