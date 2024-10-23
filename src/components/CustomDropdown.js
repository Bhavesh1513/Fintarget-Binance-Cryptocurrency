import React from 'react';

const CustomDropdown = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <label className="block text-lg font-medium text-gray-300 mb-2 text-center">{label}</label>
      <select
        value={selectedValue}
        onChange={onChange}
        className="p-3 w-full bg-gray-700 text-white border border-gray-600 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-pink-500"
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
