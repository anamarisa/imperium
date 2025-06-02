import Image from "next/image";

export default function AITools() {
  const contents = [
    {
      image: "/imperium-ai.svg",
      title: "ImperiumAI",
      description:
        "AI Copilots for PR, SEO, and Press Releases. Get featured weekly through a simple questionnaire.",
    },
    {
      image: "/smartshutter.svg",
      title: "Smartshutter",
      description:
        "SmartShutter creates social media content that generates high ROI with our Score.",
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
      description:
        "Our publication service ensures your story goes live on news sites. Ideal for founders.",
    },
    {
      image: "/local-pr.svg",
      title: "Guaranteed Local PR",
      description:
        "Get featured in local news outlets with guaranteed placements—boosting your brand's credibility and visibility.",
    },
  ];

  return (
    <section className="px-6 md:px-40 py-20">
      <div className="mx-auto text-center max-w-4xl">
        <h2 className="text-[#0D0D0D] text-4xl md:text-5xl leading-[60px] tracking-[-0.02em] font-medium mb-5">
          Powerful AI Tools <br />
          for Modern Businesses
        </h2>
        <p className="text-[16px] leading-[24px] font-normal text-[#808080]">
          Our integrated suite of AI tools helps you streamline workflows,
          create <br className="hidden md:block" /> compelling content, and
          capture stunning visuals.
        </p>
      </div>

      {/* Cards container */}
      <div className="mt-12">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {contents.slice(0, 3).map((content, index) => (
            <Card key={index} content={content} />
          ))}
        </div>
        
        {/* Second row - 2 centered cards */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ maxWidth: '736' }}>
            {contents.slice(3, 5).map((content, index) => (
              <Card key={index + 3} content={content} />
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
    <div className="flex flex-col h-full w-full max-w-[352px] border border-[#E1DBDB] shadow-lg hover:shadow-xl rounded-lg p-6 bg-white">
      <div className="flex items-center justify-center h-[160px] mb-4">
        <Image
          src={content.image}
          alt={content.title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-[#0D0D0D] mb-2 font-medium text-[20px] leading-[28px]">
          {content.title}
        </h3>
        <p className="text-[16px] leading-[24px] text-[#808080]">
          {content.description}
        </p>
      </div>
    </div>
  );
}