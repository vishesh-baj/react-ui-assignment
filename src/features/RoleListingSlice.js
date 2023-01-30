import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rolesList: [
    {
      roleLabel: "testLabel",
      roleKey: "testRoleKey",
    },
  ],
};

const RoleListingSlice = createSlice({
  name: "roles-list",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state = state.rolesList.push(action.payload);
    },
    deleteRole: (state, action) => {},
    editRole: (state, action) => {},
  },
});

export const { addRole, deleteRole, editRole } = RoleListingSlice.actions;
export default RoleListingSlice.reducer;
