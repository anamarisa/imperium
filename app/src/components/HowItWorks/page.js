export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Fill Out Our Questionnaire",
      description:
        "Tell us about your business, goals, and target audience. This helps us understand your needs better.",
    },
    {
      number: "02",
      title: "Get Matched with AI Copilots",
      description: "We'll match you with the perfect AI Copilots for your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Review and Approve",
      description:
        "Review the AI-generated content and strategies. Make any necessary adjustments to align with your vision.",
    },
    {
      number: "04",
      title: "Launch and Monitor",
      description: "We'll launch your campaigns and continuously monitor performance, making optimizations as needed.",
    },
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40 bg-white">
      <div className="flex flex-col items-center mb-6 sm:mb-8 lg:mb-12 max-w-[1440px] mx-auto">
        <h2 className="text-[#0D0D0D] text-2xl sm:text-3xl lg:text-5xl leading-tight sm:leading-[60px] tracking-[-0.02em] font-medium mb-3 sm:mb-4 text-center">
          How Our Service Works
        </h2>
        <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] font-normal text-[#808080] max-w-[400px] text-center">
          Each category represents a distinct area of expertise or focus, with a variety of services tailored to address
          specific needs and challenges within that domain.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-[1440px] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 lg:p-8 border border-[#D6D6D6] rounded-3xl hover:border-dark-blue transition-colors duration-300">
            <div className="text-dark-blue text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight sm:leading-[44px] tracking-[-0.02em] mb-2">
              {step.number}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight sm:leading-[32px] font-medium text-[#0D0D0D] mb-3 sm:mb-4">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] font-normal">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
