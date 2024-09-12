"use client";
import React, { useState } from "react";
import HomeRightBanner from "@/components/banners/HomeRightBanner";
import HomeSlider from "@/components/sliders/HomeSlider";
import SliderImage1 from "../../assets/images/Hoàng Liên Mobile store image 1.png";
import SliderImage2 from "../../assets/images/Hoàng Liên Mobile store image 2.png";
import SliderImage3 from "../../assets/images/Hoàng Liên Mobile store image 3.png";
import PhoneCompanyImage1 from "../../assets/images/phoneCompanyImges/apple company.png";
import PhoneCompanyImage2 from "../../assets/images/phoneCompanyImges/appo company.png";
import PhoneCompanyImage3 from "../../assets/images/phoneCompanyImges/huaway company.png";
import PhoneCompanyImage4 from "../../assets/images/phoneCompanyImges/samsung company.png";
import PhoneCompanyImage5 from "../../assets/images/phoneCompanyImges/sony company.png";
import PhoneCompanyImage6 from "../../assets/images/phoneCompanyImges/vivo company.png";
import PhoneCompanyImage7 from "../../assets/images/phoneCompanyImges/xiaomi company.png";
import PhoneCompanyCard from "@/components/card/PhoneCompanyCard";
import ProductCard from "@/components/card/ProductCard";
import { Product } from "./page";
import Image from "next/image";
import PhonWarranty from "../../assets/images/Hoàng Liên Mobile bảo hành.png";
import AccessoryImage1 from "../../assets/icons/AccessoryImage1.png";
import AccessoryImage2 from "../../assets/icons/AccessoryImage2.png";
import AccessoryImage3 from "../../assets/icons/AccessoryImage3.png";
import AccessoryImage4 from "../../assets/icons/AccessoryImage4.png";
import AccessoryImage5 from "../../assets/icons/AccessoryImage5.png";
import AccessoryImage6 from "../../assets/icons/AccessoryImage6.png";
import Section4 from "@/components/sliders/HomeSection4";

const Accessories = [
  { src: AccessoryImage1, title: "Dán màn hình" },
  { src: AccessoryImage2, title: "Ốp lưng" },
  { src: AccessoryImage3, title: "Sạc dự phòng" },
  { src: AccessoryImage4, title: "Sạc cáp" },
  { src: AccessoryImage5, title: "Tai nghe" },
  { src: AccessoryImage6, title: "Thẻ nhớ" },
];

interface HomeProps {
  listProducts: Product[];
}

const images = [
  { src: SliderImage1.src, caption: "First Slide" },
  { src: SliderImage2.src, caption: "Second Slide" },
  { src: SliderImage3.src, caption: "Third Slide" },
];

const phoneCompanies = [
  { image: PhoneCompanyImage1.src, name: "Iphone" },
  { image: PhoneCompanyImage2.src, name: "Oppo" },
  { image: PhoneCompanyImage3.src, name: "Huawei" },
  { image: PhoneCompanyImage4.src, name: "Samsung" },
  { image: PhoneCompanyImage5.src, name: "Sony" },
  { image: PhoneCompanyImage6.src, name: "Vivo" },
  { image: PhoneCompanyImage7.src, name: "Xiaomi" },
];

const TypesOfCorrectionsPhones: string[] = [
  "Màn hình",
  "Mặt kính",
  "Chai pin",
  "Camera",
  "Loa",
  "Vỏ/nắp lưng",
  "Lỗi main",
  "Sạc không vào",
  "Sóng yếu",
  "Thay pin",
  "Sim",
  "Lỗi nguồn",
  "Mic thoại",
  "Lỗi wifi",
  "Khác",
];

