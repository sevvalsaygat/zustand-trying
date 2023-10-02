import React from "react";

import { Button } from "@components";

type UsersTablePropTypes = {};

const UsersTable = ({}: UsersTablePropTypes) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test Name</td>
          <td>
            <Button
              className="bg-red-500 py-1.5 px-6 rounded-md text-white hover:bg-red-400 text-sm"
              content="Sil"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
