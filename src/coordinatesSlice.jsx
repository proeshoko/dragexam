import { createSlice } from '@reduxjs/toolkit';

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: {
    x: 0,
    y: 0,
  },
  reducers: {
    setCoordinates: (state, action) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
});

export const { setCoordinates } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
