import styled from "styled-components";

interface ContainerProps {
  marginRight?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 350px;
  height: 295px;
  padding: 10px 30px 25px 30px;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)};
  background: white;

  box-shadow: 0px 4px 24px rgba(139, 167, 178, 0.16);
  border-radius: 6px;

  > div {
    display: flex;
    justify-content: space-between;

    width: 146px;
  }

  > h3 {
    text-align: center;
    font-size: 22px;
    font-style: italic;
  }

  > p {
    font-size: 18px;
    color: #7c8087;
  }
`;
