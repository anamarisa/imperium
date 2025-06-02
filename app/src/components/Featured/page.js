import Image from "next/image";

export default function Featured() {
  const icons = [
    "/featured/buzzfeed.svg",
    "/featured/ap.svg",
    "/featured/rs.svg",
    "/featured/tc.svg",
    "/featured/nbc.svg",
    "/featured/te.svg",
    "/featured/buzzfeed.svg",
    "/featured/ap.svg",
    "/featured/rs.svg",
    "/featured/time.svg",
    "/featured/tc.svg",
    "/featured/nbc.svg",
    "/featured/nyt.svg",
    "/featured/te.svg",
    "/featured/bloomberg.svg",
    "/featured/time.svg",
    "/featured/nyt.svg",
    "/featured/te.svg",
  ];

  return (
    <section className="py-25 px-6 md:px-40 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-medium text-[#0D0D0D] leading-[60px] tracking-[-0.02em] mb-4">
            Guaranteed Tier 1 <br /> Publications!
          </h1>
          <p className="text-[16px] leading-[24px] text-[#808080]">
            Now you can get featured in top-tier publications—easily, quickly,
            and with guaranteed placements, all through one seamless platform.
          </p>
        </div>

        {/* Icons */}
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-3 gap-4 w-full">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-4 rounded-2xl border border-[#D6D6D6] bg-white shadow-sm"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  {" "}
                  {/* 64px = 16 * 4 */}
                  <Image
                    src={icon}
                    alt="Publication Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
