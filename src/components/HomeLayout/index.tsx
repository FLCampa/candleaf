// External Libraries
import React from "react";

// Components
import Nav from "../Nav";
import Heading from "../Heading";
import Products from "../Products";

// Stylization
import { Container } from "./styles";

const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Nav />

      <Heading />

      <Products />
    </Container>
  );
};

export default HomeLayout;