export default function Home({ listProducts }: HomeProps) {
  const [activeType, setActiveType] = useState<string>(
    TypesOfCorrectionsPhones[0]
  );
  const [products, setProducts] = useState<Product[]>(listProducts);
  console.log(products);

  const getIdTypeOfProduct = (type: string) => {
    const typeMapping: { [key: string]: number } = {
      "Màn hình": 1,
      Camera: 2,
      "Chai pin": 3,
      "Vỏ/nắp lưng": 4,
      Loa: 5,
      "Mic thoại": 7,
      "Lỗi main": 8,
      "Sạc không vào": 9,
      "Sóng yếu": 10,
      Sim: 11,
      "Lỗi nguồn": 12,
      "Lỗi wifi": 13,
      Khác: 6,
      "Mặt kính": 21,
    };

    return typeMapping[type] || 1; // Default to 1 if type is not found
  };

  const handleActiveAndFilter = async (currentType: string) => {
    const baseUrl =
      "https://fastcare.vn/api/services?slug=sua-chua-dien-thoai&problem_id=";
    const type = getIdTypeOfProduct(currentType);
    setActiveType(currentType);

    try {
      const response = await fetch(baseUrl + type);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data.items || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]); // Clear products on error
    }
  };

  return (
    <main className="bg-gray-100">
      <div className="section1 bg-orange-400 flex">
        <div className="">
          <HomeSlider
            size={{ width: 1029, height: 200 }} // Customize the size
            listImage={images} // Pass the list of images
            slideDuration={2000}
          />
        </div>
        <div className="">
          <HomeRightBanner />
        </div>
      </div>
      <div className="section2 bg-gray-100 flex flex-col h-auto m-1 p-4">
        <h1 className="text-gray-800 text-xl font-bold mb-4">
          Các dòng máy sửa chữa
        </h1>
        <div className="scroll-container">
          {phoneCompanies.map((company, index) => (
            <PhoneCompanyCard
              key={index}
              image={company.image}
              name={company.name}
            />
          ))}
        </div>
      </div>
      <div className="section2 bg-white flex flex-col h-auto m-1 p-4">
        <h1 className="text-gray-800 text-xl font-bold mb-4">Sửa điện thoại</h1>
        <div className="flex justify-start items-center gap-3 flex-wrap">
          {TypesOfCorrectionsPhones.map((item, index) => (
            <input
              type="button"
              value={item}
              onClick={() => handleActiveAndFilter(item)}
              key={index}
              className={`${
                activeType === item
                  ? "border-orange-500 text-white bg-orange-500"
                  : ""
              } border text-black border-gray-400 p-2 text-sm rounded hover:border-orange-500 cursor-pointer hover:text-orange-500`}
            />
          ))}
        </div>
        <div className="my-4">
          <div className="section2 bg-white flex flex-col h-auto">
            <div className="flex justify-between items-center gap-2 py-5 flex-wrap">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image || ""}
                  serviceName={product.name}
                  price={
                    product.reguler_price
                      ? `${product.reguler_price} VNĐ`
                      : "Liên hệ"
                  }
                  technicianName={
                    product.warranty_policy || "Nguyễn Hoàng Liên"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-gray-800 text-xl font-bold mb-4 ml-5">
        Phụ kiện chính hãng
      </h1>
      <div className="section3 bg-transparent flex flex-col sm:flex-row h-auto m-1 p-4 justify-between items-center gap-5">
        <div className="w-full sm:w-2/3">
          <div className="flex flex-wrap gap-2 w-full justify-between">
            {Accessories.map((accessory) => (
              <div
                key={accessory.title}
                className="flex flex-col w-full sm:w-32 bg-white rounded transition-transform transform hover:scale-105 p-1 items-center"
              >
                <Image
                  src={accessory.src}
                  alt={accessory.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <p className="mt-2 text-center">{accessory.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <Image
            src={PhonWarranty.src}
            alt="Hoàng Liên mobile accessory"
            width={700}
            height={200}
            className="rounded shadow-md transition-transform transform hover:scale-103"
          />
        </div>
      </div>

      <Section4 />
    </main>
  );
}
