import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Certifications from "@/components/home/Certifications";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import ResumeCTA from "@/components/home/ResumeCTA";
import ContactForm from "@/components/home/ContactForm";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <main className="bg-white text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="about"><AboutSnapshot /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <Certifications />
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <ResumeCTA />
      {/* <SocialConnect /> */}
      <div id="contact"><ContactForm /></div>
      <Footer />
    </main>
  );
}
