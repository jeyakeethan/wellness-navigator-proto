export interface Product {
    name: string;
    recommendation: {
      concern: string[];
      age: number;
      gender: string[];
      height: number[];
      weight: number[];
      ethnicity: string[];
    };
    strain: string;
    type: string;
    thc: string;
    cbd: string;
    price: string;
  }
  