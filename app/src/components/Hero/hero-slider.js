"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/hero/logo1.png",
  "/hero/logo2.png",
  "/hero/logo3.png",
  "/hero/logo4.png",
  "/hero/logo5.png",
  "/hero/logo6.png",
  "/hero/logo7.png",
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export default function HeroSlider() {
  return (
    <div className="bg-black py-2 w-full overflow-hidden">
      <div className="w-full">
        <Slider {...sliderSettings} className="w-full">
          {images.map((src, index) => (
            <div key={index} className="px-1 sm:px-2">
              <div className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={`logo-${index}`}
                  width={140}
                  height={40}
                  className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
