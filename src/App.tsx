import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";
import ProjectsCarousel from "./components/ProjectsCarousel";





function App() {
  

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 ">
      <div className="pointer-events-none absolute inset-0 `bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]`" />

    
      <Hero />
      <AboutMe />
      <MySkills />
      <ProjectsCarousel />
      <Contact />
    </div>
  );
}

export default App
