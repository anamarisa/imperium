import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between py-4 px-[130px]">
      <Image src="/logo.svg" alt="logo" width={120} height={19} />
      <Link href="https://imperiumai.ai/getstarted" passHref>
        <button className="rounded-xl cursor-pointer py-2 px-3 bg-dark-blue text-broken-white">
          Get Started
        </button>
      </Link>
    </div>
  );
}
