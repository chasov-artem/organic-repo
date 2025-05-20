import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Тут будуть тексти, зображення, дані для компонентів
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    // Додавай редьюсери за потреби
  },
});

export default contentSlice.reducer;
