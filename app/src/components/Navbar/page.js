"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Image src="/logo.svg" alt="logo" width={120} height={19} className="w-[100px] sm:w-[120px]" />

          {/* Get Started Button - Visible on all screens */}
          <Link href="https://imperiumai.ai/getstarted" passHref>
            <button className="rounded-xl cursor-pointer py-2 px-3 bg-dark-blue text-broken-white hover:bg-opacity-90 transition-colors text-sm sm:text-base">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
