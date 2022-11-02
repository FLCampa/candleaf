// External Libraries
import React, { useState } from "react";
import Image from "next/image";

// Components
import Input from "../Input";

// Stylization
import { Container, Checkbox, Row, CouponCode } from "./styles";
import Button from "../Button";

const AuthLayout: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <Container>
      <section>
        <form>
          <h1>Contact</h1>
          <Input
            type="email"
            value={email}
            onChangeValue={setEmail}
            placeholder="Email"
            required
            width="445px"
          />
          <Checkbox>
            <input type="checkbox" id="discount" name="discount" />
            <label htmlFor="discount">
              Add me to Candleaf newsletter for a 10% discount
            </label>
          </Checkbox>

          <h1>Shipping Address</h1>
          <Row>
            <Input
              value={name}
              onChangeValue={setName}
              placeholder="Name"
              required
              width="216px"
            />
            <Input
              value={name}
              onChangeValue={setName}
              placeholder="Second Name"
              required
              width="216px"
            />
          </Row>

          <Input
            value={name}
            onChangeValue={setName}
            placeholder="Address and number"
            required
            width="445px"
          />
          <Input
            value={name}
            onChangeValue={setName}
            placeholder="Shipping note (optional)"
            required
            width="445px"
          />

          <Row>
            <Input
              value={name}
              onChangeValue={setName}
              placeholder="City"
              required
              width="140px"
            />
            <Input
              value={name}
              onChangeValue={setName}
              placeholder="Postal Code"
              required
              width="140px"
            />
            <Input
              value={name}
              onChangeValue={setName}
              placeholder="Province"
              required
              width="140px"
            />
          </Row>

          <Input
            value={name}
            onChangeValue={setName}
            placeholder="Country/Region"
            required
            width="445px"
          />
          <Checkbox>
            <input type="checkbox" id="discount" name="discount" />
            <label htmlFor="discount">
              Save this informations for a future fast checkout
            </label>
          </Checkbox>

          <Row marginTop="60px">
            <a href="">Back to cart</a>
            <input type="submit" value="Go to shipping" />
          </Row>
        </form>
      </section>

      <CouponCode>
        <hr />
        <Row>
          <Input
            value={name}
            onChangeValue={setName}
            placeholder="Coupon code"
            required
            width="285px"
          />
          <Button text="Add code" width="116px" />
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
