import { View, Text } from "react-native";
import React, { createContext, useReducer } from "react";

export const ShopContext = createContext();

const initial = {
  coupon: null,
  cart: [],
  totalAmount: 0,
  discount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      const newCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: newCart,
        totalAmount: newCart
          .map((item) => item.price * item.quantity)
          .reduce((acc, price) => acc + price, 0),
      };

    case "UpdateCart":
      const update = state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      return {
        ...state,
        cart: update,
        totalAmount: update
          .map((item) => item.price * item.quantity)
          .reduce((acc, price) => acc + price, 0),
      };

    case "reduceQuantity":
      const reduced = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      return {
        ...state,
        cart: reduced,
        totalAmount: reduced
          .map((item) => item.price * item.quantity)
          .reduce((acc, price) => acc + price, 0),
      };

    case "removeFromCart":
      const removed = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        showModal: true,
        cart: removed,
        totalAmount: removed
          .map((item) => item.price * item.quantity)
          .reduce((acc, price) => acc + price, 0),
      };

    case "RemoveCoupon":
      return {
        ...state,
        coupon: null,
        discount: 0,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalAmount: 0,
        discount: 0,
      };

    case "ADD_COUPON":
      switch (action.payload.type) {
        case "flat":
          const discount = action.payload.discount;
          return {
            ...state,
            showModal: true,
            modalContent: {
              title: `Coupon code "${action.payload.code}" applied`,
              text: `$${action.payload.discount} has been deducted from your cart total`,
            },
            coupon: action.payload,
            discount: discount,
          };

        case "percentage":
          const reduction = (action.payload.discount / 100) * state.totalAmount;
          return {
            ...state,
            showModal: true,
            modalContent: {
              title: `Coupon code "${action.payload.code}" applied`,
              text: `${action.payload.discount}% has been deducted from your cart total`,
            },
            coupon: action.payload,
            discount: reduction,
          };

        default:
          return state;
      }

    default:
      return {
        ...state,
      };
  }
};

const StoreContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const sharedState = { state, dispatch };

  return (
    <ShopContext.Provider value={sharedState}>{children}</ShopContext.Provider>
  );
};

export default StoreContext;
