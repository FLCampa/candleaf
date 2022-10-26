// External Libraries
import React from "react";
import Router from "next/router";

// Stylization
import { Container } from "./styles";

interface ProductCardProps {
  image: any;
  name: string;
  price: number;
  url: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  url,
  onClick,
}) => {
  const formatedName = url.replace(/\s/g, "").toLowerCase();

  function sendProps(image, name, price) {
    Router.push(
      {
        pathname: `/product`,
        query: {
          image: image,
          name: name,
          price: price,
        },
      },
      `/product/${formatedName}`
    );
  }

  return (
    <a onClick={() => sendProps(image, name, price)}>
      <Container>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="product image" />

        <div>
          <h4>{name}</h4>
          <span>{`${price}$`}</span>
        </div>
      </Container>
    </a>
  );
};

export default ProductCard;
