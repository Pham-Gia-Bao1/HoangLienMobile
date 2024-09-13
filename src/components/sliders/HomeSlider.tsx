"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./HomeSlider.css";

// Define the interface for the props
interface Slide {
  src: string;
  caption: string;
}

interface HomeSliderProps {
  size: { width: number; height: number }; // Define size as an object with width and height
  listImage: Slide[]; // Define listImage as an array of slides
  slideDuration?: number; // Thêm prop slideDuration với kiểu dữ liệu là số (ms)
}

const HomeSlider: React.FC<HomeSliderProps> = ({ size, listImage, slideDuration = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % listImage.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? listImage.length - 1 : prev - 1));
  };

  // Function to jump to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Automatically go to the next slide every slideDuration milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideDuration); // Sử dụng slideDuration từ props

    // Clean up the interval when the component unmounts or currentSlide changes
    return () => clearInterval(interval);
  }, [currentSlide, slideDuration]);

  return (
    <div className="slideshow-container w-full border border-orange-500">
      {listImage.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentSlide ? "active-slider" : ""}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
        >

          <Image
            src={slide.src}
            alt={`Slide ${index + 1}`}
            width={size.width} // Use the width from the size prop
            height={size.height} // Use the height from the size prop
            objectFit="cover" // Adjust image fit based on your needs
          />
        </div>
      ))}

      {/* Previous and Next buttons */}
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>

      {/* Dots for navigation */}
      <div className="point_current_page" style={{ textAlign: "center" }}>
        {listImage.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active-slider" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
