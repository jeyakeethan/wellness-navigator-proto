import React, { useState } from 'react';
import Dropdown from './DropdownComponent';
import RadioComponent from './RadioComponent';
import Slider from './SliderComponent';

const NavigationComponent = () => {
  const [ageRange, setAgeRange] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(70); // Weight slider
  const [height, setHeight] = useState(170); // Height slider
  const [primaryConcern, setPrimaryConcern] = useState('');
  const [secondaryConcern, setSecondaryConcern] = useState('');

  const ageOptions = ['18-24', '25-34', '35-44', '45-54', '55+'];
  const ethnicityOptions = ['Asian', 'Caucasian', 'African', 'Hispanic', 'Other'];
  const genderOptions = ['Male', 'Female', 'Other'];
  const concernOptions = ['Acne', 'Anxiety', 'Arthritis', 'chronicPain', 'depression', 'fatique'];

  return (
    <>
      <div className="container mx-auto mt-32 rounded-lg border bg-card text-card-foreground shadow-sm p-6 mb-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-left text-black mb-10">Client Demographic</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* First Column: Selection Lists */}
          <div className="flex-1 space-y-8">
            {/* Age Range Dropdown */}
            <Dropdown
              label="Select Age Range"
              value={ageRange}
              options={ageOptions}
              onChange={(e) => setAgeRange(e.target.value)}
              showLabel={false}
            />

            {/* Ethnicity Dropdown */}
            <Dropdown
              label="Select Ethnicity"
              value={ethnicity}
              options={ethnicityOptions}
              onChange={(e) => setEthnicity(e.target.value)}
              showLabel={false}
            />

            {/* Gender Radio Buttons */}
            <RadioComponent
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={genderOptions}
              label="Gender"
            />
          </div>

          {/* Second Column: Sliders */}
          <div className="flex-1 space-y-8">
            {/* Weight Slider */}
            <Slider
              label={`Weight: ${weight} kg`}
              value={weight}
              min={40}
              max={150}
              onChange={(e) => setWeight(e.target.value)}
            />

            {/* Height Slider */}
            <Slider
              label={`Height: ${height} cm`}
              value={height}
              min={120}
              max={220}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32 rounded-lg border bg-card text-card-foreground shadow-sm p-6 mb-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-left text-black mb-10">Wellness Information</h2>
        <div className="flex flex-col w-full gap-8">
          <div className="flex-1 space-y-8">
            {/* Primary Concern Dropdown */}
            <Dropdown
              label="Primary Concern *"
              value={primaryConcern}
              options={concernOptions}
              onChange={(e) => setPrimaryConcern(e.target.value)}
            />
          </div>

          <div className="flex-1 space-y-8">
            {/* Secondary Concern Dropdown */}
            <Dropdown
              label="Secondary Concern *"
              value={secondaryConcern}
              options={concernOptions}
              onChange={(e) => setSecondaryConcern(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationComponent;
