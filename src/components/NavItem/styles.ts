import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  height: 35px;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    cursor: pointer;
  }
`;

export const Anchor = styled.a`
  margin: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
