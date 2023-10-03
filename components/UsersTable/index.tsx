import React from "react";

import { Button } from "@components";
import { useUsersStore } from "@hooks";

type UsersTablePropTypes = {};

const UsersTable = ({}: UsersTablePropTypes) => {
  const allUsers = useUsersStore((state) => state.users);
  const removeUser = useUsersStore((state) => state.removeUser);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-80 text-sm text-left text-gray-500 border ">
        <thead className="text-xss text-gray-500 uppercase bg-gray-50 dark:bg-gray-400">
          <tr>
            <th className="py-3 px-6 font-sans text-white">Name</th>
            <th className="py-3 px-6 font-sans text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id} className="dark:border-gray-500 text-gray-500">
              <td className="border-b py-4 px-6 font-medium whitespace-nowrap font-sans">
                {user.name}
              </td>
              <td className="pl-5 border-b">
                <Button
                  onClick={() => removeUser(user.id)}
                  className="bg-red-500 text-xs hover:bg-red-400 text-white hover:text-white py-1 px-5 border border-red-700 hover:border-transparent rounded font-sans"
                  content="Sil"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
