import React from "react";
import RightBanner1 from "../../assets/images/Hoàng Liên Mobile right banner 1.jpg";
import RightBanner2 from "../../assets/images/Hoàng Liên Mobile right banner 2.jpg";
import Image from "next/image";
import HomeSlider from "../sliders/HomeSlider";
import SliderImage1 from "../../assets/images/Hoàng Liên Mobile right banner 1.png";
import SliderImage2 from "../../assets/images/Hoàng Liên Mobile right banner 2.png";
import SliderImage3 from "../../assets/images/Hoàng Liên Mobile right banner 3.png";
import SliderImageRight1 from "../../assets/images/Hoàng Liên Mobile sữa chữa điện thoại image1.png";
import SliderImageRight2 from "../../assets/images/Hoàng Liên Mobile sữa chữa điện thoại image2.png";
import SliderImageRight3 from "../../assets/images/Hoàng Liên Mobile sữa chữa điện thoại image3.png";
const images1 = [
  { src: SliderImage1.src, caption: "First Slide" },
  { src: SliderImage2.src, caption: "Second Slide" },
  { src: SliderImage3.src, caption: "Third Slide" },
];
const images2 = [
  { src: SliderImageRight1.src, caption: "First Slide" },
  { src: SliderImageRight2.src, caption: "Second Slide" },
  { src: SliderImageRight3.src, caption: "Third Slide" },
];
export default function HomeRightBanner() {
  return (
    <div className="bg-red-400 h-full w-full">
      <div className="w-full h-1/2 bg-blue-400">
        <HomeSlider
          slideDuration={3000}
          size={{ width: 500, height: 200 }} // Customize the size
          listImage={images2} // Pass the list of images
        />
        <HomeSlider
          slideDuration={5000}
          size={{ width: 500, height: 200 }} // Customize the size
          listImage={images1} // Pass the list of images
        />
      </div>
    </div>
  );
}
