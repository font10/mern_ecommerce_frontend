import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {},
  isEdit: false,
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    submitAddress(state, action){
      state.address = action.payload
    },
    emptyAddres(state) {
      state.address = {}
    },
    isEditToTrue(state) {
      state.isEdit = true
    },
    isEditToFalse(state) {
      state.isEdit = false
    }
  }
})

export const { submitAddress, isEditToTrue, isEditToFalse } = addressSlice.actions

export default addressSlice.reducer