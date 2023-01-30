import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";

const RolesListingPage = () => {
  const roles = useSelector((state) => {
    state.roles.rolesList;
  });
  console.log(roles);

  return (
    <main className="w-screen h-screen bg-base-300">
      <nav className="w-full h-auto p-4 bg-base-100 flex justify-between">
        <div>Assignment</div>
        <div className="flex gap-4">
          <h1>User List</h1>
          <h1>Role List</h1>
        </div>
      </nav>
      <div className="flex justify-center p-8">
        <h1>Role List</h1>
        <Table rows={roles} />
      </div>
    </main>
  );
};
export default RolesListingPage;
