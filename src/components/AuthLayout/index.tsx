// External Libraries
import React, { useState } from "react";

// Components
import Auth from "../Auth";
import Shipping from "../Shipping";
import Input from "../Input";
import Button from "../Button";

// Stylization
import { Container, Row, CouponCode, ImageContainer, Img } from "./styles";

const AuthLayout: React.FC = () => {
  const [name, setName] = useState("");

  return (
    <Container>
      {/* <Auth /> */}
      <Shipping />

      <CouponCode>
        <ImageContainer>
          <Img>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/product/spiced-mint-m.png" alt="product image" />
          </Img>
          <div>
            <h2>Spiced Mint Candleaf®</h2>
            <h3>$ 9.99</h3>
          </div>
        </ImageContainer>

        <hr />
        <Row>
          <Input
            value={name}
            onChangeValue={setName}
            placeholder="Coupon code"
            required
            width="285px"
          />
          <Button text="Add code" width="116px" color="#A8A8A8" />
        </Row>
        <hr />

        <Row>
          <h4>Subtotal</h4>
          <h4>$9.99</h4>
        </Row>
        <Row marginTop="16px">
          <h4>Shipping</h4>
          <h4>Calculated at the next step</h4>
        </Row>
        <hr />
        <Row>
          <h4>Total</h4>
          <h2>$9.9</h2>
        </Row>
      </CouponCode>
    </Container>
  );
};

export default AuthLayout;
