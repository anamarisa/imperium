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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Functionality />
      <Features />
      <Category />
      <HowItWorks />
      <AITools />
      <AIPRCopilot />
      <AISocialMedia />
      <AutomateBlog />
      <Testimonials />
      <Featured />
      <Questions />
      <Footer />
    </>
  );
}
