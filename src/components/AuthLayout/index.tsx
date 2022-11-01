// External Libraries
import React, { useState } from "react";

// Components
import Input from "../Input";

// Stylization
import { Container, Row } from "./styles";

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

          <Row marginTop="60px">
            <a href="">Back to cart</a>
            <input type="submit" value="Go to shipping" />
          </Row>
        </form>
      </section>

      <div></div>
    </Container>
  );
};

export default AuthLayout;
