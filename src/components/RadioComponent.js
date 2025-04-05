import React, { useState } from 'react';

// RadioComponent: A reusable component for radio buttons
const RadioComponent = React.memo(({ value, onChange, options, label }) => (
  <div className="p-6 border-2 border-gray-300 rounded-xl shadow-lg">
    <div role="group" dir="ltr" className="flex flex-wrap items-center justify-start gap-4 mt-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-checked={value === option ? 'true' : 'false'}
          role="radio"
          className={`inline-flex flex-grow items-center justify-center rounded-md font-medium transition-all duration-200 px-6 py-3
            ${value === option ? 'bg-blue-500 text-white text-accent-foreground border-2 border-accent' : 'bg-transparent text-lg h-14 border-2 border-transparent'}`}
          onClick={() => onChange({ target: { value: option } })}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
));

export default RadioComponent;
