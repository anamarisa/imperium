"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    quote:
      "Love working with the imperium team. They are a super-add on to my work. They are always reliable on time and gets the coverage read.",
    author: "Customer 1",
    company: "Imperium AI",
  },
  {
    quote:
      "The results have been phenomenal. Our brand visibility increased dramatically within just one month of working with Imperium.",
    author: "Customer 2",
    company: "Imperium AI",
  },
  {
    quote: "Their service is top-notch. Communication was seamless and the results exceeded our expectations.",
    author: "Customer 3",
    company: "Imperium AI",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="py-8 sm:py-16 lg:py-[110px] px-4 sm:px-6 lg:px-40 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 relative">
        {/* Left column */}
        <div className="w-full lg:w-[30%]">
          <h3 className="text-sm font-semibold tracking-widest text-[#6B6B90] uppercase mb-3 sm:mb-4">TESTIMONIALS</h3>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#0D0D0D] leading-tight sm:leading-[50px] lg:leading-[60px] tracking-[-0.02em] mb-6 sm:mb-8">
            What people <br className="hidden sm:block" /> say about Us.
          </h1>
          {/* Dots */}
          <div className="flex space-x-3 sm:space-x-4 lg:space-x-8 mt-6 sm:mt-8 lg:mt-[247.5px]">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-colors duration-300 ${
                  index === i ? "bg-[#3F4366]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-[50%] relative">
          {/* Behind card */}
          {testimonials[index + 1] && (
            <div
              className="absolute left-2 sm:left-4 lg:left-18 bg-white rounded-xl p-4 sm:p-6 lg:p-10 top-[30px] sm:top-[40px] lg:top-[90px] border border-[#E8E8E8] z-0 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] lg:w-[612px] h-auto sm:h-[297px] opacity-50"
              style={{
                boxShadow: `0px 2.25px 3.83px 0px #00000001,
                          0px 9.9px 7.92px 0px #00000002,
                          0px 24.3px 15.8px 0px #00000003,
                          0px 46.81px 30.96px 0px #00000003,
                          0px 78.76px 56.93px 0px #00000004,
                          0px 121.51px 97.21px 0px #00000005`,
              }}>
              <p className="text-[#6B6B6B] text-sm sm:text-base lg:text-lg leading-[20px] sm:leading-[22px] lg:leading-[25px] mb-4 sm:mb-6 lg:mb-23 break-words">
                {testimonials[index + 1].quote}
              </p>
              <p className="text-[#0D0D0D] text-sm sm:text-base lg:text-xl leading-[18px] sm:leading-[20px] lg:leading-[22px] font-semibold mb-2 sm:mb-[9px] break-words">
                {testimonials[index + 1].company}
              </p>
              <p className="text-[#6B6B6B] text-xs sm:text-sm lg:text-lg leading-[16px] sm:leading-[17px] break-words">
                {testimonials[index + 1].author}
              </p>
            </div>
          )}

          {/* Active card */}
          <div
            className="relative w-full sm:w-[calc(100%-32px)] lg:w-[612px] h-auto sm:h-[297px] bg-white rounded-xl p-4 sm:p-6 lg:p-10 border border-[#E8E8E8] z-10 transition-all duration-500"
            style={{
              boxShadow: `0px 2.25px 3.83px 0px #00000001,
                0px 9.9px 7.92px 0px #00000002,
                0px 24.3px 15.8px 0px #00000003,
                0px 46.81px 30.96px 0px #00000003,
                0px 78.76px 56.93px 0px #00000004,
                0px 121.51px 97.21px 0px #00000005`,
            }}>
            <p className="text-[#6B6B6B] text-sm sm:text-base lg:text-lg leading-[20px] sm:leading-[22px] lg:leading-[25px] mb-4 sm:mb-6 lg:mb-23 break-words">
              {testimonials[index].quote}
            </p>
            <p className="text-[#0D0D0D] text-sm sm:text-base lg:text-xl leading-[18px] sm:leading-[20px] lg:leading-[22px] font-semibold mb-2 sm:mb-[9px] break-words">
              {testimonials[index].company}
            </p>
            <p className="text-[#6B6B6B] text-xs sm:text-sm lg:text-lg leading-[16px] sm:leading-[17px] break-words">
              {testimonials[index].author}
            </p>
          </div>
        </div>

        {/* Chevron Controls */}
        <div className="absolute right-0 top-1/4 sm:top-1/5 flex flex-col space-y-3 sm:space-y-4 lg:space-y-10 p-1 z-20">
          <button
            onClick={prev}
            disabled={index === 0}
            className="text-[#3F4366] disabled:opacity-30 hover:text-[#536EFF] transition-colors duration-300">
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </button>
          <button
            onClick={next}
            disabled={index === testimonials.length - 1}
            className="text-[#3F4366] disabled:opacity-30 hover:text-[#536EFF] transition-colors duration-300">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
