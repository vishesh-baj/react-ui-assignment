import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "dummy user name",
    email: "dummyEmail@gmail.com",
    username: "dummyUsername",
    mobile: "dummyMobileNumber",
    roleKey: "dummyRoleKey",
    password: "dummyPassword",
  },
];

const UserListingSlice = createSlice({
  name: "user-listing",
  initialState,
  reducers: {
    addUser: (state, action) => {},
    editUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
});

export const { addUser, deleteUser, editUser } = UserListingSlice.actions;

export default UserListingSlice.reducer;
