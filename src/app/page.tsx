import React from 'react';
import { Product } from './home/page';
import Home from './home/Home';
import { generateMetadata } from '@/utils/helper';

// Generate metadata for the page
export const metadata = generateMetadata('Trang chủ', 'Hoàng Liên mobile nơi chất lượng tạo nên uy tín');

async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fastcare.vn/api/services?slug=sua-chua-dien-thoai&problem_id=1');
    const data = await response.json();
    return data.items; // Giả định `data.items` chứa danh sách sản phẩm
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Page() {
  const products = await fetchProducts();

  return (
    <Home listProducts={products} />
  );
}
