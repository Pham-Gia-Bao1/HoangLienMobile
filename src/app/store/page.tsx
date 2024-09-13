// components/Store.tsx
import Image from "next/image";
import React from "react";
import SubImage3 from "../../assets/images/Hoàng Liên Mobile store image 3.jpg";
import SubImage4 from "../../assets/images/Hoàng Liên Mobile store image 4.jpg";
import SubImage5 from "../../assets/images/Hoàng Liên Mobile store image 5.jpg";
import { generateMetadata } from "@/utils/helper";

export const metadata = generateMetadata('Cửa hàng', 'Hoàng Liên mobile nơi cung cấp các dịch vụ sửa chữa uy tín và chất lượng');

const Store = () => {
  // Danh sách ảnh về cửa hàng
  const images = [SubImage4, SubImage5, SubImage3, SubImage4, SubImage5];
  // Danh sách đánh giá của khách hàng
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Thi Lan Anh",
      rating: 5,
      comment: "Dịch vụ sửa chữa nhanh chóng và chất lượng!",
    },
    {
      id: 2,
      name: "Hằng Nga",
      rating: 4,
      comment: "Thái độ phục vụ tốt, nhưng thời gian chờ hơi lâu.",
    },
    {
      id: 3,
      name: "Anh Tài",
      rating: 5,
      comment: "Rất hài lòng với dịch vụ ở đây!",
    },
  ];
  return (
    <div className="container mx-auto my-8 p-6 rounded-lg shadow-lg bg-white">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Quán Sửa Chữa Điện Thoại
      </h1>
      <h2 className="text-3xl font-semibold text-center mb-2 text-orange-500">
        Hoàng Liên Mobile
      </h2>
      <p className="text-center text-gray-700 mb-4">
        Địa chỉ: Thôn 1, Thanh Sen, Phúc Trạch, Bố Trạch, Quảng Bình
      </p>
      <p className="text-center text-gray-600 mb-4">
        Chúng tôi chuyên cung cấp dịch vụ sửa chữa điện thoại với đội ngũ kỹ
        thuật viên chuyên nghiệp, nhanh chóng và tận tâm. Đến với chúng tôi, bạn
        sẽ nhận được dịch vụ tốt nhất với giá cả hợp lý.
      </p>
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Dịch Vụ Chúng Tôi Cung Cấp:
      </h3>
      <div className=" flex justify-center flex-wrap">
        <p className="text-black bg-orange-200 p-2 m-2">Sửa chữa màn hình</p>
        <p className="text-black bg-orange-200 p-2 m-2">Thay pin</p>
        <p className="text-black bg-orange-200 p-2 m-2">
          Khắc phục lỗi phần mềm
        </p>
        <p className="text-black bg-orange-200 p-2 m-2">Vệ sinh điện thoại</p>
        <p className="text-black bg-orange-200 p-2 m-2">
          Cung cấp phụ kiện điện thoại
        </p>
      </div>
      <p className="text-center text-gray-700">
        Hãy đến với Hoàng Liên Mobile để trải nghiệm dịch vụ sửa chữa điện thoại
        tốt nhất!
      </p>
      {/* Phần danh sách ảnh */}
      <h3 className="text-2xl font-semibold mb-2 mt-6 text-blue-500">
        Hình Ảnh Cửa Hàng:
      </h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 scroll-container">
          {images.map((image, index) => (
            <div key={index} className="">
              <Image
                src={image}
                alt={`Hình ảnh ${index + 1}`}
                className="w-full h-52 rounded-lg shadow-lg"
                layout="responsive"
                width={200}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Phần đánh giá của khách hàng */}
      <h3 className="text-2xl font-semibold mb-2 mt-6 text-blue-500">
        Đánh Giá Khách Hàng:
      </h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4  rounded-lg  bg-gray-200 transition-shadow duration-300"
          >
            <h4 className="font-semibold text-blue-600">{review.name}</h4>
            <div className="text-yellow-500">
              {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
      {/* Nhúng Google Maps */}
      <h3 className="text-2xl font-semibold mb-2 mt-6 text-blue-500">
        Bản Đồ Địa Chỉ:
      </h3>
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.648382465308!2d106.260719!3d17.624825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314220d42936e7e7%3A0x75f36f703c56f43a!2zQ-G6o25nIMSQw6MgQ8O0bmcgR2nDqi4!5e0!3m2!1svi!2s!4v1694613921550!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        />
      </div>
    </div>
  );
};
export default Store;
