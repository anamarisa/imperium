export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Pick an AI copilot",
      description:
        "After completing your purchase, you'll choose your desired news outlet from our list of prestigious publications.",
    },
    {
      number: "05",
      title: "Compare and contrast business info.",
      description:
        "Fill out a brief intake form with details about your business, which will guide our writers in crafting your feature article.",
    },
    {
      number: "02",
      title: "Review and Approve the Article",
      description:
        "Our team will draft a compelling 500-1000 word article about your business for your review and approval before publication.",
    },
    {
      number: "06",
      title: "Guaranteed Local Publication",
      description:
        "We’ll get your story published in major local news—no stress, no uncertainty. Just real exposure, where it matters most.",
    },
    {
      number: "03",
      title: "Social Media Automation",
      description:
        "Let AI handle the heavy lifting! From content creation to smart scheduling, we automate your social media so you can focus on growing your brand.",
    },
    {
      number: "07",
      title: "Blog Automation",
      description:
        "Effortlessly maintain a consistent content strategy with AI-generated blog posts tailored to your audience—automatically written, optimized, and published on schedule.",
    },
    {
      number: "04",
      title: "Guaranteed Local Publication",
      description:
        "Once approved, we'll ensure your article is published in the selected major news outlet, enhancing your brand's credibility and visibility.",
    },
    {
      number: "08",
      title: "The Smartest Way to Scale",
      description:
        "From higher sales to wider reach, our AI Copilot transforms how you grow your brand—faster, smarter, and more efficiently.",
    },
  ];

  return (
    <section className="py-25 px-40 bg-white">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[#0D0D0D] text-5xl leading-[60px] tracking-[-0.02em] font-medium md:text-5xl mb-5">
          How Our Service Works
        </h2>
        <p className="text-[16px] leading-[24px] font-normal text-[#808080] max-w-[400px]">
          Each category represents a distinct area of expertise or focus, with a
          variety of services tailored to address specific needs and challenges
          within that domain.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="p-6 border border-[#D6D6D6] rounded-3xl">
            <div className="text-dark-blue text-4xl font-medium leading-[44px] tracking-[-0.02em] mb-2">
              {step.number}
            </div>
            <h3 className="text-2xl leading-[32px] font-medium text-[#0D0D0D] mb-4">
              {step.title}
            </h3>
            <p className="text-[#808080] font-normal text-[16px] leading-[24px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
