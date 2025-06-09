'use client'; 

import dynamic from "next/dynamic";
import Image from "next/image";

const HeroSlider = dynamic(() => import("./hero-slider"), {
  ssr: false,
});

export default function Hero() {

  return (
    <div className="font-jakarta w-full min-h-screen bg-brand-blue">
      <div className="px-40 pt-[50px]">
        <h1 className="font-semibold text-[72px] tracking-[-0.02em] leading-[90px] text-center text-white">
          AI Copilots Built to Manage <br /> your Entire Digital Ecosystem
        </h1>
        <p className="my-[25px] font-600 text-center text-white text-[32px] leading-[48px] tracking-[-0.02em] ">
          Start with a $1 Free 30-day trial <br />
          Continue for just $750 monthly for maximum IMPACT.
        </p>
        <Image
          src="/social.svg"
          alt="social"
          width={280}
          height={50}
          className="mx-auto my-[25px]"
        />
        <p className="max-w-[597px] mx-auto text-center text-[16px] leading-[24px] font-normal text-white opacity-70">
          Join over 5,000 users leveraging our AI Copilots for guaranteed
          publications, local publications, custom content creation, EB1A
          Coverage, automated SEO analysis, social media automation, and blog
          automation.
        </p>
        <div className="flex justify-center space-x-[47px] items-center mt-6">
          <Image src="/frame1.svg" alt="imperium" width={260} height={48} />
          <Image src="/frame2.svg" alt="imperium" width={137} height={40} />
          <Image src="/frame3.svg" alt="imperium" width={192} height={12} />
        </div>
      </div>

      <div className="pb-[50px]">
        <button className="flex my-[40px] mx-auto rounded-lg bg-white text-dark-blue py-[10px] px-4">
          Get Started NOW. One FLAT FEE →
        </button>
      </div>

      <HeroSlider />
    </div>
  );
}
