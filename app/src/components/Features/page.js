import Image from "next/image";

export default function Features() {
  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40">
        <h1 className="font-medium text-2xl sm:text-3xl lg:text-5xl leading-tight sm:leading-[60px] tracking-[-0.02em] mb-3 sm:mb-4">
          What's Included
        </h1>
        <p className="font-normal text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-6 sm:mb-8 max-w-3xl">
          Guaranteed Top-Tier News Feature: Like USA Today, Forbes, INSIDER, New York Telegraph, AP, Woman's Week, and
          more
        </p>

        <hr className="border-t border-gray-300 mb-6 sm:mb-8" />

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <Image src="/check.svg" alt="check" width={20} height={20} className="mt-1 w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-[#0D0D0D]">
              <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-tight sm:leading-[30px]">
                Gain Access to Our NEW AI COPILOT for 7 Days!
              </p>
              <p className="text-xs sm:text-sm leading-[18px] sm:leading-[20px] font-normal mt-1">
                Membership required to continue AI Copilot subscription after the trial period
              </p>
            </div>
          </div>

          {[
            "After checkout, complete our 2-minute form to choose your publication, fill out the questionnaire, and upload pictures. You will be featured in four publications monthly, with one published every Friday.",
            "Enjoy a 7-day free trial. A membership is required to continue your AI Copilot subscription after the trial period. $1 authorization, after first 7 days you will be charged $750 every month.",
            "Review and request revisions to ensure it represents your brand.",
            "Gain a high authority backlink to enhance your SEO and other AI search engines.",
            "Customizable 'Featured On' banner for your website, ads, and social media.",
            "Being published by reputable outlets boosts your brand's credibility. Our AI Copilots handle everything—so you can focus on your life.",
            "Our AI Copilots and your campaign success manager handle everything, leaving you to do what you do best, running your life and business.",
            "Enjoy unlimited use to SmartShutter, and ContentFuzz for 1 user. Get featured on 4 local publications each month.",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <Image src="/check.svg" alt="check" width={20} height={20} className="mt-1 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-sm sm:text-base lg:text-[20px] leading-[20px] sm:leading-[30px] font-normal">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
