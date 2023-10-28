import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  showCart: false,
  total: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {      
      console.log(current(state))
      console.log(action.payload)
      const product = state.products.find((product) => product.secretId === action.payload.secretId);
      if (product) product.quantity += action.payload.quantity;
      else state.products.push(action.payload);      
      console.log(current(state))
    },
    removeProduct: (state, action) => {
      console.log(action.payload)
      console.log(current(state))
      state.products = state.products.filter((product) => product.secretId !== action.payload)
    },
    editProduct: (state, action) => {
      const product = state.products.find((product) => product.secretId === action.payload.id);
      if(product) product.quantity = Number(action.payload.quantity)
    },
    emptyCart: (state) => {
      state.products = []
      state.total = 0
    },
    toggleShowCart: (state) => {
      state.showCart = !state.showCart
    },
    calculateTotal: (state) => {
      state.total = state.products.reduce((acumulador, product) => acumulador + (product.quantity * product.price), 0);
    },
  }
})

export const { addProduct, removeProduct, emptyCart, editProduct, toggleShowCart, calculateTotal } = cartSlice.actions

export default cartSlice.reducer
