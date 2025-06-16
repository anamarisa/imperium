import Image from "next/image";

export default function AITools() {
  const contents = [
    {
      image: "/imperium-ai.svg",
      title: "ImperiumAI",
      description: "AI Copilots for PR, SEO, and Press Releases. Get featured weekly through a simple questionnaire.",
    },
    {
      image: "/smartshutter.svg",
      title: "Smartshutter",
      description: "SmartShutter creates social media content that generates high ROI with our Score.",
    },
    {
      image: "/contentfuze.svg",
      title: "ContentFuze",
      description:
        "ContentFuze's AI PR Copilot lets you control your entire SEO content ecosystem with a single click.",
    },
    {
      image: "/publications.svg",
      title: "Publications",
      description: "Our publication service ensures your story goes live on news sites. Ideal for founders.",
    },
    {
      image: "/local-pr.svg",
      title: "Guaranteed Local PR",
      description:
        "Get featured in local news outlets with guaranteed placements—boosting your brand's credibility and visibility.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-40 py-8 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto text-center max-w-4xl">
        <h2 className="text-[#0D0D0D] text-2xl sm:text-3xl lg:text-5xl leading-tight sm:leading-[60px] tracking-[-0.02em] font-medium mb-3 sm:mb-4">
          Powerful AI Tools <br className="hidden sm:block" />
          for Modern Businesses
        </h2>
        <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] font-normal text-[#808080]">
          Our integrated suite of AI tools helps you streamline workflows, create <br className="hidden sm:block" />{" "}
          compelling content, and capture stunning visuals.
        </p>
      </div>

      {/* Cards container */}
      <div className="mt-8 sm:mt-12 lg:mt-16 max-w-[1440px] mx-auto">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {contents.slice(0, 3).map((content, index) => (
            <div key={index} className="flex justify-center">
              <Card content={content} />
            </div>
          ))}
        </div>

        {/* Second row - 2 centered cards */}
        <div className="mt-6 sm:mt-8 lg:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-[736px] mx-auto">
            {contents.slice(3, 5).map((content, index) => (
              <div key={index + 3} className="flex justify-center">
                <Card content={content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted Card component for consistency
function Card({ content }) {
  return (
    <div className="flex flex-col h-full w-full sm:w-[320px] lg:w-[352px] border border-[#E1DBDB] shadow-lg hover:shadow-xl rounded-lg p-4 sm:p-6 lg:p-8 bg-white transition-all duration-300">
      <div className="flex items-center justify-center h-[100px] sm:h-[120px] lg:h-[160px] mb-3 sm:mb-4">
        <Image
          src={content.image}
          alt={content.title}
          width={200}
          height={200}
          className="object-contain w-[120px] sm:w-[160px] lg:w-[200px]"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-[#0D0D0D] mb-2 font-medium text-base sm:text-lg lg:text-[20px] leading-tight sm:leading-[28px]">
          {content.title}
        </h3>
        <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080]">{content.description}</p>
      </div>
    </div>
  );
}
