import React from "react";
import { CircleAlert, CircleCheckBig } from "lucide-react";

interface AuthFormInputFieldProps {
  placeholder?: string;
  value?: string;
  name: string;
  error?: boolean;
  errorName?: string;
  message?: string;
  icon?: React.ReactNode;
  inputValid?: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField = ({
  placeholder,
  value,
  name,
  handleInputChange,
  error = false,
  message,
  errorName,
  inputValid = false,
}: AuthFormInputFieldProps) => {
  return (
    <div>
      <label className="text-[1.1rem] mb-2 font-inter font-semibold text-gray-500">
        {name}
      </label>
      <input
        className={`w-full font-inter p-3 border border-gray-300 rounded-md  ${
          error && errorName === name
            ? "active:border-red-500 focus:border-red-500 border-red-500"
            : "active:border-black focus:border-black"
        } focus:outline-none  transition-all duration-300`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleInputChange}
      />
      {error && errorName === name && (
        <div className="flex items-center font-medium mt-2 text-red-500 animate-fade">
          <CircleAlert size={16} />
          <span className="ml-2 text-sm">{message}</span>
        </div>
      )}
      {inputValid && (
        <div className="flex items-center mt-2 text-green-500 animate-fade">
          <CircleCheckBig size={16} />
          <span className="ml-2 text-sm">Success</span>
        </div>
      )}
    </div>
  );
};

export default FormInputField;
