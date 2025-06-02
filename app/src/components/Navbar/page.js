import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between py-4 px-[130px]">
      <Image src="/logo.svg" alt="logo" width={120} height={19} />
      <button className="rounded-xl py-2 px-3 bg-dark-blue text-broken-white">
        Get Started
      </button>
    </div>
  );
}
