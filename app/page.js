import Navbar from "./src/components/Navbar/page";
import Hero from "./src/components/Hero/page";
import Features from "./src/components/Features/page";
import Category from "./src/components/Category/page";
import HowItWorks from "./src/components/HowItWorks/page";
import AITools from "./src/components/AITools/page";
import AIPRCopilot from "./src/components/AIPRCopilot/page";
import AISocialMedia from "./src/components/AISocialMedia/page";
import AutomateBlog from "./src/components/AutomateBlog/page";
import Featured from "./src/components/Featured/page";
import Questions from "./src/components/Questions/page";
import Footer from "./src/components/Footer/page";
import Testimonials from "./src/components/Testimonials/page";
import Functionality from "./src/components/Functionality/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Functionality />
      <div className="flex justify-center items-center mt-12 sm:hidden">
        <Link
          href="https://imperiumai.ai/getstarted"
          passHref>
          <button className="rounded-xl cursor-pointer py-2 px-3 bg-dark-blue text-broken-white hover:bg-opacity-90 transition-colors text-sm sm:text-base">
            Get Started
          </button>
        </Link>
      </div>
      <Features />
      <div className="flex justify-center items-center mt-4 sm:hidden">
        <Link
          href="https://imperiumai.ai/getstarted"
          passHref>
          <button className="rounded-xl cursor-pointer py-2 px-3 bg-dark-blue text-broken-white hover:bg-opacity-90 transition-colors text-sm sm:text-base">
            Get Started
          </button>
        </Link>
      </div>
      <Category />
      <div className="flex justify-center items-center mt-4 sm:hidden">
        <Link
          href="https://imperiumai.ai/getstarted"
          passHref>
          <button className="rounded-xl cursor-pointer py-2 px-3 bg-dark-blue text-broken-white hover:bg-opacity-90 transition-colors text-sm sm:text-base">
            Get Started
          </button>
        </Link>
      </div>
      <HowItWorks />
      <div className="flex justify-center items-center mt-4 sm:hidden">
        <Link
          href="https://imperiumai.ai/getstarted"
          passHref>
          <button className="rounded-xl cursor-pointer py-2 px-3 bg-dark-blue text-broken-white hover:bg-opacity-90 transition-colors text-sm sm:text-base">
            Get Started
          </button>
        </Link>
      </div>
      <AITools />
      <AIPRCopilot />
      <AISocialMedia />
      <AutomateBlog />
      <Testimonials />
      <Featured />
      <Questions />
      <Footer />
    </div>
  );
}
