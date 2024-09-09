import React from "react";

function Input() {
  return (
    <input
      id="text"
      name="text"
      type="text"
      placeholder=" "
      className="block my-2 rounded-md border-0 py-2 pl-5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}

export default Input;
