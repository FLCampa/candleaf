// External Libraries
import { useRouter } from "next/router";
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
  image?: any;
  name?: string;
  price?: number;
}

const ProductLayout: React.FC<ProductLayoutProps> = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const [purchaseType, setPurchaseType] = useState("subscribe");

  const router = useRouter();

  const {
    query: { image, name, price },
  } = router;

  return (
    <Container>
      <Nav />

      <Content>
        <ImageContainer>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.toString()} alt="product image" />
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
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(event) => {
                      const value = Number(event.target.value);
                      setQuantity(value);
                    }}
                  />
                  <button onClick={increaseQuantity}>+</button>
                </div>
              </Quantity>
            </Price>

            <Subscription>
              <RadioGroup
                onChange={(event) => {
                  const value = (event.target as HTMLTextAreaElement).value;
                  setPurchaseType(value);
                }}
              >
                <label>
                  <input type="radio" value="oneTime" name="purchaseType" />
                  One time purchase
                </label>

                <label>
                  <input
                    type="radio"
                    value="subscribe"
                    name="purchaseType"
                    defaultChecked
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
