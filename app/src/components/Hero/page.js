"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = dynamic(() => import("./hero-slider"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="font-jakarta w-full min-h-screen bg-brand-blue">
      <div className="px-4 sm:px-6 lg:px-40 pt-[30px] sm:pt-[50px]">
        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-[68px] tracking-[-0.02em] leading-tight sm:leading-[90px] text-center text-white">
          AI Copilots Built to Manage <br className="hidden sm:block" /> your Entire Digital Ecosystem
        </h1>
        <p className="my-[25px] font-600 text-center text-white text-xl sm:text-2xl lg:text-[28px] leading-tight sm:leading-[48px] tracking-[-0.02em]">
          Start with a $1 setup fee and a Free 30-day trial <br className="hidden sm:block" />
          Continue for just $750 monthly for maximum IMPACT.
        </p>
        <Image
          src="/social.svg"
          alt="social"
          width={280}
          height={50}
          className="mx-auto my-[25px] w-[200px] sm:w-[280px]"
        />
        <p className="max-w-[597px] mx-auto text-center text-[16px] leading-[24px] font-normal text-white opacity-70 px-4">
          Join over 5,000 users leveraging our AI Copilots for guaranteed publications, local publications, custom
          content creation, EB1A Coverage, automated SEO analysis, social media automation, and blog automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-[47px] items-center mt-6">
          <Image
            src="/imperium.svg"
            alt="imperium"
            width={226.88}
            height={45.38}
            className="w-[180px] sm:w-[226.88px]"
          />
          <Image src="/shutter.svg" alt="imperium" width={226.53} height={66} className="w-[180px] sm:w-[226.53px]" />
          <Image src="/cfuze.svg" alt="imperium" width={330} height={20.63} className="w-[260px] sm:w-[330px]" />
        </div>
      </div>

      <div className="pb-[50px]">
        <Link href="https://imperiumai.ai/getstarted" passHref>
          <button className="flex cursor-pointer my-[40px] mx-auto rounded-lg bg-white text-dark-blue py-[10px] px-4">
            Get Started NOW. One FLAT FEE →
          </button>
        </Link>
      </div>

      <HeroSlider />
    </div>
  );
}
