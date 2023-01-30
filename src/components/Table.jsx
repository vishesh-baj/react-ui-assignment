import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Table = ({ rows }) => {
  const columns = [...Object.keys(rows[0]), "Edit", "Delete"];
  console.log("ROWS: ", rows);
  console.log("COLUMNS:", columns);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              {columns.map((column) => {
                return <th key={column}>{column}</th>;
              })}
            </tr>
          </thead>
          {/* map rows here */}
          <tbody>
            {rows.map(
              ({ name, email, username, mobile, roleKey, password }, idx) => {
                return (
                  <tr key={idx}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{username}</td>
                    <td>{mobile}</td>
                    <td>{roleKey}</td>
                    <td>{password}</td>
                    <td>
                      <AiFillEdit className="cursor-pointer" />
                    </td>
                    <td>
                      <AiFillDelete className="cursor-pointer" />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
