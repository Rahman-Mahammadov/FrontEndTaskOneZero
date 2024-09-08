import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
