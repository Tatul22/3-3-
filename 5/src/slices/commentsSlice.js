// BEGIN (write your solution here)
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const commentsAdapter = createEntityAdapter();

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    setComments: commentsAdapter.addMany,
  },
});

export const { actions } = commentsSlice;

export default commentsSlice.reducer;
// END
