import Image from "next/image";

export default function Features() {
  return (
    <section>
      <div className="py-25 px-40">
        <h1 className="font-medium text-5xl leading-[60px] tracking-[-0.02em] mb-4">
          What's Included
        </h1>
        <p className="font-normal text-[16px] leading-[24px] text-[#808080] mb-8">
          Guaranteed Top-Tier News Feature: Like USA Today, Forbes, INSIDER, New
          York Telegraph, AP, Woman's Week, and more
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image src="/check.svg" alt="check" width={24} height={24} />
            <div className="text-[#0D0D0D]">
              <p className="font-normal text-[20px] leading-[30px]">
                Gain Access to Our NEW AI COPILOT for 7 Days!
              </p>
              <p className="text-[14px] leading-[20px] font-normal">
                Membership required to continue AI Copilot subscription after
                the trial period
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
            <div
              key={index}
              className="flex items-center  gap-4 font-normal text-[20px] leading-[30px]"
            >
              <Image src="/check.svg" alt="check" width={24} height={24} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
