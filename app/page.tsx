import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ContentHub from "@/components/content-hub";
import Achievements from "@/components/achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Experience /> */}
      {/* <Achievements /> */}
      {/* <ContentHub /> */}
      <Contact />
    </main>
  );
}
