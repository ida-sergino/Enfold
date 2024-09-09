import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <label
      htmlFor="text"
      className="label block text-sm font-medium leading-6 text-gray-900">
      {children}
    </label>
  );
};

export default Label;
