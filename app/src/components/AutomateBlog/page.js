import Image from "next/image";
import Link from "next/link";

export default function AutomateBlog() {
  return (
    <section className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Dashboard Image */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/automate-blog.png"
              alt="Automate Blog Dashboard"
              width={532}
              height={340}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#0D0D0D] leading-tight sm:leading-[60px] tracking-[-0.02em] mb-3 sm:mb-4">
            Automate Your Blog and Content Ecosystem - <br className="hidden sm:block" /> ContentFuze AI
          </h1>

          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-3 sm:mb-4">
            ContentFuze's AI PR Copilot lets you control your entire SEO content ecosystem with a single click.
          </p>

          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-3 sm:mb-4">
            Generate hundreds of blogs, tailored white papers, and publish direct to any site.
          </p>

          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-6 sm:mb-8">
            Powered by smart optimization and expert-backed workflows, it's the easiest way to grow your brand
            visibility at scale.
          </p>

          <Link href="https://imperiumai.ai/getstarted" passHref>
            <button className="bg-[#536EFF] hover:bg-[#4054CC] cursor-pointer text-[#FCFCFC] text-sm sm:text-base leading-[20px] py-2.5 sm:py-3 px-4 sm:px-6 font-medium rounded-lg transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
