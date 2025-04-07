import React from 'react';
import type { Product } from '../types/Product';


export interface ProductTableProps {
  filteredProducts: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ filteredProducts }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
      <table className="w-full text-left text-sm text-gray-700">
        <thead className="bg-gray-100 text-xs uppercase text-gray-500">
          <tr>
            <th className="px-6 py-4 font-semibold">Name</th>
            <th className="px-6 py-4 font-semibold">Recommendation</th>
            <th className="px-6 py-4 font-semibold">Strain</th>
            <th className="px-6 py-4 font-semibold">Type</th>
            <th className="px-6 py-4 font-semibold">THC</th>
            <th className="px-6 py-4 font-semibold">CBD</th>
            <th className="px-6 py-4 font-semibold">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredProducts.map((product, index) => (
            <tr
              key={index}
              className="transition-colors hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4">{product.strain}</td>
              <td className="px-6 py-4">{product.type}</td>
              <td className="px-6 py-4">{product.thc}</td>
              <td className="px-6 py-4">{product.cbd}</td>
              <td className="px-6 py-4">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
