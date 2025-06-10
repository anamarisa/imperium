import Image from "next/image";
import Link from "next/link";

export default function AutomateBlog() {
  return (
    <section className="py-25 px-40 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Dashboard Image */}
        <div className="lg:w-1/2">
          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src="/automate-blog.png"
              alt="AI PR Copilot Dashboard"
              width={532}
              height={340}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-medium text-[#0D0D0D] leading-[60px] tracking-[-0.02em] mb-4">
            Automate Your Blog and Content Ecosystem - <br /> ContentFuze AI
          </h1>

          <p className="text-[16px] leading-[24px] text-[#808080] mb-4">
            ContentFuze’s AI PR Copilot lets you control your entire SEO content
            ecosystem with a single click.
          </p>

          <p className="text-[#808080] mb-4">
            Generate hundreds of blogs, tailored white papers, and publish
            direct to any site.
          </p>

          <p className="text-[#808080] mb-8">
            Powered by smart optimization and expert-backed workflows, it’s the
            easiest way to grow your brand visibility at scale.
          </p>

          <Link href="https://imperiumai.ai/getstarted" passHref>
            <button className="bg-[#536EFF] cursor-pointer text-[#FCFCFC] text-[14px] leading-[20px] py-[10px] px-[14px] font-medium rounded-lg transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
