import React, { useState } from "react";

// Components
import Input from "../Input";

// Stylization
import { Checkbox, Row } from "./styles";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
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
  );
};

export default Auth;
