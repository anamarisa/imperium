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
          Guaranteed <br className="hidden sm:block" /> Publications
        </>
      ),
      description:
        "Get featured in top-tier publications like USA Today, Forbes, INSIDER, New York Telegraph, AP, Woman's Week, and more. Our AI Copilots handle everything—so you can focus on your life.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40 max-w-[1440px] mx-auto">
        <h1 className="font-medium text-2xl sm:text-3xl lg:text-5xl leading-tight sm:leading-[60px] tracking-[-0.02em] mb-6 sm:mb-8 lg:mb-12">
          10X Conversions. Become known everywhere.
        </h1>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 rounded-lg hover:bg-gray-50 transition-colors">
              <h3 className="w-full sm:w-[280px] lg:w-[320px] text-lg sm:text-xl lg:text-2xl font-medium leading-tight sm:leading-[32px] text-[#0D0D0D] shrink-0">
                {category.title}
              </h3>
              <p className="font-normal text-sm sm:text-base lg:text-lg leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#808080] flex-1 max-w-[800px]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
