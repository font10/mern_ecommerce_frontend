import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {},
  orderToAdd: { address: '', paymentMethod: '', userId: '', products: '' },
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addAddress(state, action) {
      state.orderToAdd.address = action.payload
    },
    addPaymentMethod(state, action) {
      state.orderToAdd.paymentMethod = action.payload
    },
    addUserId(state, action) {
      state.orderToAdd.userId = action.payload
    },
    addProducts(state, action) {
      state.orderToAdd.products = action.payload      
    },
  }
})

export const { addAddress, addPaymentMethod, addProducts, addUserId } = ordersSlice.actions

export default ordersSlice.reducer