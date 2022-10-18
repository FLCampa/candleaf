// External Libraries
import React from "react";
import Link from "next/link";

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
  function formatedUrl() {
    return url.replace(/\s/g, "").toLowerCase();
  }

  return (
    <Link href={formatedUrl()}>
      <Container>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="product image" />

        <div>
          <h4>{name}</h4>
          <span>{`${price}$`}</span>
        </div>
      </Container>
    </Link>
  );
};

export default ProductCard;
