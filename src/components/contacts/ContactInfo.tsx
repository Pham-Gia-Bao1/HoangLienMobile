import React from 'react';
import IconZalo from '../../assets/icons/IconZalo.png';
import IconMessenger from '../../assets/icons/IconMessenger.png';
import IconPhone from '../../assets/icons/IconPhone.png';
import Image from 'next/image';

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-end bg-transparent space-y-6">

      {/* Zalo Icon */}
      <a
        href="https://zalo.me/your-zalo-id" // Replace with actual Zalo link
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full cursor-pointer"
      >
        <Image width={50} height={50} src={IconZalo.src} alt="Icon zalo" className='rounded-full' />
      </a>

      {/* Messenger Icon */}
      <a
        href="https://m.me/your-facebook-id" // Replace with actual Messenger link
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer rounded-full"
      >
        <Image width={50} height={50} src={IconMessenger.src} alt="Icon Messenger" className='rounded-full' />
      </a>

      {/* Phone Icon */}
      <a
        href="tel:+0799068978" // Replace with actual phone number
        className="flex items-center space-x-4 p-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out cursor-pointer"
      >
        <Image width={50} height={50} src={IconPhone.src} alt="Icon phone" />
        <p className="text-lg font-semibold">0799068978</p>
      </a>
    </div>
  );
}
