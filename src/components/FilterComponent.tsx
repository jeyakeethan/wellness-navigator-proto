import React from 'react';

type FilterProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

const FilterComponent: React.FC<FilterProps> = ({ label, value, onChange, options }) => {
  const clearText = `Clear ${label}`;
  const selectText = `Select ${label}`;

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border bg-white rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-100"
      >
        {value && <option value="">{clearText}</option>}
        {!value && <option value="">{selectText}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
