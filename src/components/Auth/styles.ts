import styled from "styled-components";

interface RowProps {
  marginTop?: string;
}

export const Checkbox = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-top: 10px;
    margin-right: 7px;
  }

  > label {
    font-size: 14px;
    font-weight: 400;
    margin-top: 10.5px;
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
