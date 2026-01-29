import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Give some top padding to ensure navbar is not touching the browser chrome */}
      <header className="pt-5">
        <Navbar />
      </header>

      {/* page content placeholder */}
      <main className="p-6">
      <HeroSection />
      <TechStack />
      <About />
      <Skill />

      <Project />
      <Contact />
        {/* content */}
      <Footer />
      </main>
    </div>
  );
}

export default App;
