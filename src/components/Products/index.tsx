// External Libraries
import React from "react";

// Components
import ProductCard from "../ProductCard";

// Utils
import { products } from "../../utils/products";

// Stylization
import { Container, CardsContainer } from "./styles";

const Products: React.FC = () => {
  return (
    <Container>
      <h2>Products</h2>
      <p>Order for yourself or for your loved ones</p>

      <CardsContainer>
        {products.map((product, i) => (
          <ProductCard
            key={i}
            image={`/images/product/${product.mediumImage}`}
            name={product.name}
            price={product.price}
            url={product.name}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Products;
