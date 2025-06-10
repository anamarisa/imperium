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
    <section className="py-25 px-40 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-medium text-[#0D0D0D] leading-[60px] tracking-[-0.02em] mb-2">
            AI Copilot Social Media - <br /> SmartShutter AI
          </h1>

          <p className="text-[16px] leading-[24px] text-[#808080] mb-4">
            AI Copilot That Powers Your Entire Social Media Ecosystem.
          </p>

          <p className="text-[#808080] mb-4">
            All major social media platforms supported. Create, publish and
            track content all automated using AI. Create and posts thousands of
            social media posts all unique.
          </p>

          <p className="text-[#808080] mb-4">
            SmartShutter creates brand symmetrical targeted social media content
            that generates the highest ROI using our proprietary SmartShutter
            Score.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="https://imperiumai.ai/getstarted" passHref>
              <button className="bg-[#536EFF] cursor-pointer text-[#FCFCFC] text-[14px] leading-[20px] py-[10px] px-[14px] font-medium rounded-lg transition-colors">
                Get Started
              </button>
            </Link>

            <div className="flex items-center space-x-2">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <Image
                    src={icon}
                    alt="Social Media Icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="lg:w-1/2">
          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src="/ai-socmed.png"
              alt="AI PR Copilot Dashboard"
              width={532}
              height={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
