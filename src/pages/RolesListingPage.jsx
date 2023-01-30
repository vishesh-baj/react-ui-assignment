import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";

// roles listing page specific to the component hgeirarchy of the styled
const RolesListingPage = () => {
  const roles = useSelector((state) => {
    return state.roles.rolesList;
  });
  return (
    <main className="w-screen h-screen bg-base-300">
      <nav className="w-full h-auto p-4 bg-base-100 flex justify-between">
        {/* task details are specific to thge task selected by the user
         */}
        <div>TASK</div>
        <div className="flex gap-4">
          <NavLink to="/user-list"> User List</NavLink>
          <NavLink to="/role-list">Role List</NavLink>
        </div>
      </nav>
      <div className="flex flex-col justify-center p-8">
        <h1>User List</h1>
        <div className="flex justify-end mb-5">
          <button className="btn btn-primary">Add Users</button>
        </div>
        <Table rows={roles} tableType="users" />
      </div>
    </main>
  );
};

export default RolesListingPage;
