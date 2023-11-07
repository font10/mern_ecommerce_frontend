import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  urlFilter: '/product/filter',
  showSidebar: false
}

export const productFilterSlice = createSlice({
  name: 'productfilter',
  initialState,
  reducers: {
    addUrlFilter(state, action) {
      state.urlFilter = action.payload
    },
    showSidebarToFalse: (state) => {
      state.showSidebar = false
    },
    toggleShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar
    },
    
  }
})

export const { addUrlFilter, showSidebarToFalse, toggleShowSidebar } = productFilterSlice.actions

export default productFilterSlice.reducer
