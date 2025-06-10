export default function Category() {
  const categories = [
    {
      title: "ImperiumAI",
      description:
        "AI Copilots That Power Your PR, SEO, and Press Release Ecosystems. Get featured automatically each week based on a robust questionnaire we have you fill out.",
    },
    {
      title: "SmartShutter",
      description:
        "SmartShutter creates brand symmetrical targeted social media content that generates the highest ROI using our proprietary SmartShutter Score. All social media platforms supported.",
    },
    {
      title: "ContentFuze",
      description:
        "ContentFuze's AI PR Copilot lets you control your entire SEO content ecosystem with a single click. Generate hundreds of blogs, tailored white papers, and publish direct to any site.",
    },
    {
      title: (
        <>
          Guaranteed <br /> Publications
        </>
      ),
      description:
        "Our guaranteed publication service ensures your story goes live on real news sites every week automatically. Perfect for founders, creators, and agencies who need results, not pitches. Access 5000+ Publications Worldwide. ",
    },
  ];

  return (
    <section className="bg-white">
      <div className="py-25 px-40">
        <h1 className="font-medium text-5xl leading-[60px] tracking-[-0.02em] mb-12">
          10X Conversions. Become known everywhere.
        </h1>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-8"
            >
              <h3 className="min-w-[280px] text-2xl font-medium leading-[32px] text-[#0D0D0D]">
                {category.title}
              </h3>
              <p className="font-normal text-[16px] leading-[24px] text-[#808080] flex-1">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
