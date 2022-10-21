// External Libraries
import React from "react";

// Components
import Nav from "../Nav";
import Heading from "../Heading";
import Products from "../Products";
import Benefits from "../Benefits";
import Testimonials from "../Testimonials";
import Popular from "../Popular";

// Stylization
import { Container } from "./styles";

const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Nav />

      <Heading />
      <Products />
      <Benefits />
      <Testimonials />
      <Popular />
    </Container>
  );
};

export default HomeLayout;
