import React from "react";

import { CheckMark } from "../../styles/icons";

import { Container } from "./styles";

interface FeatureProps {
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ text }) => {
  return (
    <Container>
      {CheckMark}
      <span>{text}</span>
    </Container>
  );
};

export default Feature;
