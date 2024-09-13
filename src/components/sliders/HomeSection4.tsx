import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; // or your preferred image component

import CustomerImage1 from '../../assets/customers/customer1.jpg';
import CustomerImage2 from '../../assets/customers/customer2.jpg';
import CustomerImage3 from '../../assets/customers/customer3.jpg';
import CustomerImage4 from '../../assets/customers/customer4.jpg';
import CustomerImage5 from '../../assets/customers/customer5.jpg';
import CustomerImage6 from '../../assets/customers/customer6.jpg';

const Customers = [
  CustomerImage1,
  CustomerImage2,
  CustomerImage3,
  CustomerImage4,
  CustomerImage5,
  CustomerImage6,
];

const Section4 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleAutoScroll = () => {
      if (scrollRef.current) {
        scrollInterval.current = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({
              left: 1, // Adjust the scroll amount as needed
              behavior: 'smooth',
            });
          }
        }, 2); // Adjust the interval time as needed
      }
    };

    handleAutoScroll();

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, []);



  return (
    <div className="section4 bg-white flex flex-col p-4 gap-5 my-3 relative">
      <h1 className="text-gray-800 text-xl font-bold mb-4">
        Khách hàng đến với Hoàng Liên Mobile
      </h1>
      <div className="w-full flex overflow-x-auto scrollbar-hidden gap-2" ref={scrollRef}>
        {Customers.map((customerImage, index) => (
          <div key={index} className="border rounded flex-shrink-0">
            <Image
              src={customerImage.src}
              alt={`Customer of Hoàng Liên Mobile ${index + 1}`}
              width={300}
              height={100}
              className='h-full'
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Section4;
