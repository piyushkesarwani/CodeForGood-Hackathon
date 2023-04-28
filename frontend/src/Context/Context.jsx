import React, { createContext, useContext, useReducer } from "react";
import { data } from "../Data";
import { CartReducer } from "./Reducers";

const Cart = createContext();

export const Context = ({ children }) => {
  const products = data;

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  console.log(state);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
