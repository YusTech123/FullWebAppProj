import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/LocalStorageUtils";

const getInitialState = (): CartState[] => {
  const cartState: CartState[] = loadState("carts");

  if (cartState) {
    return cartState;
  }

  // If no valid stored state, return the default initial state
  return [
    { 
        id: "nWpZU0-vFw1xWdeF9oVd3",
        userId: "nWpWES-vFw1uSdeB9oVd3", 
        products: [
            {id: "nWpZU0-vFw1uFOeB9oVw2", quantity: 2, price: 100},
            {id: "nWpZU0-vFw1uFOerToVd3", quantity: 3, price: 50},
        ],
        total: 350
    },
    { 
        id: "nWNsty-vFw1uSdeB9oVd3", 
        userId: "nWSder-vFw1uSdeB9oVd3", 
        products: [
            {id: "nWpZU0-vFw1uFOeB9oVw2", quantity: 2, price: 100},
            {id: "nWpZU0-vFw1uFOerToVd3", quantity: 3, price: 50},
        ],
        total: 350
     }
  ];
};

interface Product {
    id: string;
    quantity: number;
    price: number;
  }

interface CartState {
  id: string;
  userId: string;
  products: Product[];
  total: number;
}

const initialState: CartState[] = getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      action.payload.id = nanoid();
      state.push(action.payload);
      saveState("carts", state);
    },
    updateCart(state, action) {
      const cart = state.find((cart) => cart.id == action.payload.id);
      if (cart) {
        cart.userId = action.payload.userId;
        cart.products = action.payload.products;
        cart.total = action.payload.total;
      }
      saveState("carts", state);
    },
    deleteCart(state, action) {
      const cart = state.find((cart) => cart.id == action.payload.id);
      console.log(cart);
      if (cart) {
        const newState = state.filter((cart) => cart.id != action.payload.id);
        saveState("carts", newState);
        return newState;
      }
    },
  },
});

export const getAllCarts = (state: { carts: CartState[] }) => state.cart;

export const { addCart, updateCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
