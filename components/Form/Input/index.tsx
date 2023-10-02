import React from "react";

import { Control, Controller, RegisterOptions } from "react-hook-form";

type InputPropTypes = {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  control: Control<any>;
  rules?: Omit<
    RegisterOptions<any, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  control,
  rules,
}: InputPropTypes) => {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field }) => (
        <div className="sm:col-span-4">
          {label && (
            <label className="block text-sm font-medium leading-6 text-gray-900">
              {label}
            </label>
          )}
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
              <input
                {...field}
                type={type}
                className="block rounded-md flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={placeholder}
              />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Input;
