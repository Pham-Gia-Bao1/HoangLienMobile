import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter to navigate
import notFoundImage from "../assets/images/notFOundImage.png"; // Thay đổi đường dẫn hình ảnh cho đúng
import { generateMetadata } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export const metadata = generateMetadata("Oops!", "Không tìm thấy trang này!");

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center" style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Not Found</h1>
      <Image
        src={notFoundImage.src}
        alt="Not Found"
        width={400}
        height={300}
        style={{ width: "300px", marginBottom: "20px" }}
      />
      <p>Trang bạn tìm kiếm không tồn tại.</p>
      <Link href="/">
        <button
          className="bg-orange-500 rounded text-white font-bold mt-3"
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Về Trang Chủ
        </button>
      </Link>
    </div>
  );
}
