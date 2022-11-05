import React from "react";

import { Container, InfoSummary, RadioGroup } from "./styles";

const Shipping: React.FC = () => {
  return (
    <Container>
      <InfoSummary>
        <div>
          <div>
            <h4>Contact</h4>
            <p>joe.spagnuolo@uxbly.com</p>
          </div>
          <button onClick={() => console.log("open modal")}>Edit</button>
        </div>

        <hr />

        <div>
          <div>
            <h4>Ship to</h4>
            <p>Via Firenze 23, 92023, Campobello di Licata AG, Italia</p>
          </div>
          <button onClick={() => console.log("open modal")}>Edit</button>
        </div>
      </InfoSummary>

      <h1>Shipping method</h1>
      <RadioGroup
        onChange={(event) => {
          const value = (event.target as HTMLTextAreaElement).value;
        }}
      >
        <label>
          <input type="radio" value="standard" name="standard" checked />
          Standard Shipping
        </label>
      </RadioGroup>
    </Container>
  );
};

export default Shipping;
