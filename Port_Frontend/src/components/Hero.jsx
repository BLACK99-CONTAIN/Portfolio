import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isRacing, setIsRacing] = useState(false);

  const titles = [
    "FULL STACK DEVELOPER",
    "BACKEND SPECIALIST", 
    "MERN STACK EXPERT",
    "SOFTWARE ENGINEER"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const raceInterval = setInterval(() => {
      setIsRacing(true);
      setTimeout(() => setIsRacing(false), 2000);
    }, 8000);

    return () => clearInterval(raceInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background circuit */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      {/* Racing track outline */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-6">
        {/* Driver introduction */}
        <div className="mb-12">
          <div className="inline-block hud-element p-2 rounded-full mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text tracking-wider">
            PARANTACK
            <div className="text-red-500">DAS</div>
          </h1>
        </div>

        {/* Dynamic title with typewriter effect */}
        <div className="mb-12 h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-mono text-red-400 animate-pulse">
            &gt; {titles[currentTitle]}_
          </h2>
        </div>

        {/* Stats HUD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="hud-element p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-400">4+</div>
            <div className="text-xs text-gray-400 font-mono">YEARS CODING</div>
          </div>
          <div className="hud-element p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">15+</div>
            <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
          </div>
          <div className="hud-element p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-400">8.60</div>
            <div className="text-xs text-gray-400 font-mono">CGPA</div>
          </div>
          <div className="hud-element p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-400">8+</div>
            <div className="text-xs text-gray-400 font-mono">CERTIFICATES</div>
          </div>
        </div>

        {/* F1 Car Animation */}
        <div className="mb-12 relative h-20">
          <div className={`text-4xl transition-all duration-2000 ${isRacing ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
            🏎️
          </div>
          
          {/* Tire marks */}
          <div className="absolute bottom-0 left-0 w-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="inline-block w-2 h-1 bg-gray-600 mx-1 opacity-50"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToAbout}
            className="f1-button px-8 py-4 rounded-lg font-mono text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">START ENGINE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          
          <a 
            href="https://github.com/BLACK99-CONTAIN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hud-element px-8 py-4 rounded-lg font-mono text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>📊</span>
            VIEW TELEMETRY
          </a>
        </div>

        {/* Contact Info HUD */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
          <div className="hud-element px-3 py-1 rounded">
            <span className="text-gray-400">📧</span> dasparantack@gmail.com
          </div>
          <div className="hud-element px-3 py-1 rounded">
            <span className="text-gray-400">📱</span> +91 8768136339
          </div>
          <div className="hud-element px-3 py-1 rounded">
            <span className="text-gray-400">📍</span> Kolkata, WB
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-bounce">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-1000">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-40 animate-bounce delay-500">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-red-400">
          <div className="text-xs font-mono mb-2">SCROLL TO RACE</div>
          <div className="text-xl">⬇️</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;