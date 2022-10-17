// External Libraries
import React from "react";

// Components
import Nav from "../Nav";
import Heading from "../Heading";

// Stylization
import { Container } from "./styles";

const HomeLayout: React.FC = () => {
  return (
    <Container>
      <Nav />

      <Heading />
    </Container>
  );
};

export default HomeLayout;
