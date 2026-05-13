import { useReveal } from "./lib/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Speakers from "./components/Speakers";
import Coordinators from "./components/Coordinators";
import AboutVIT from "./components/AboutVIT";
import HowToReach from "./components/HowToReach";
import Footer from "./components/Footer";

function App() {
  useReveal();
  return (
    <div className="relative isolate">
      <div id="grain" aria-hidden />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Curriculum />
        <Speakers />
        <Coordinators />
        <AboutVIT />
        <HowToReach />
      </main>
      <Footer />
    </div>
  );
}

export default App;
