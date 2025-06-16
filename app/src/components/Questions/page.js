"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      title: "How do you guarantee these placements?",
      description:
        "Our approach to PR integrates artificial intelligence with a leading CRM platform to pitch hundreds of thousands of journalists at top outlets, all in real time. We write all the content from scratch and get your approval prior to publication. In aggregate, our clients get millions of impressions each month and are based in over 90 countries representing countless industries. From Fortune 500s to startups, we've helped countless companies launch new products, elevate their brand, and reimagine entire industries through powerful PR and communications strategies. That being said – all of our placements are guaranteed. We only offer publications that we get with 100% certainty get you placed on. We don't work with publications we can't guarantee.",
    },
    {
      title: "Why should I purchase your software?",
      description:
        "Our platform is built to help businesses and creators grow faster, operate smarter, and automate what slows them down. By combining AI-powered tools with vertical-specific features, we give you a competitive edge without the typical complexity or overhead.",
    },
    {
      title: "Which publications do you recommend I buy?",
      description:
        "Our platform is built to help businesses and creators grow faster, operate smarter, and automate what slows them down. By combining AI-powered tools with vertical-specific features, we give you a competitive edge without the typical complexity or overhead.",
    },
    {
      title: "What does your software do?",
      description: (
        <>
          It's an AI-driven platform with tools for content creation, distribution, automation, and insight. Across
          products like Imperium, SmartShutter, and ContentFuze, users can:
          <ul className="list-disc list-inside my-3 ml-1 space-y-1">
            <li>Create and auto-post content</li>
            <li>Track engagement</li>
            <li>Collaborate across teams</li>
            <li>Launch vertical-specific campaigns</li>
          </ul>
          All while saving time and scaling faster.
        </>
      ),
    },
    {
      title: "How long does it take to see results?",
      description:
        "Most users see noticeable improvements within 2–4 weeks, especially in content consistency, engagement metrics, and operational efficiency. Full ROI depends on your vertical and adoption pace—but results typically compound quickly.",
    },
    {
      title: "What kind of businesses is this good for?",
      description: (
        <>
          We've built tailored experiences for:
          <ul className="list-disc list-inside my-3 ml-1 space-y-1">
            <li>Real Estate</li>
            <li>Crypto projects</li>
            <li>Public & Private Companies</li>
            <li>Event Management</li>
            <li>eCommerce & Online Businesses</li>
            <li>Modeling agencies</li>
            <li>Local Governments</li>
            <li>Clean Energy & more</li>
          </ul>
          <p>If your business creates content, manages a brand, or needs automation—this is built for you.</p>
        </>
      ),
    },
    {
      title: "Is this good for individuals?",
      description:
        "Yes—solo creators, models, athletes, and independent professionals use our tools to manage their brand, create content, and automate their outreach—without needing a large team or agency.",
    },
    {
      title: "What does AI Copilot mean?",
      description: (
        <>
          Our AI Copilot acts like a smart assistant inside the platform. It helps you:
          <ul className="list-disc list-inside my-3 ml-1 space-y-1">
            <li>Draft posts, emails, or campaign briefs</li>
            <li>Suggest improvements based on real-time performance</li>
            <li>Surface insights without digging through dashboards</li>
            <li>Automate repetitive tasks</li>
            <li>It's like having a strategist and content creator rolled into one.</li>
          </ul>
        </>
      ),
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
        <div className="w-full lg:w-2/5">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#0D0D0D] leading-tight sm:leading-[50px] lg:leading-[60px] tracking-[-0.02em] mb-3 sm:mb-5">
            Find Your Answers Here
          </h2>
          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-2">
            Couldn't not find what you were looking for?
          </p>
          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mb-4 sm:mb-6">
            write to us at <span className="text-[#0D0D0D] font-medium">hello@imperium.AI</span>
          </p>

          <button className="bg-[#536EFF] hover:bg-[#4054CC] flex justify-center items-center py-2.5 sm:py-3 px-4 sm:px-6 shadow-sm rounded-lg text-[#FCFCFC] text-sm sm:text-base transition-colors duration-300">
            <span className="mr-2">
              <Image src="/phone.svg" alt="phone" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            Call +1 (214) 422-5414
          </button>
        </div>

        <div className="w-full lg:w-3/5 space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            const contentRef = useRef(null);

            return (
              <div
                key={index}
                className="pt-4 sm:pt-6 border-b border-[#D6D6D6] transition-all duration-300 ease-in-out">
                <div
                  className="flex justify-between items-start gap-4 cursor-pointer"
                  onClick={() => toggleOpen(index)}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight sm:leading-[28px] lg:leading-[32px] font-medium text-[#0D0D0D]">
                    {faq.title}
                  </h3>
                  <span className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <span className="text-2xl font-semibold text-[#536EFF]">—</span>
                    ) : (
                      <Image src="/plus.svg" alt="plus" width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </span>
                </div>
                <div
                  ref={contentRef}
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
                  }}>
                  <div className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080] mt-2 pb-4 sm:pb-6">
                    {faq.description || "No information available yet."}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
