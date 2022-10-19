// External Libraries
import React from "react";

// Components
import Nav from "../Nav";
import Heading from "../Heading";
import Products from "../Products";
import Benefits from "../Benefits";

// Stylization
import { Container } from "./styles";

const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Nav />

      <Heading />
      <Products />
      <Benefits />
    </Container>
  );
};

export default HomeLayout;
