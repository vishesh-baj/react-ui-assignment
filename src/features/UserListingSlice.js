import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [
    {
      name: "testName",
      email: "testEmail@ReportGmailerrorred.com",
      username: "testUserName",
      mobile: "0000000000",
      roleKey: "testRoleKey",
      password: "testPassword",
    },
  ],
};
const UserListingSlice = createSlice({
  name: "user-list",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersList.push(action.payload);
    },
    deleteUser: (state, action) => {},
    editUser: (state, action) => {},
  },
});

export const { addUser, deleteUser, editUser } = UserListingSlice.actions;
export default UserListingSlice.reducer;
