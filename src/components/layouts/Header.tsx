'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import Logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for menu toggle

  const isActive = (path: string) => pathname === path;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div className="bg-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={Logo} alt="Hoàng Liên mobile logo" width={70} height={70} />
          </Link>
        </div>

        {/* NavBar for Large Screens */}
        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/">
            <p className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Trang Chủ
              <span className="nav-underline"></span>
            </p>
          </Link>
          <Link href="/services">
            <p className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Dịch Vụ
              <span className="nav-underline"></span>
            </p>
          </Link>
          <Link href="/pricing">
            <p className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
              Giá Cả
              <span className="nav-underline"></span>
            </p>
          </Link>
          <Link href="/about">
            <p className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              Giới Thiệu
              <span className="nav-underline"></span>
            </p>
          </Link>
          <Link href="/store">
            <p className={`nav-link ${isActive('/store') ? 'active' : ''}`}>
              Cửa Hàng
              <span className="nav-underline"></span>
            </p>
          </Link>
          <Link href="/contact">
            <p className={`nav-link bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 ${isActive('/contact') ? 'active' : ''}`}>
              Liên Hệ
            </p>
          </Link>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle between icons */}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-28 mt-2 w-full z-10">
          <nav className="flex flex-col space-y-4 px-5 py-3 ">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <p className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Trang Chủ
              </p>
            </Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
              <p className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                Dịch Vụ
              </p>
            </Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
              <p className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
                Giá Cả
              </p>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              <p className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                Giới Thiệu
              </p>
            </Link>
            <Link href="/store" onClick={() => setIsMenuOpen(false)}>
              <p className={`nav-link ${isActive('/store') ? 'active' : ''}`}>
                Cửa Hàng
              </p>
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <p className={`nav-link bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 ${isActive('/contact') ? 'active' : ''}`}>
                Liên Hệ
              </p>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
