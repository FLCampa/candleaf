// External Libraries
import React from "react";
import Button from "../Button";

// Stylization
import { Container, Card } from "./styles";

const Heading: React.FC = () => {
  return (
    <Container>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/bg-image.png" alt="background image" />

      <Card>
        <h2>The nature candle</h2>

        <span>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </span>

        <Button
          onClick={() => console.log("scrollToRef")}
          text="Discover our collection"
          width="310px"
        />
      </Card>
    </Container>
  );
};

export default Heading;
