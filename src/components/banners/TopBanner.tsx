import Image from 'next/image';
import React from 'react';
import TopBannerImage from '../../assets/images/topBanner.png';
export default function TopBanner() {
  return (
    <div className='w-full'>
        <Image className='w-full' src={TopBannerImage} alt='Hoàng Liên Mobile Top banner sell and discount' />
    </div>
  )
}
