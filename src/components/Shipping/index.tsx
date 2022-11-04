import React from "react";

import { Container, RadioGroup } from "./styles";

const Shipping: React.FC = () => {
  return (
    <Container>
      <h1>Shipping method</h1>
      <RadioGroup
        onChange={(event) => {
          const value = (event.target as HTMLTextAreaElement).value;
        }}
      >
        <label>
          <input type="radio" value="standard" name="standard" />
          Standard Shipping
        </label>
      </RadioGroup>
    </Container>
  );
};

export default Shipping;
