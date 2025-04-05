import React from 'react';

const Dropdown = React.memo(({ label, value, options, onChange, showLabel = true }) => (
  <div className="p-5 border-2 border-gray-300 rounded-xl shadow-lg text-lg">
    {showLabel && (<label htmlFor={label} className="block mb-4 text-xl font-medium text-gray-700">{label}</label>)}
    <select
      id={label}
      value={value}
      onChange={onChange}
      className="w-full h-full p-5 border-2 border-gray-100 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500"
    >
      <option value="">Select {label}</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>{option}</option>
      ))}
    </select>
  </div>
));

export default Dropdown;
