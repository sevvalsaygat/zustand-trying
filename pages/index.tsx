import React from "react";

import { useForm } from "react-hook-form";

import { Button, Form, UsersTable } from "@components";

export default function Home() {
  const { control } = useForm();

  return (
    <div className="flex flex-col p-36 gap-10">
      <div className="flex flex-row justify-center gap-4">
        <div>
          <Form.Input
            label="Name"
            name="name"
            placeholder="Enter user name"
            control={control}
          />
        </div>
        <div className="flex justify-center items-end">
          <Button
            className="bg-green-500 hover:bg-green-400 text-white rounded-md w-fit py-2 px-6 text-sm"
            content="Add User"
          />
        </div>
      </div>
      <hr className="border-1 border-gray-200" />
      <div className="flex justify-center">
        <UsersTable />
      </div>
    </div>
  );
}
