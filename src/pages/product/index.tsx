// External Libraries
import React from "react";
import { NextPage } from "next";

// Components
import ProductLayout from "../../components/ProductLayout";

const Product: NextPage = () => {
  return (
    <ProductLayout
      name="Spiced Mint Candleaf®"
      price={9.98}
      image="/images/product/spiced-mint-l.png"
    />
  );
};

export default Product;
