const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  roles: [
    {
      roleLabel: "role label",
      roleKey: "role key",
    },
  ],
};

const RoleListingSlice = createSlice({
  name: "role-slice",
  initialState,
  reducers: {
    addRole: (state, action) => {},
    editRole: (state, action) => {},
    deleteRole: (state, action) => {},
  },
});

export const { addRole, deleteRole, editRole } = RoleListingSlice.actions;

export default RoleListingSlice.reducer;
