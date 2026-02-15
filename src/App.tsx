import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LeetCodeStats from './components/LeetCodeStats';


function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <LeetCodeStats />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
