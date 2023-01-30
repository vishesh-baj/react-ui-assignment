import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

// table is specific to the component architecture of the following authority

const Table = ({ rows, tableType }) => {
  const columns = [...Object.keys(rows[0]), "Edit", "Delete"];
  console.log("COLUMNS:", columns);
  const renderTables = (tableType) => {
    switch (tableType) {
      case "users":
        return (
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
        );
      case "roles":
        return (
          <tbody>
            {rows.map(({ roleLabel, roleKey }, idx) => {
              return (
                <tr>
                  <td>{roleLabel}</td>
                  <td>{roleKey}</td>
                  <td>
                    <AiFillEdit className="cursor-pointer" />
                  </td>
                  <td>
                    <AiFillDelete className="cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        );

      default:
        return <p>No Data Found</p>;
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              {columns.map((column) => {
                return <th>{column}</th>;
              })}
            </tr>
          </thead>
          {/* map rows here */}
          {renderTables(tableType)}
        </table>
      </div>
    </div>
  );
};
export default Table;
