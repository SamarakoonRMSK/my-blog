import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducers/userSlice";
import themeSliceReducer from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    userSlice: userSliceReducer,
    themeSlice: themeSliceReducer,
  },
});

export default store;
