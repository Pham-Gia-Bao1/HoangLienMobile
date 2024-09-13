import Image from 'next/image';
import React from 'react';
import Services1 from '../../assets/services/thay mic samsung.png';
import Services2 from '../../assets/services/thay màn hình ip.png';
import Services3 from '../../assets/services/thay mặt kính ip.png';
import Services4 from '../../assets/services/thay pin ip.png';
import Services5 from '../../assets/services/thay rung samsung.png';
interface ServiceItemProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  warranty: string;
  repairTime: string;
}
const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, price, imageSrc, warranty, repairTime }) => (
  <div className=" w-full p-4">
    <div className="border rounded-lg max-h-[600px] shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image height={300} src={imageSrc} alt={title} width={500} className=" object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <p className="text-red-500 font-semibold mt-2">{price}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{warranty}</span>
          <span className="text-sm text-gray-500">{repairTime}</span>
        </div>
      </div>
    </div>
  </div>
);
const Services = () => {
  const servicesData = [
    { title: 'Thay rung Samsung S22 Plus', description: 'Thay rung Samsung S22 Plus', price: '300.000đ', imageSrc: Services5.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay rung Samsung S22 Plus', description: 'Thay rung Samsung S22 Plus', price: '300.000đ', imageSrc: Services5.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay rung Samsung S22 Plus', description: 'Thay rung Samsung S22 Plus', price: '300.000đ', imageSrc: Services5.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay rung Samsung S22 Plus', description: 'Thay rung Samsung S22 Plus', price: '300.000đ', imageSrc: Services5.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay rung Samsung S22 Plus', description: 'Thay rung Samsung S22 Plus', price: '300.000đ', imageSrc: Services5.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay pin iPhone 11', description: 'Thay pin iPhone 16', price: 'Liên hệ', imageSrc: Services1.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay mặt kính iPhone 11', description: 'Thay mặt kính iPhone 16', price: 'Liên hệ', imageSrc: Services2.src, warranty: 'BH: Rơi Vỡ', repairTime: 'Sửa: 45 Phút' },
    { title: 'Thay màn hình iPhone 11', description: 'Thay màn hình iPhone 16', price: 'Liên hệ', imageSrc: Services3.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
    { title: 'Thay mic Samsung S22 Plus', description: 'Thay mic Samsung S22 Plus', price: '640.000đ', imageSrc: Services4.src, warranty: 'BH: 12 Tháng', repairTime: 'Trong Ngày' },
    { title: 'Thay rung Samsung S22 Plus', description: 'Thay rung Samsung S22 Plus', price: '300.000đ', imageSrc: Services5.src, warranty: 'BH: 12 Tháng', repairTime: 'Sửa: 15 Phút' },
  ];
  return (
    <div className="flex">
      {/* Filter Sidebar */}
      <div className="w-1/4 p-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Bộ lọc</h3>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium">Chọn hãng</label>
            <select id="brand" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Chọn hãng</option>
              <option>Apple</option>
              <option>Samsung</option>
            </select>
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium">Chọn dòng máy</label>
            <select id="model" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Chọn dòng máy</option>
            </select>
          </div>
        </div>
      </div>
      {/* Services List */}
      <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            imageSrc={service.imageSrc}
            warranty={service.warranty}
            repairTime={service.repairTime}
          />
        ))}
      </div>
    </div>
  );
};
export default Services;
