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
    <section className="py-8 sm:py-16 lg:py-25 px-4 sm:px-6 lg:px-40 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-[#0D0D0D] leading-tight sm:leading-[50px] lg:leading-[60px] tracking-[-0.02em] mb-3 sm:mb-4">
            Guaranteed Tier 1 <br className="hidden sm:block" /> Publications!
          </h1>
          <p className="text-sm sm:text-base leading-[20px] sm:leading-[24px] text-[#808080]">
            Now you can get featured in top-tier publications—easily, quickly, and with guaranteed placements, all
            through one seamless platform.
          </p>
        </div>

        {/* Icons */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 w-full">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="w-full aspect-square flex items-center justify-center p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border border-[#D6D6D6] bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                  <Image
                    src={icon}
                    alt="Publication Logo"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                    loading="lazy"
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
