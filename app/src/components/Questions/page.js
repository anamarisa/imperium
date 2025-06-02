"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      title: "How do you guarantee these placements?",
      description:
        "Our approach to PR integrates artificial intelligence with a leading CRM platform to pitch hundreds of thousands of journalists at top outlets, all in real time. We write all the content from scratch and get your approval prior to publication. In aggregate, our clients get millions of impressions each month and are based in over 90 countries representing countless industries. From Fortune 500s to startups, we’ve helped countless companies launch new products, elevate their brand, and reimagine entire industries through powerful PR and communications strategies. That being said – all of our placements are guaranteed. We only offer publications that we get with 100% certainty get you placed on. We don’t work with publications we can’t guarantee.",
    },
    { title: "Why should I purchase your software?", description: "" },
    { title: "Which publications do you recommend I buy?", description: "" },
    { title: "What does your software do?", description: "" },
    { title: "How long does it take to see results?", description: "" },
    { title: "What kind of businesses os this good for?", description: "" },
    { title: "Is this good for individuals?", description: "" },
    { title: "What does AI Copilot mean?", description: "" },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-25 px-40 bg-white">
      <div className="flex space-x-8">
        <div className="w-2/5">
          <h2 className="text-[#0D0D0D] text-5xl leading-[60px] tracking-[-0.02em] font-medium md:text-5xl mb-5">
            Find Your Answers Here
          </h2>
          <p className="text-[16px] leading-[24px] font-normal text-[#808080]">
            Couldn’t not find what you were looking for?
          </p>
          <p className="text-[16px] leading-[24px] font-normal text-[#808080]">
            write to us at{" "}
            <span className="text-[#0D0D0D]"> hello@imperium.AI</span>
          </p>

          <button className="bg-dark-blue flex justify-center items-center mt-10 py-[10px] px-[14px] shadow-xs rounded-xl text-broken-white">
            <span className="mr-1">
              <Image src="/phone.svg" alt="phone" width={15} height={15} />
            </span>{" "}
            Call +1 (214) 422-5414
          </button>
        </div>

        <div className="space-y-6 w-3/5">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            const contentRef = useRef(null);

            return (
              <div
                key={index}
                className="pt-6 border-b border-[#D6D6D6] transition-all duration-300 ease-in-out"
              >
                <div
                  className="flex justify-between items-center mb-[14px] cursor-pointer"
                  onClick={() => toggleOpen(index)}
                >
                  <h3 className="text-2xl leading-[32px] font-medium text-[#0D0D0D]">
                    {faq.title}
                  </h3>
                  <p className="font-semibold">
                    {isOpen ? (
                      "—"
                    ) : (
                      <Image
                        src="/plus.svg"
                        alt="plus"
                        width={20}
                        height={20}
                      />
                    )}
                  </p>
                </div>
                <div
                  ref={contentRef}
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRef.current?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <p className="text-[#808080] font-normal text-[16px] leading-[24px] mt-2 pb-6">
                    {faq.description || "No information available yet."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
