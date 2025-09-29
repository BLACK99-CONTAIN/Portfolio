import React, { useState, useEffect } from 'react';
// Add this import at the top of your Hero.jsx file
import profilePhoto from '../assets/images/profile.jpg';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isRacing, setIsRacing] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);

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
    <div className="min-h-screen flex flex-col justify-start relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-20">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </div>

      <div className="text-center z-10 px-6 w-full max-w-6xl mx-auto">
        {/* Professional Photo Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 opacity-75 blur-2xl animate-pulse"></div>
            
            <div className="absolute -inset-2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500" style={{ animation: 'spin 3s linear infinite' }}></div>
            </div>
            
            <div className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-black shadow-2xl transition-all duration-1000 ${
              photoLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}>
              <img 
                src={profilePhoto}
                alt="Parantack Das - Software Engineer" 
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                onLoad={() => setPhotoLoaded(true)}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="hud-element px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 hud-element p-2 rounded-lg animate-bounce" style={{ animationDelay: '0s' }}>
              <span className="text-xl">⚛️</span>
            </div>
            <div className="absolute -top-4 -right-4 hud-element p-2 rounded-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="text-xl">🟢</span>
            </div>
            <div className="absolute -bottom-4 -left-4 hud-element p-2 rounded-lg animate-bounce" style={{ animationDelay: '0.4s' }}>
              <span className="text-xl">🍃</span>
            </div>
            <div className="absolute -bottom-4 -right-4 hud-element p-2 rounded-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
              <span className="text-xl">🔥</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="inline-block hud-element p-2 rounded-full mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text tracking-wider">
            PARANTACK
            <div className="text-red-500">DAS</div>
          </h1>
        </div>

        <div className="mb-12 h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-mono text-red-400 animate-pulse">
            &gt; {titles[currentTitle]}_
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="hud-element p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-red-400">4+</div>
            <div className="text-xs text-gray-400 font-mono">YEARS CODING</div>
          </div>
          <div className="hud-element p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-green-400">15+</div>
            <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
          </div>
          <div className="hud-element p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-blue-400">8.60</div>
            <div className="text-xs text-gray-400 font-mono">CGPA</div>
          </div>
          <div className="hud-element p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-yellow-400">9+</div>
            <div className="text-xs text-gray-400 font-mono">CERTIFICATES</div>
          </div>
        </div>

        <div className="mb-12 relative h-20">
          <div className={`text-4xl transition-all duration-2000 ${isRacing ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
            🏎️
          </div>
          
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

        <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
          <div className="hud-element px-3 py-1 rounded hover:bg-red-600/20 transition-colors duration-300">
            <span className="text-gray-400">📧</span> dasparantack@gmail.com
          </div>
          <div className="hud-element px-3 py-1 rounded hover:bg-blue-600/20 transition-colors duration-300">
            <span className="text-gray-400">📱</span> +91 8768136339
          </div>
          <div className="hud-element px-3 py-1 rounded hover:bg-green-600/20 transition-colors duration-300">
            <span className="text-gray-400">📍</span> Kolkata, WB
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 animate-bounce">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-40 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

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