import React, { useState } from "react";
import { CircleAlert, CircleCheckBig, ChevronDown, Check } from "lucide-react";

interface FormInputFieldProps {
  placeholder?: string;
  value?: string;
  name: string;
  error?: boolean;
  errorName?: string;
  message?: string;
  icon?: React.ReactNode;
  inputValid?: boolean;
  options: string[];
  handleInputChange: (value: string) => void;
}

const SelectInputField = ({
  placeholder,
  value,
  name,
  handleInputChange,
  error = false,
  message,
  errorName,
  inputValid = false,
  options,
}: FormInputFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    value
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleInputChange(option);
  };

  return (
    <div className="relative">
      <label className="text-[1.1rem] mb-2 font-inter font-semibold text-gray-500">
        {name}
      </label>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full font-inter bg-white p-3 border rounded-md flex items-center justify-between
            ${
              error && errorName === name
                ? "border-red-500 text-red-500"
                : "border-gray-300"
            } focus:outline-none transition-all duration-300`}
        >
          <span className={selectedOption ? "text-black" : "text-gray-500"}>
            {selectedOption || `${placeholder}`}
          </span>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 w-full mt-1 bg-white 
                       border border-gray-300 rounded-md shadow-lg 
                       max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer 
                           hover:bg-blue-50 
                           flex items-center justify-between
                           transition-colors duration-200"
              >
                <span>{option}</span>
                {selectedOption === option && (
                  <Check className="w-5 h-5 text-primary-400" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

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

export default SelectInputField;
