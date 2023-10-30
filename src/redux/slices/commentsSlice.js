import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  showCart: false
}

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action) => {
      state.comments = state.comments.filter((comm) => comm.id !== action.payload)
    },
    emptyComments: (state) => {
      state.comments = []
    },
  }
})

export const { addComment, removeComment, emptyComments } = commentsSlice.actions

export default commentsSlice.reducer
