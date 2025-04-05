import React from 'react';

const Slider = React.memo(({ label, value, min, max, onChange }) => (
    <div className="p-6">
      <label className="block mb-8 text-2xl font-medium text-black">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full block h-5 bg-blue-500 border-white rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      />
    </div>
  ));
  
  export default Slider;
  