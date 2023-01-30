import { configureStore } from "@reduxjs/toolkit";
import RoleListingSlice from "./features/RoleListingSlice";
import UserListingSlice from "./features/UserListingSlice";
const store = configureStore({
  reducer: {
    roles: RoleListingSlice,
    users: UserListingSlice,
  },
});

export default store;
