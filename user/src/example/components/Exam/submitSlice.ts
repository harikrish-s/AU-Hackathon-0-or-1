// slices/boolean.js

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'boolean',
  initialState: {
    value: false,
  },
  reducers: {
    setBoolean: state => {
      state.value = true;
    },
  },
});

export const { setBoolean } = slice.actions;
export const selectBoolean = (state: { boolean: { value: boolean } }) => state.boolean.value;

export default slice.reducer;
