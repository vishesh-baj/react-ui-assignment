import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RolesListingPage from "./pages/RolesListingPage";
import UserListingPage from "./pages/UserListingPage";
import PageNotFound from "./pages/PageNotFound";
import { PATHS } from "./routers/path";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/role-list"
          key="role-list"
          element={<RolesListingPage />}
        />
        <Route
          pa
          path="user-list"
          key="user-list"
          element={<UserListingPage />}
        />
        <Route path="/" key="root" element={<Navigate to="/user-list" />} />
      </Routes>
    </>
  );
};

export default App;
