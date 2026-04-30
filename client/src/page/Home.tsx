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
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />

      <section id="about"><AboutSnapshot /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section><Certifications /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section><ResumeCTA /></section>
      <section id="contact"><ContactForm /></section>

      <Footer />
    </main>
  );
}