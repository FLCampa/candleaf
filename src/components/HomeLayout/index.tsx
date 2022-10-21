// External Libraries
import React from "react";

// Components
import Nav from "../Nav";
import Heading from "../Heading";
import Products from "../Products";
import Benefits from "../Benefits";
import Testimonials from "../Testimonials";
import Popular from "../Popular";
import Footer from "../Footer";

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
      <Footer />
    </Container>
  );
};

export default HomeLayout;
