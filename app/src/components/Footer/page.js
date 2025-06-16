export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FCFCFC] px-4 sm:px-6 lg:px-40 py-6 sm:py-8 lg:py-[26px]">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8">
        <p className="text-sm sm:text-base lg:text-lg leading-[20px] sm:leading-[24px] lg:leading-[28px] text-center sm:text-left">
          Copyright @ 2025 Imperium, All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 lg:gap-[50px] text-xs sm:text-sm lg:text-lg leading-[18px] sm:leading-[20px] lg:leading-[28px]">
          <li>
            <a href="#" className="hover:text-[#536EFF] transition-colors duration-300">
              Customer Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#536EFF] transition-colors duration-300">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#536EFF] transition-colors duration-300">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
