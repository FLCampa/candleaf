// External Libraries
import React, { useState } from "react";

// Components
import Nav from "../Nav";
import Footer from "../Footer";
import Button from "../Button";

// Stylization
import { Container, Content, ImageContainer, Quantity } from "./styles";

interface CartLayoutProps {
  name: string;
  price: string;
  qty: number;
}

const CartLayout: React.FC<CartLayoutProps> = ({ name, price, qty }) => {
  const [quantity, setQuantity] = useState(qty);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const subTotal = () => (quantity * Number(price)).toFixed(2);

  return (
    <Container>
      <Nav />

      <Content>
        <h1>Your cart items</h1>
        <a href="">Back to shopping</a>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div>
                  <ImageContainer>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/product/spiced-mint-m.png"
                      alt="product image"
                    />
                  </ImageContainer>

                  <div>
                    <h3>{name}</h3>
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>{`$ ${price}`}</td>
              <td>
                <Quantity>
                  <button onClick={decreaseQuantity}>-</button>
                  <input
                    type="number"
                    value={qty}
                    readOnly
                    min={1}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setQuantity(value);
                    }}
                  />
                  <button onClick={increaseQuantity}>+</button>
                </Quantity>
              </td>
              <td>{`$ ${subTotal()}`}</td>
            </tr>
          </tbody>
        </table>

        <div>
          <div>
            <h3>Sub-total {`$ ${subTotal()}`}</h3>
            <span>Tax and shipping cost will be calculated later</span>
          </div>

          <Button text="Check-out" width="183px" />
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default CartLayout;
