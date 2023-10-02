import React from "react";

import { Button } from "@components";
import { useUsersStore } from "@hooks";

type UsersTablePropTypes = {};

const UsersTable = ({}: UsersTablePropTypes) => {
  const allUsers = useUsersStore((state) => state.users);
  const removeUser = useUsersStore((state) => state.removeUser);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <Button
                onClick={() => removeUser(user.id)}
                className="bg-red-500 py-1.5 px-6 rounded-md text-white hover:bg-red-400 text-sm"
                content="Sil"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
