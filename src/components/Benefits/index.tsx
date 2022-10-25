// External Libraries
import React from "react";

// Components
import Feature from "../Feature";
import Button from "../Button";

// Stylization
import { Container } from "./styles";

const Benefits: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>
          Clean and <br /> fragrant soy wax
        </h2>
        <p>Made for your home and for your wellness</p>

        <Feature text="Eco-sustainable: All recyclable materials, 0% CO2 emissions." />
        <Feature text="Hyphoallergenic: 100% natural, human friendly ingredients." />
        <Feature text="Handmade: All candles are craftly made with love." />
        <Feature text="Long burning: No more waste. Created for last long." />

        <Button
          onClick={() => console.log("click")}
          text="Learn more"
          width="195px"
        />
      </div>

      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/benefits.png" alt="benefits image" />
      </div>
    </Container>
  );
};

export default Benefits;
