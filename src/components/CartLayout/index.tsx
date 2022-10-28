// External Libraries
import React from "react";

// Components
import Nav from "../Nav";
import Footer from "../Footer";

// Stylization
import { Container, Content, ImageContainer } from "./styles";
import Button from "../Button";

const CartLayout: React.FC = () => {
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
                      src="/images/product/clean-lavander-m.png"
                      alt=" product image"
                    />
                  </ImageContainer>

                  <div>
                    <h3>Spiced Mint Candleaf</h3>
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>$9.99</td>
              <td>1</td>
              <td>$9.99</td>
            </tr>
          </tbody>
        </table>

        <div>
          <div>
            <h3>
              Sub-total <b>$9.99</b>
            </h3>
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
