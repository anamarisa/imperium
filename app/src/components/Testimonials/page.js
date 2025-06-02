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
    quote:
      "Their service is top-notch. Communication was seamless and the results exceeded our expectations.",
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
    <section className="py-[110px] px-40 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 relative">
        {/* Left column */}
        <div className="lg:w-[30%]">
          <h3 className="text-sm font-semibold tracking-widest text-[#6B6B90] uppercase mb-4">
            TESTIMONIALS
          </h3>
          <h1 className="text-4xl md:text-5xl font-medium text-[#0D0D0D] leading-[50px] md:leading-[60px] tracking-[-0.02em] mb-8">
            What people <br /> say about Us.
          </h1>
          {/* Dots */}
          <div className="flex space-x-8 mt-[247.5px]">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-4 h-4 rounded-full ${
                  index === i ? "bg-[#3F4366]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="lg:w-[50%] relative">
          {/* Behind card */}
          {testimonials[index + 1] && (
            <div
              className="absolute left-18 bg-white rounded-xl p-10 top-[90px] border border-[#E8E8E8] z-0 w-[612px] h-[297px] opacity-50"
              style={{
                boxShadow: `0px 2.25px 3.83px 0px #00000001,
                          0px 9.9px 7.92px 0px #00000002,
                          0px 24.3px 15.8px 0px #00000003,
                          0px 46.81px 30.96px 0px #00000003,
                          0px 78.76px 56.93px 0px #00000004,
                          0px 121.51px 97.21px 0px #00000005`,
              }}
            >
              <p className="text-[#6B6B6B] text-lg leading-[25px] mb-23">
                {testimonials[index + 1].quote}
              </p>
              <p className="text-[#0D0D0D] text-xl leading-[22px] font-semibold mb-[9px]">
                {testimonials[index + 1].company}
              </p>
              <p className="text-[#6B6B6B] text-lg leading-[17px]">
                {testimonials[index + 1].author}
              </p>
            </div>
          )}

          {/* Active card */}
          <div
            className="relative w-[612px] h-[297px] bg-white rounded-xl p-10 border border-[#E8E8E8] z-10 transition-all left-4 duration-500"
            style={{
              boxShadow: `0px 2.25px 3.83px 0px #00000001,
                0px 9.9px 7.92px 0px #00000002,
                0px 24.3px 15.8px 0px #00000003,
                0px 46.81px 30.96px 0px #00000003,
                0px 78.76px 56.93px 0px #00000004,
                0px 121.51px 97.21px 0px #00000005`,
            }}
          >
            <p className="text-[#6B6B6B] text-lg leading-[25px] mb-23">
              {testimonials[index].quote}
            </p>
            <p className="text-[#0D0D0D] text-xl leading-[22px] font-semibold mb-[9px]">
              {testimonials[index].company}
            </p>
            <p className="text-[#6B6B6B] text-lg leading-[17px]">
              {testimonials[index].author}
            </p>
          </div>
        </div>

        {/* Chevron Controls - OUTSIDE card */}
        <div className="absolute right-0 top-1/5 flex flex-col space-y-10 p-1 z-20">
          <button
            onClick={prev}
            disabled={index === 0}
            className="text-[#3F4366] disabled:opacity-30"
          >
            <ChevronUp className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            disabled={index === testimonials.length - 1}
            className="text-[#3F4366] disabled:opacity-30"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
