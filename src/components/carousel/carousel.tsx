"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Interface for image data
interface ImageData {
  src: 'StaticImageData';
}

// Image data array
const images = [
  {
    src: '/c1.jpg',
  },
  {
    src: '/c2.jpg',
  },
  {
    src: '/c3.jpeg',
  },
  {
    src: '/c4.jpg',
  },
  {
    src: '/c5.jpg',
  },  {
    src: '/c6.jpg',
  },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <section  id="home">
      <div className="relative w-full">
        <div
          className="2xl:h-[90vh] xl:h-[60vh] lg:h-[55vh] md:h-[50vh] sm:h-[30vh] h-[30vh] relative mx-0 group"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            layout="fill"
            className=" transition-all duration-500 ease-in-out cursor-pointer "
          />
        </div>
        <button
          className="absolute left-0 top-1/2 transform bg-transparent rounded-xl hover:bg-primary mx-1 -mt-[10px] -translate-y-1/2 text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="absolute right-0 top-1/2 bg-transparent rounded-xl hover:bg-primary mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-primary rounded-xl"
                  : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
      </section>
    );
  }