import type { Product } from "../types/Product";

export const productData: Product[] = [
  {
    name: 'Blue Dream',
    recommendation: {
      concern: ['Acne', 'Anxiety', 'Arthritis', 'chronicPain'],
      age: 34,
      gender: ['male', 'female'],
      height: [100, 180],
      weight: [50, 120],
      ethnicity: ['Caucasian', 'Hispanic', 'African']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '-'
  },
  {
    name: 'Green Crack',
    recommendation: {
      concern: ['Acne', 'depression', 'Anxiety', 'chronicPain', 'fatigue'],
      age: 25,
      gender: ['male'],
      height: [150, 200],
      weight: [60, 150],
      ethnicity: ['Caucasian', 'Other']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$29.99'
  },
  {
    name: 'Mango Tango Gummies',
    recommendation: {
      concern: ['Acne', 'depression', 'Arthritis', 'chronicPain', 'fatigue'],
      age: 40,
      gender: ['female'],
      height: [130, 170],
      weight: [45, 90],
      ethnicity: ['Asian', 'Other']
    },
    strain: 'Hybrid',
    type: 'Edibles',
    thc: 'Low',
    cbd: 'Medium',
    price: '$24.99'
  },
  {
    name: 'Northern Lights',
    recommendation: {
      concern: ['depression', 'Anxiety', 'Arthritis', 'chronicPain'],
      age: 50,
      gender: ['male', 'female'],
      height: [140, 185],
      weight: [50, 110],
      ethnicity: ['Hispanic', 'African', 'Caucasian']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '-'
  },
  {
    name: 'Purple Kush',
    recommendation: {
      concern: ['Arthritis', 'depression', 'Anxiety', 'chronicPain'],
      age: 60,
      gender: ['female'],
      height: [120, 160],
      weight: [50, 110],
      ethnicity: ['Caucasian', 'Other']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '-'
  },
  {
    name: 'Sour Diesel',
    recommendation: {
      concern: ['Acne', 'depression', 'Anxiety', 'fatigue'],
      age: 20,
      gender: ['male'],
      height: [100, 190],
      weight: [60, 100],
      ethnicity: ['Middle Eastern', 'Caucasian', 'Other']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$35.99'
  },
  {
    name: 'Lemon Skunk',
    recommendation: {
      concern: ['depression', 'Anxiety'],
      age: 33,
      gender: ['female'],
      height: [140, 175],
      weight: [50, 80],
      ethnicity: ['Asian', 'African', 'Caucasian']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$28.50'
  },
  {
    name: 'OG Kush',
    recommendation: {
      concern: ['Arthritis', 'chronicPain'],
      age: 50,
      gender: ['male'],
      height: [100, 190],
      weight: [70, 120],
      ethnicity: ['Caucasian', 'Other']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$32.00'
  },
  {
    name: 'White Widow',
    recommendation: {
      concern: ['Acne', 'Anxiety'],
      age: 22,
      gender: ['female'],
      height: [110, 180],
      weight: [45, 70],
      ethnicity: ['Hispanic', 'Caucasian']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Low',
    cbd: 'Low',
    price: '$19.99'
  },
  {
    name: 'Strawberry Cough',
    recommendation: {
      concern: ['depression', 'fatigue'],
      age: 40,
      gender: ['male'],
      height: [130, 185],
      weight: [60, 90],
      ethnicity: ['Caucasian', 'African']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$27.50'
  },
  {
    name: 'Pineapple Express',
    recommendation: {
      concern: ['chronicPain', 'Anxiety'],
      age: 28,
      gender: ['female'],
      height: [120, 175],
      weight: [50, 80],
      ethnicity: ['Hispanic', 'Other']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$31.99'
  },
  {
    name: 'Jack Herer',
    recommendation: {
      concern: ['Arthritis', 'Anxiety'],
      age: 35,
      gender: ['male', 'female'],
      height: [135, 180],
      weight: [60, 90],
      ethnicity: ['Caucasian', 'African', 'Other']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$26.99'
  },
  {
    name: 'Blue Cheese',
    recommendation: {
      concern: ['chronicPain', 'depression'],
      age: 45,
      gender: ['female'],
      height: [110, 190],
      weight: [60, 90],
      ethnicity: ['Middle Eastern', 'Other']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$30.00'
  },
  {
    name: 'Cheese Quake',
    recommendation: {
      concern: ['fatigue', 'depression'],
      age: 38,
      gender: ['male'],
      height: [150, 170],
      weight: [70, 110],
      ethnicity: ['Caucasian', 'African']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '$25.99'
  },
  {
    name: 'Durban Poison',
    recommendation: {
      concern: ['Anxiety', 'chronicPain'],
      age: 22,
      gender: ['female'],
      height: [155, 185],
      weight: [50, 75],
      ethnicity: ['African', 'Other']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$27.99'
  },
  {
    name: 'White Rhino',
    recommendation: {
      concern: ['Insomnia', 'Anxiety', 'chronicPain'],
      age: 28,
      gender: ['female'],
      height: [150, 185],
      weight: [50, 110],
      ethnicity: ['Caucasian', 'African']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$40.00'
  },
  {
    name: 'Super Lemon Haze',
    recommendation: {
      concern: ['Anxiety', 'Fatigue', 'Depression'],
      age: 30,
      gender: ['male', 'female'],
      height: [160, 200],
      weight: [60, 100],
      ethnicity: ['Caucasian', 'Hispanic']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$34.50'
  },
  {
    name: 'Grape Ape',
    recommendation: {
      concern: ['ChronicPain', 'Anxiety', 'Insomnia'],
      age: 38,
      gender: ['female'],
      height: [140, 180],
      weight: [45, 80],
      ethnicity: ['Caucasian', 'Other']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$26.99'
  },
  {
    name: 'Citrus Sap',
    recommendation: {
      concern: ['Depression', 'Fatigue', 'Stress'],
      age: 25,
      gender: ['male'],
      height: [150, 190],
      weight: [60, 120],
      ethnicity: ['Caucasian', 'Hispanic']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '$27.00'
  },
  {
    name: 'Tangie',
    recommendation: {
      concern: ['Depression', 'Stress', 'Fatigue'],
      age: 23,
      gender: ['female'],
      height: [140, 175],
      weight: [50, 70],
      ethnicity: ['Asian', 'Caucasian']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$25.50'
  },
  {
    name: 'Granddaddy Purple',
    recommendation: {
      concern: ['ChronicPain', 'Anxiety', 'Insomnia'],
      age: 40,
      gender: ['male', 'female'],
      height: [160, 200],
      weight: [60, 100],
      ethnicity: ['African', 'Hispanic']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'High',
    cbd: 'Medium',
    price: '$42.00'
  },
  {
    name: 'Girl Scout Cookies',
    recommendation: {
      concern: ['Anxiety', 'ChronicPain', 'Depression'],
      age: 35,
      gender: ['female'],
      height: [150, 180],
      weight: [50, 100],
      ethnicity: ['Caucasian', 'African']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '$30.00'
  },
  {
    name: 'Blueberry',
    recommendation: {
      concern: ['Anxiety', 'Insomnia', 'ChronicPain'],
      age: 32,
      gender: ['female'],
      height: [150, 175],
      weight: [50, 85],
      ethnicity: ['Caucasian', 'Hispanic']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'Low',
    cbd: 'High',
    price: '$28.00'
  },
  {
    name: 'Lemon OG',
    recommendation: {
      concern: ['Stress', 'Anxiety', 'Depression'],
      age: 40,
      gender: ['male'],
      height: [160, 190],
      weight: [60, 110],
      ethnicity: ['Caucasian', 'Other']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$30.99'
  },
  {
    name: 'Shark Shock',
    recommendation: {
      concern: ['Pain', 'Fatigue', 'Anxiety'],
      age: 26,
      gender: ['female'],
      height: [150, 180],
      weight: [50, 90],
      ethnicity: ['Middle Eastern', 'African']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$33.00'
  },
  {
    name: 'Purple Haze',
    recommendation: {
      concern: ['Fatigue', 'Anxiety', 'Depression'],
      age: 34,
      gender: ['male'],
      height: [155, 180],
      weight: [60, 100],
      ethnicity: ['Caucasian', 'African']
    },
    strain: 'Sativa',
    type: 'Flower',
    thc: 'High',
    cbd: 'Low',
    price: '$31.00'
  },
  {
    name: 'Cherry Pie',
    recommendation: {
      concern: ['Anxiety', 'ChronicPain', 'Insomnia'],
      age: 45,
      gender: ['female'],
      height: [140, 175],
      weight: [50, 90],
      ethnicity: ['Caucasian', 'Asian']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Low',
    price: '$27.50'
  },
  {
    name: 'Headband',
    recommendation: {
      concern: ['Pain', 'Fatigue', 'Anxiety'],
      age: 36,
      gender: ['male'],
      height: [160, 190],
      weight: [70, 120],
      ethnicity: ['Caucasian', 'African']
    },
    strain: 'Hybrid',
    type: 'Flower',
    thc: 'High',
    cbd: 'Medium',
    price: '$29.00'
  },
  {
    name: 'Runtz',
    recommendation: {
      concern: ['Anxiety', 'ChronicPain', 'Fatigue'],
      age: 27,
      gender: ['female'],
      height: [150, 180],
      weight: [55, 95],
      ethnicity: ['African', 'Hispanic']
    },
    strain: 'Indica',
    type: 'Flower',
    thc: 'Medium',
    cbd: 'Medium',
    price: '$31.50'
  },
];
