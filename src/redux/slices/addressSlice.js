import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {},
  idEdit: '',
  modalForm: false
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    submitAddress(state, action){
      console.log(action.payload)
      state.address = action.payload
    },
    emptyAddress(state) {
      state.address = {}
    },
    idToEdit(state, action) {
      console.log(action.payload)
      state.idEdit = action.payload
    },
    modalFormToTrue(state) {
      state.modalForm = true
    },
    modalFormToFalse(state) {
      state.modalForm = false
    },
  }
})

export const { submitAddress, idToEdit, modalFormToTrue, modalFormToFalse } = addressSlice.actions

export default addressSlice.reducer