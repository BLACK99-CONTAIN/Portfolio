import React, { useState, useEffect } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [animatedStats, setAnimatedStats] = useState({
    cgpa: 0,
    projects: 0,
    experience: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targetStats = { cgpa: 8.60, projects: 15, experience: 4 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        const progress = currentStep / steps;
        setAnimatedStats({
          cgpa: Math.min(targetStats.cgpa * progress, targetStats.cgpa).toFixed(2),
          projects: Math.min(Math.floor(targetStats.projects * progress), targetStats.projects),
          experience: Math.min(Math.floor(targetStats.experience * progress), targetStats.experience)
        });
        
        currentStep++;
        if (currentStep > steps) clearInterval(interval);
      }, stepDuration);
    };

    animateStats();
  }, []);

  const tabs = [
    { id: 'profile', label: 'DRIVER PROFILE', icon: '👤' },
    { id: 'stats', label: 'RACE STATS', icon: '📊' },
    { id: 'education', label: 'TRAINING', icon: '🎓' }
  ];

  const skills = [
    { name: 'Problem Solving', level: 95, color: 'red' },
    { name: 'Team Collaboration', level: 90, color: 'blue' },
    { name: 'Backend Development', level: 88, color: 'green' },
    { name: 'Project Management', level: 85, color: 'yellow' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block hud-element p-2 rounded-full mb-4">
            <span className="text-2xl">🏎️</span>
          </div>
          <h2 className="text-5xl font-bold glow-text mb-4">DRIVER PROFILE</h2>
          <p className="text-gray-400 font-mono">Know Your Racing Engineer</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/50 rounded-lg p-1 border border-red-500/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-mono text-sm rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-red-600/20'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {activeTab === 'profile' && (
              <>
                <div className="hud-element p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    MISSION OBJECTIVE
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Motivated and detail-oriented Computer Science student with hands-on experience in 
                    backend development using the MERN stack. Skilled in designing and developing 
                    scalable backend systems, APIs, and full-stack applications.
                  </p>
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-red-400 font-mono text-sm">
                      "Eager to contribute technical expertise, strong problem-solving abilities, 
                      and a growth mindset to a forward-thinking organization."
                    </p>
                  </div>
                </div>

                <div className="hud-element p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🌟</span>
                    CORE STRENGTHS
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-mono">{skill.name}</span>
                          <span className="text-sm font-mono text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-${skill.color}-500 transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'stats' && (
              <>
                <div className="hud-element p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">📈</span>
                    PERFORMANCE METRICS
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-500 mb-2 font-mono">
                        {animatedStats.cgpa}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">CURRENT CGPA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-500 mb-2 font-mono">
                        {animatedStats.projects}+
                      </div>
                      <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-500 mb-2 font-mono">
                        {animatedStats.experience}+
                      </div>
                      <div className="text-xs text-gray-400 font-mono">YEARS</div>
                    </div>
                  </div>
                </div>

                <div className="hud-element p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🏆</span>
                    ACHIEVEMENTS
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">RPA Project Lead - Led team as Joint Project Leader</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Web Development Intern - Certified training completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">8+ Professional Certifications</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'education' && (
              <>
                <div className="hud-element p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎓</span>
                    EDUCATION TRACK
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-500 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">B. Tech Computer Science</h4>
                        <span className="text-xs text-gray-400 font-mono">2022-2026</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Sister Nivedita University, WB</p>
                      <p className="text-green-400 font-mono text-sm">CGPA: 8.60 (7th Semester)</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">Higher Secondary</h4>
                        <span className="text-xs text-gray-400 font-mono">2020-2022</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Brahmanpara Chintamoni Institution</p>
                      <p className="text-blue-400 font-mono text-sm">Score: 79.8%</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">Secondary</h4>
                        <span className="text-xs text-gray-400 font-mono">2020</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Brahmanpara High School</p>
                      <p className="text-green-400 font-mono text-sm">Score: 82%</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Personal Details */}
            <div className="hud-element p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                DRIVER INFO
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-mono">Email:</span>
                  <span className="text-white">dasparantack@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-mono">Mobile:</span>
                  <span className="text-white">+91 8768136339</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-mono">Location:</span>
                  <span className="text-white">Kolkata, WB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-mono">Languages:</span>
                  <span className="text-white">English, Hindi, Bengali</span>
                </div>
                <div className="pt-4 border-t border-gray-600">
                  <a 
                    href="https://www.linkedin.com/in/parantack-das-087149255/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm"
                  >
                    🔗 LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Racing Spirit */}
            <div className="hud-element p-8 rounded-lg text-center">
              <div className="text-6xl mb-4 animate-bounce">🏁</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">RACING SPIRIT</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                "In the world of coding, like in Formula 1, it's not just about speed - 
                it's about precision, strategy, and the relentless pursuit of perfection. 
                Every line of code is a turn on the track, every bug fix is a pit stop, 
                and every successful deployment is a victory lap."
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;