// page.tsx (hoặc page.jsx nếu không sử dụng TypeScript)

import React from 'react';
import Home from './Home';
import { generateMetadata } from '@/utils/helper';

// Định nghĩa interface cho dữ liệu sản phẩm
export interface Product {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  image?: string;
  reguler_price?: number;
  sale_price?: number;
  price_code?: string;
  sprice_code?: string;
  commitment?: string;
  info_sale?: string;
  price_table?: string;
  info?: string;
  warranty_policy?: string;
  repair_time?: string;
  insurance?: string;
  related_products?: string;
  image_repair?: string;
  video_repair?: string;
  video_image?: string;
  accessories?: string;
  related_services?: string;
  related_posts?: string;
  is_new?: boolean;
  link_banner_cate?: string;
  breadcrumb?: string;
  status?: boolean;
  created_at?: string;
  url_services?: string;
  url_posts?: string;
  price_detail?: {
    price: string;
    sale: string;
    percent: string;
    no_price: number;
    no_sale: number;
  };
}

export const metadata = generateMetadata('Trang chủ', 'Hoàng Liên mobile nơi chất lượng tạo nên uy tín');


async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fastcare.vn/api/services?slug=sua-chua-dien-thoai&problem_id=4');
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
