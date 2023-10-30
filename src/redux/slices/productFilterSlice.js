import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalFilterProduct: {
    category: false,
    price: false,
    size: false,
    stars: false
  },
}

export const productFilterSlice = createSlice({
  name: 'productfilter',
  initialState,
  reducers: {
    changeModalCategory(state) {
      state.modalFilterProduct.category = !state.modalFilterProduct.category
    },
    changeModalPrice(state) {
      state.modalFilterProduct.price = !state.modalFilterProduct.price
    },
    changeModalSize(state) {
      state.modalFilterProduct.size = !state.modalFilterProduct.size
    },
    changeModalStars(state) {
      state.modalFilterProduct.stars = !state.modalFilterProduct.stars
    },
  }
})

export const { changeModalCategory, changeModalPrice, changeModalSize, changeModalStars } = productFilterSlice.actions

export default productFilterSlice.reducer
