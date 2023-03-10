import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import { addUser } from "../features/UserListingSlice";

const UserListingPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.usersList);
  return (
    <main className="w-screen h-screen bg-base-300">
      <nav className="w-full h-auto p-4 bg-base-100 flex justify-between">
        <div>Assignment</div>
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
        <Table rows={users} tableType="users" />
      </div>
    </main>
  );
};

export default UserListingPage;
