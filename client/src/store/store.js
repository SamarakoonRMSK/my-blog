import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSliceReducer,
  },
});

export default store;
