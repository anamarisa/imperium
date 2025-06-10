import Image from "next/image";

export default function Functionality() {
  return (
    <section className="py-25 px-40 bg-white">
      <h2 className="text-5xl font-medium leading-[60px] tracking-[-0.02em] mb-[33px] text-[#0D0D0D]">
        Transforming Your PR Social Media and SEO
        <br />
        Vision into Reality with AI Software
      </h2>
      <div className="w-full grid lg:grid-cols-2 items-center gap-5">
        {/* Left Text Content */}
        <div>
          <p className="text-[#6B6B6B] text-base leading-[24px] mb-[50px] max-w-xl">
            At Imperium AI, we believe turning your public relations and SEO
            goals into success starts with a clear strategy and is about
            envisioning your brand's online presence and setting objectives that
            align with your aspirations.
          </p>

          <ul className="space-y-6">
            {[
              {
                title: "Guaranteed Local Coverage",
                desc: "Our AI solutions alleviate the stress of managing PR and SEO campaigns.",
                icon: "/functionality/icon1.svg",
              },
              {
                title: "Comprehensive Brand Support",
                desc: "We provide press release and content services to boost your brand’s visibility on Google and AI platforms.",
                icon: "/functionality/icon2.svg",
              },
              {
                title: "Social Media Automation",
                desc: "AI-powered posting that saves time and boosts engagement—fully automated, always on-brand. All platforms.",
                icon: "/functionality/icon3.svg",
              },
              {
                title: "Guaranteed PR On Top Publications",
                desc: "Secure your spot in media with guaranteed coverage. We manage content to boost your brand’s authority.",
                icon: "/functionality/icon4.svg",
              },
              {
                title: "Blog Automation through AI Copilots",
                desc: "Let our AI Copilots manage your blog! We automate everything—keeping your content fresh and engaging.",
                icon: "/functionality/icon5.svg",
              },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-5">
                <div className="min-w-12 min-h-12 w-12 h-12 rounded-[13px] bg-[#5E17EB] flex items-center justify-center mt-1">
                  <Image
                    src={item.icon}
                    alt="Feature Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="w-[60%]">
                  <p className="text-[#0D0D0D] font-medium text-base lg:text-lg leading-tight mb-1">
                    {item.title}
                  </p>
                  <p className="text-[#6B6B6B] text-sm lg:text-base leading-[22px]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image & Labels */}
        <div className="relative">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full"
            style={{
              background: "#7839EE",
              filter: "blur(150px)",
              opacity: 0.8,
              zIndex: 0,
              transform: "translate(30%, -30%)",
            }}
          ></div>

          {/* <div className="absolute top-6 left-6 w-[90%] h-[90%] bg-white rounded-3xl z-0" /> */}
          <Image
            src="/screenshot.png"
            alt="AI Software Dashboard"
            width={751}
            height={486}
            className="w-full z-100 rounded-3xl mx-auto block border-[12px] border-[#111111] shadow-[2px_10px_30px_0px_#181C1F66]"
          />

          {/* Labels */}
          <div
            className="absolute -top-5 -translate-y-4/5 left-20 bg-[#7839EE] text-white text-base leading-[23px] font-medium p-3 rounded-lg"
            style={{ boxShadow: "2px 10px 30px 0px #181C1F66" }}
          >
            Guaranteed Local Publications
          </div>

          <div
            className="absolute top-1/3 -left-20 opacity-60 bg-[#7839EE] text-white text-base leading-[23px] font-medium p-3 rounded-lg"
            style={{ boxShadow: "2px 10px 30px 0px #181C1F66" }}
          >
            Press Release Launch
          </div>

          <div
            className="absolute -bottom-14 -left-11 bg-[#7839EE] text-white text-base leading-[23px] font-medium p-3 rounded-lg"
            style={{ boxShadow: "2px 10px 30px 0px #181C1F66" }}
          >
            Social Media Automation
          </div>

          <div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#7839EE] text-white text-base leading-[23px] font-medium p-3 rounded-lg flex items-center gap-2"
            style={{ boxShadow: "2px 10px 30px 0px #181C1F66" }}
          >
            <Image src="/schedule.svg" alt="24/7 Icon" width={26} height={26} />
            24/7 analysis
          </div>

          <div
            className="absolute -bottom-18 right-3 bg-[#7839EE] text-white text-base leading-[23px] font-medium p-3 rounded-lg"
            style={{ boxShadow: "2px 10px 30px 0px #181C1F66" }}
          >
            Thousands of Publications
          </div>
        </div>
      </div>
    </section>
  );
}
