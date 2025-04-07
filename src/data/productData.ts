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
      thc: '20%', 
      cbd: '1%', 
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
      thc: '21%', 
      cbd: '0.3%', 
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
      thc: '10%', 
      cbd: '10%', 
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
      thc: '18%', 
      cbd: '0.1%', 
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
      thc: '19%', 
      cbd: '0.2%', 
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
      thc: '22%', 
      cbd: '0.5%', 
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
      thc: '18%', 
      cbd: '1.5%', 
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
      thc: '23%', 
      cbd: '0.3%', 
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
      thc: '15%', 
      cbd: '0.7%', 
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
      thc: '20%', 
      cbd: '1%', 
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
      thc: '18%', 
      cbd: '2%', 
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
      thc: '21%', 
      cbd: '0.8%', 
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
      thc: '17%', 
      cbd: '1.2%', 
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
      thc: '19%', 
      cbd: '0.4%', 
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
      thc: '24%', 
      cbd: '0.3%', 
      price: '$34.50'
    }
];
