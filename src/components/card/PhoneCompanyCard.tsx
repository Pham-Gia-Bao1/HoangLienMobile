import Image from 'next/image';
import React from 'react';

interface PhoneCompanyCardProps {
  image: string;
  name: string;
}

const PhoneCompanyCard: React.FC<PhoneCompanyCardProps> = ({ image, name }) => {
  return (
    <div className=" rounded-lg p-3 bg-white text-center  primaryShadow cursor-pointer min-w-24 sm:w-24 h-28 m-2 transition-transform transform hover:scale-105">
      <Image src={image} alt={name} width={200}height={100} className=" rounded-md" />
      <h3 className="mt-2 text-sm font-bold">{name}</h3>
    </div>
  );
};

export default PhoneCompanyCard;
