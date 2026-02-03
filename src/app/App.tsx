import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1729] to-[#1a1f3a] text-white overflow-x-hidden smooth-scroll">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
