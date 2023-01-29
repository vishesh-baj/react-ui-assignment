import { configureStore } from "@reduxjs/toolkit";
import RoleListingReducer from "./src/features/RoleListingSlice";
const store = configureStore({
  reducer: {
    roles: RoleListingReducer,
  },
});

export default store;
