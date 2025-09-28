import React, { useState } from 'react';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME', icon: '🏁' },
    { id: 'about', label: 'DRIVER', icon: '👤' },
    { id: 'skills', label: 'SPECS', icon: '⚙️' },
    { id: 'projects', label: 'RACES', icon: '🏆' },
    { id: 'experience', label: 'CAREER', icon: '📈' },
    { id: 'certifications', label: 'TROPHIES', icon: '🥇' },
    { id: 'contact', label: 'PIT STOP', icon: '📞' },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-500">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl animate-pulse">🏎️</div>
            <div>
              <h1 className="text-xl font-bold glow-text">PARANTACK DAS</h1>
              <p className="text-xs text-red-400 font-mono">SOFTWARE ENGINEER</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-mono transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400 animate-pulse"></div>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-red-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </button>
            ))}
          </nav>

          {/* Speed indicator */}
          <div className="hidden lg:block hud-element px-3 py-1 rounded text-xs font-mono">
            <div className="text-green-400">● ONLINE</div>
            <div className="text-xs text-gray-400">LAP: {activeSection.toUpperCase()}</div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-red-400 transition-colors"
          >
            <div className="w-6 h-6 relative">
              <span className={`block absolute h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="bg-black/80 backdrop-blur-md rounded-lg border border-red-500/30">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-4 py-3 text-left text-sm font-mono transition-all duration-300 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                } ${index === 0 ? 'rounded-t-lg' : ''} ${index === navItems.length - 1 ? 'rounded-b-lg' : 'border-b border-red-500/20'}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="ml-auto text-xs text-red-400">ACTIVE</span>
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Racing stripe decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
    </header>
  );
};

export default Header;