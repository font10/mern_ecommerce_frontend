import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  urlFilter: '/product/filter',
}

export const productFilterSlice = createSlice({
  name: 'productfilter',
  initialState,
  reducers: {
    addUrlFilter(state, action) {
      state.urlFilter = action.payload
    }
  }
})

export const { addUrlFilter } = productFilterSlice.actions

export default productFilterSlice.reducer
