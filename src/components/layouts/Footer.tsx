import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../assets/images/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">

        {/* Thông Tin Cửa Hàng */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Thông Tin Cửa Hàng</h3>
          <p className="text-gray-400">Địa chỉ: Thôn 1 Thanh Sen - Phúc Trạch - Bố Trạch - Quảng Bình</p>
          <p className="text-gray-400">Điện thoại: (123) 456-7890</p>
          <p className="text-gray-400">Email: lienhoang@gmail.com</p>
          <Image src={Logo} alt='Hoàng Liên mobile logo' width={150} height={150}/>
        </div>

        {/* Liên Kết Nhanh */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Liên Kết Nhanh</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Trang Chủ</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">Dịch Vụ</Link></li>
            <li><Link href="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">Giá Cả</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">Giới Thiệu</Link></li>
            <li><Link href="/store" className="text-gray-400 hover:text-orange-500 transition-colors">Cửa Hàng</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Liên Hệ</Link></li>
          </ul>
        </div>

        {/* Theo Dõi Chúng Tôi */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Theo Dõi Chúng Tôi</h3>
          <div className="space-y-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">Facebook</a><br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">Instagram</a><br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">Twitter</a>
          </div>
        </div>

        {/* Đăng Ký Nhận Tin */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Đăng Ký Nhận Tin</h3>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="w-full p-2 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          <button className="w-full bg-orange-300 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition-colors">
            Đăng Ký
          </button>
        </div>

      </div>

      <div className="bg-orange-300 py-4 mt-10">
        <p className="text-center text-gray-600">© 2024 Cửa Hàng Sửa Chữa Điện Thoại Hoàng Liên Mobile. Chất Lượng tạo nên Uy tín</p>
      </div>
    </footer>
  );
};

export default Footer;
