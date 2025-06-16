import Image from "next/image";
import Link from "next/link";

export default function AISocialMedia() {
  const icons = [
    "/social/instagram.svg",
    "/social/facebook.svg",
    "/social/linkedin.svg",
    "/social/pinterest.svg",
    "/social/reddit.svg",
    "/social/x.svg",
    "/social/youtube.svg",
    "/social/tiktok.svg",
  ];
  return (
    <section className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#0D0D0D] leading-tight sm:leading-[60px] tracking-[-0.02em] mb-3 sm:mb-4">
            AI Copilot Social Media - <br className="hidden sm:block" /> SmartShutter AI
          </h1>

          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-3 sm:mb-4">
            AI Copilot That Powers Your Entire Social Media Ecosystem.
          </p>

          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-3 sm:mb-4">
            All major social media platforms supported. Create, publish and track content all automated using AI. Create
            and posts thousands of social media posts all unique.
          </p>

          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-6 sm:mb-8">
            SmartShutter creates brand symmetrical targeted social media content that generates the highest ROI using
            our proprietary SmartShutter Score.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link href="https://imperiumai.ai/getstarted" passHref>
              <button className="bg-[#536EFF] hover:bg-[#4054CC] cursor-pointer text-[#FCFCFC] text-sm sm:text-base leading-[20px] py-2.5 sm:py-3 px-4 sm:px-6 font-medium rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </Link>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <Image
                    src={icon}
                    alt="Social Media Icon"
                    width={40}
                    height={40}
                    className="object-contain w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ai-socmed.png"
              alt="AI Social Media Dashboard"
              width={532}
              height={340}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
