import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
