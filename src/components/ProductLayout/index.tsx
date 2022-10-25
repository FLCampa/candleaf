// External Libraries
import React, { useState } from "react";
import Button from "../Button";
import Footer from "../Footer";

// Components
import Nav from "../Nav";

// Stylization
import {
  Container,
  Content,
  ImageContainer,
  Details,
  Quantity,
  Subscription,
  Price,
  RadioGroup,
  Description,
  RightColumn,
} from "./styles";

interface ProductLayoutProps {
  image: any;
  name: string;
  price: number;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  image,
  name,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const [purchaseType, setPurchaseType] = useState<any>();

  return (
    <Container>
      <Nav />

      <Content>
        <ImageContainer>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="product image" />
          </div>

          <h3>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </h3>

          <h4>FREE SHIPPING</h4>
        </ImageContainer>

        <RightColumn>
          <h2>{name}</h2>

          <Details>
            <Price>
              <span>{`$ ${price}`}</span>

              <Quantity>
                <h5>Quantity</h5>
                <div>
                  <button onClick={decreaseQuantity}>-</button>
                  <input type="number" value={quantity} min={1} />
                  <button onClick={increaseQuantity}>+</button>
                </div>
              </Quantity>
            </Price>

            <Subscription>
              <RadioGroup>
                <label>
                  <input
                    type="radio"
                    value="oneTime"
                    name="purchaseType"
                    onChange={(e) => setPurchaseType(e.target.value)}
                  />
                  One time purchase
                </label>

                <label>
                  <input
                    type="radio"
                    value="subscribe"
                    name="purchaseType"
                    onChange={(e) => setPurchaseType(e.target.value)}
                    checked
                  />
                  Subscribe and delivery every 4 weeks
                  <br />
                  <span>
                    Subscribe now and get the 10% of discount on every recurring
                    order. The discount will be applied at checkout. See details
                  </span>
                </label>
              </RadioGroup>

              <Button text="+ Add to cart" width="100%" />
            </Subscription>
          </Details>

          <Description>
            <p>
              <b>Wax:</b> Top grade Soy wax that delivers a smoke less,
              consistent burn
            </p>

            <p>
              <b>Fragrance:</b> Premium quality ingredients with natural
              essential oils
            </p>

            <p>
              <b>Burning Time:</b> 70-75 hours <b>Dimension:</b> 10cm x 5cm{" "}
              <b>Weight: 400g</b>
            </p>
          </Description>
        </RightColumn>
      </Content>

      <Footer />
    </Container>
  );
};

export default ProductLayout;
