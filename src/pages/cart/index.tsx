// External Libraries
import React from "react";
import { NextPage } from "next";

// Components
import CartLayout from "../../components/CartLayout";

const Cart: NextPage = () => {
  return <CartLayout name="Spiced Mint Candleaf" price="9.99" qty={2} />;
};

export default Cart;
