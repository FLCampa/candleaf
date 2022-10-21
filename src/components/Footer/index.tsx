// External Libraries
import React from "react";

// Stylization
import { Container, Content, Column } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <hr />

      <Content>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/footer-logo.png" alt="footer logo" />
          <h3>
            Your natural candle made for <br /> your home and for your wellness.
          </h3>
        </div>

        <div>
          <Column>
            <a>Discover</a>
            <a>New season</a>
            <a>Most searched</a>
            <a>Most selled</a>
          </Column>

          <Column>
            <a>About</a>
            <a>Help</a>
            <a>Shipping</a>
            <a>Affiliate</a>
          </Column>

          <Column>
            <a>Info</a>
            <a>Contact us</a>
            <a>Privacy Policies</a>
            <a>Terms & Conditions</a>
          </Column>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
