import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Simulate loading time for F1 engine startup
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App bg-black text-white overflow-x-hidden">
      {/* Racing track pattern background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="racing-stripes"></div>
      </div>

      {/* Header with HUD styling */}
      <Header activeSection={activeSection} />

      {/* Main content */}
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        
        <section id="certifications" className="min-h-screen">
          <Certifications />
        </section>
        
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      {/* Speed indicator */}
      <div className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full font-mono text-sm z-50">
        <div className="animate-pulse">
          {activeSection.toUpperCase()}
        </div>
      </div>

      {/* Circuit lines */}
      <div className="fixed top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-transparent opacity-20"></div>
      <div className="fixed top-0 right-0 w-2 h-full bg-gradient-to-b from-red-500 to-transparent opacity-20"></div>
    </div>
  );
}

export default App;