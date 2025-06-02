import Image from "next/image";

export default function AIPRCopilot() {
  return (
    <section className="py-25 px-40 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Dashboard Image */}
        <div className="lg:w-1/2">
          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src="/dashboard.svg"
              alt="AI PR Copilot Dashboard"
              width={532}
              height={340}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-medium text-[#0D0D0D] leading-[60px] tracking-[-0.02em] mb-2">
            AI PR Copilot- Imperium <br /> AI Assistant
          </h1>

          <p className="text-[16px] leading-[24px] text-[#808080] mb-4">
            Access 5000+ Publications Worldwide.
          </p>

          <p className="text-[#808080] mb-4">
            You'll receive press coverage on sites like Forbes, NY Times, CNN,
            WSJ, Yahoo Finance, USA Today, Washington Post and local and
            industry relevant publications.
          </p>

          <div className=" mb-4">
            <p className="text-[#808080]">
              AI Copilots That Power Your PR, SEO, and Press Release Ecosystems.
            </p>
            <p className="text-[#808080]">
              Get featured automatically each week based on a robust
              questionnaire we have you fill out.
            </p>
          </div>

          <p className="text-[#808080] mb-8">
            Choose from Essentials, Pro, or VIP plans — all with 100% placement
            guarantee. No fluff. Just real ORGANIC PR.
          </p>

          <button className="bg-[#536EFF] text-[#FCFCFC] text-[14px] leading-[20px] py-[10px] px-[14px] font-medium rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
