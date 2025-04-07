import React from 'react';
import type { Product } from '../types/Product';


export interface ProductTableProps {
  filteredProducts: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ filteredProducts }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl">
      <table className="w-full text-left text-sm text-gray-700">
        <thead className="text-xs uppercase text-gray-500">
          <tr>
            <th className="h-12 text-left align-middle font-bold text-indigo-600 text-xl p-6">Name</th>
            <th className="h-12 text-left align-middle font-bold text-indigo-600 text-xl p-6">Strain</th>
            <th className="h-12 text-left align-middle font-bold text-indigo-600 text-xl p-6">Type</th>
            <th className="h-12 text-left align-middle font-bold text-indigo-600 text-xl p-6">THC</th>
            <th className="h-12 text-left align-middle font-bold text-indigo-600 text-xl p-6">CBD</th>
            <th className="h-12 text-left align-middle font-bold text-indigo-600 text-xl p-6">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 border border-gray-200 bg-white shadow-md">
          {filteredProducts.length === 0 ? (
            <tr className="transition-colors hover:bg-gray-50">
              <td colSpan={6} className="py-4 text-center text-gray-500">
                No products available now for this condition.
              </td>
            </tr>
          ) : (
            filteredProducts.map((product, index) => (
              <tr
                key={index}
                className="border-b data-[state=selected]:bg-muted transition-all duration-200 bg-blue-50/50 hover:bg-blue-50">
                <td className="font-medium p-6">{product.name}</td>
                <td className="p-6 text-lg">{product.strain}</td>
                <td className="p-6 text-lg">{product.type}</td>
                <td className="p-6 text-lg">{product.thc}</td>
                <td className="p-6 text-lg">{product.cbd}</td>
                <td className="p-6 text-lg">{product.price}</td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default ProductTable;
