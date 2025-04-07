import type { Product } from '../types/Product'

interface FilterInputs {
  ageRange: string;
  weight: number;
  height: number;
  gender: string;
  ethnicity: string;
  primaryConcern: string;
  secondaryConcern: string;
}

export const filterProducts = (
  products: Product[],
  {
    ageRange,
    weight,
    height,
    gender,
    ethnicity,
    primaryConcern,
    secondaryConcern,
  }: FilterInputs
): Product[] => {
  return products.filter(product => {
    // Convert concern, gender, and ethnicity to lowercase for case-insensitive matching
    const primaryConcernLower = primaryConcern.toLowerCase();
    const secondaryConcernLower = secondaryConcern.toLowerCase();
    const genderLower = gender.toLowerCase();
    const ethnicityLower = ethnicity.toLowerCase();

    // Concern match (case-insensitive)
    const concernMatch =
      (primaryConcern === '' || product.recommendation.concern.some(concern => concern.toLowerCase().includes(primaryConcernLower))) &&
      (secondaryConcern === '' || product.recommendation.concern.some(concern => concern.toLowerCase().includes(secondaryConcernLower)));

    // Gender match (case-insensitive)
    const genderMatch =
      (gender === '' || product.recommendation.gender.some(g => g.toLowerCase().includes(genderLower)));

    // Ethnicity match (case-insensitive)
    const ethnicityMatch =
      (ethnicity === '' || product.recommendation.ethnicity.some(e => e.toLowerCase().includes(ethnicityLower)));

    // Age range match: Split the age range into min and max values
    const ageMatch = ageRange === '' || (() => {
      const [minAge, maxAge] = ageRange.split('-').map(Number);
      return product.recommendation.age >= minAge && product.recommendation.age <= maxAge;
    })();

    // Height match: Check if the height is within the product's height range
    const heightMatch = height >= product.recommendation.height[0] && height <= product.recommendation.height[1];

    // Weight match: Check if the weight is within the product's weight range
    const weightMatch =
      weight >= product.recommendation.weight[0] && weight <= product.recommendation.weight[1];

    return concernMatch && genderMatch && ethnicityMatch && ageMatch && heightMatch && weightMatch;
  });
};
