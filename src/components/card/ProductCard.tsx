import React from 'react';
import Image from 'next/image';
interface ProductCardProps {
  image: string;
  serviceName: string;
  price: string;
  technicianName: string; // Tên nhân viên
}
const ProductCard: React.FC<ProductCardProps> = ({ image, serviceName, price, technicianName }) => {
  return (
    <div className="rounded-lg mb-5 h-80 sm:h-96 sm:w-[280px] w-[170px] p-4 bg-gray-100 cursor-pointer transition-transform transform hover:scale-105">
      <Image
        src={image}
        alt={serviceName}
        width={100}
        height={200}
        className='w-full'
      />
      <h3 className="text-base text-gray-800">{serviceName}</h3>
      <p className="text-lg font-semibold text-orange-500 mt-2">{price}</p>
      <p className="text-gray-600 mt-1 align-bottom"> {technicianName}</p>
    </div>
  );
};
export default ProductCard;
