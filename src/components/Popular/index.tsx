// External Libraries
import React from "react";
import ProductCard from "../ProductCard";

// Utils
import { products } from "../../utils/products";

// Stylization
import { Container } from "./styles";

const Popular: React.FC = () => {
  const popularProdcts = products.slice(0, 4);

  return (
    <Container>
      <h2>Popular</h2>
      <p>Our top selling product that you may like</p>

      <div>
        {popularProdcts.map((product, i) => (
          <ProductCard
            key={i}
            image={`/images/product/${product.mediumImage}`}
            name={product.name}
            price={product.price}
            url={product.name}
          />
        ))}
      </div>
    </Container>
  );
};

export default Popular;
