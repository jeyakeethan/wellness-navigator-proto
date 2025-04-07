import type { Product } from '../types/Product'

interface FilterInputs {
  ageRange: string;
  weight: number;
  height: number;
  gender: string;
  ethnicity: string;
  primaryConcern: string;
  secondaryConcern: string;
  thcLevel?: string;
  cbdLevel?: string;
  productType?: string;
  strain?: string;
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
    thcLevel,
    cbdLevel,
    productType,
    strain,
  }: {
    ageRange: string;
    weight: number;
    height: number;
    gender: string;
    ethnicity: string;
    primaryConcern: string;
    secondaryConcern: string;
    thcLevel?: string;
    cbdLevel?: string;
    productType?: string;
    strain?: string;
  }
): Product[] => {
  return products.filter(product => {
    const primaryConcernLower = primaryConcern.toLowerCase();
    const secondaryConcernLower = secondaryConcern.toLowerCase();
    const genderLower = gender.toLowerCase();
    const ethnicityLower = ethnicity.toLowerCase();
    const thcLower = thcLevel?.toLowerCase();
    const cbdLower = cbdLevel?.toLowerCase();
    const productTypeLower = productType?.toLowerCase();
    const strainLower = strain?.toLowerCase();

    const concernMatch =
      (!primaryConcern || product.recommendation.concern.some(c => c.toLowerCase().includes(primaryConcernLower))) &&
      (!secondaryConcern || product.recommendation.concern.some(c => c.toLowerCase().includes(secondaryConcernLower)));

    const genderMatch =
      !gender || product.recommendation.gender.some(g => g.toLowerCase().includes(genderLower));

    const ethnicityMatch =
      !ethnicity || product.recommendation.ethnicity.some(e => e.toLowerCase().includes(ethnicityLower));

    const ageMatch = !ageRange || (() => {
      const [minAge, maxAge] = ageRange.split('-').map(Number);
      return product.recommendation.age >= minAge && product.recommendation.age <= maxAge;
    })();

    const heightMatch = height >= product.recommendation.height[0] && height <= product.recommendation.height[1];
    const weightMatch = weight >= product.recommendation.weight[0] && weight <= product.recommendation.weight[1];

    const thcMatch = !thcLower || product.thc?.toLowerCase() === thcLower;
    const cbdMatch = !cbdLower || product.cbd?.toLowerCase() === cbdLower;
    const productTypeMatch = !productType || product.type.toLowerCase() === productTypeLower;
    const strainMatch = !strain || product.strain.toLowerCase() === strainLower;

    return (
      concernMatch &&
      genderMatch &&
      ethnicityMatch &&
      ageMatch &&
      heightMatch &&
      weightMatch &&
      thcMatch &&
      cbdMatch &&
      productTypeMatch &&
      strainMatch
    );
  });
};
