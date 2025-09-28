import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [careerStats, setCareerStats] = useState({
    totalExperience: 0,
    projectsCompleted: 0,
    technologiesUsed: 0,
    teamLeadership: 0
  });

  const experiences = [
    {
      id: 1,
      title: "RPA Project Lead",
      company: "Employability.life",
      period: "Nov 2024 – Feb 2025",
      duration: "3 months",
      type: "Leadership Role",
      status: "🏆 COMPLETED",
      location: "Remote",
      icon: "🤖",
      color: "red",
      description: "Led a cross-functional team in developing robotic process automation solutions using UiPath. Coordinated project deliverables, managed stakeholder communications, and ensured quality standards.",
      keyAchievements: [
        "Led a team of 5 developers as Joint Project Leader",
        "Delivered 3 major automation workflows on schedule",
        "Reduced manual processing time by 60%",
        "Implemented quality assurance protocols",
        "Coordinated with multiple stakeholders and clients"
      ],
      technologies: ["UiPath", "Process Automation", "Workflow Design", "Project Management"],
      learnings: [
        "Advanced team leadership and coordination skills",
        "RPA development lifecycle management",
        "Stakeholder communication and expectation management",
        "Quality assurance in automation projects"
      ],
      metrics: {
        teamSize: 5,
        projectsDelivered: 3,
        automationEfficiency: 60,
        clientSatisfaction: 95
      }
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "Cipherbyte Technologies",
      period: "June 2024",
      duration: "1 month",
      type: "Internship",
      status: "✅ CERTIFIED",
      location: "Remote",
      icon: "💻",
      color: "blue",
      description: "Intensive full-stack web development training with focus on modern web technologies. Gained hands-on experience in frontend and backend integration.",
      keyAchievements: [
        "Completed certified full-stack web development program",
        "Built responsive web applications using modern frameworks",
        "Implemented backend API integration",
        "Achieved 100% completion rate for all assigned tasks",
        "Received certificate of excellence in web development"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js"],
      learnings: [
        "Modern web development best practices",
        "Responsive design principles",
        "Backend integration techniques",
        "Professional development workflow"
      ],
      metrics: {
        coursesCompleted: 8,
        projectsBuilt: 5,
        certificationScore: 95,
        practicalHours: 120
      }
    }
  ];

  const careerTimeline = [
    { year: "2022", event: "Started B.Tech CSE", type: "education", icon: "🎓" },
    { year: "2023", event: "First Web Project", type: "project", icon: "🌐" },
    { year: "2024 Jun", event: "Web Dev Intern", type: "work", icon: "💼" },
    { year: "2024 Nov", event: "RPA Project Lead", type: "work", icon: "🤖" },
    { year: "2025", event: "Advanced Certifications", type: "learning", icon: "📜" },
    { year: "2026", event: "Graduation & Career", type: "future", icon: "🚀" }
  ];

  const currentExperience = experiences[activeExperience];

  useEffect(() => {
    // Animate career stats
    const targetStats = {
      totalExperience: 4,
      projectsCompleted: 15,
      technologiesUsed: 12,
      teamLeadership: 5
    };

    const animateStats = () => {
      Object.keys(targetStats).forEach(key => {
        let current = 0;
        const target = targetStats[key];
        const increment = target / 30;
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCareerStats(prev => ({ ...prev, [key]: target }));
            clearInterval(interval);
          } else {
            setCareerStats(prev => ({ ...prev, [key]: Math.floor(current) }));
          }
        }, 50);
      });
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Timeline progress animation
    const interval = setInterval(() => {
      setTimelineProgress(prev => (prev + 0.5) % 101);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getExperienceType = (type) => {
    const types = {
      'Leadership Role': { color: 'red', icon: '👑' },
      'Internship': { color: 'blue', icon: '🎯' },
      'Project': { color: 'green', icon: '🔧' },
      'Freelance': { color: 'purple', icon: '💼' }
    };
    return types[type] || types['Project'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block hud-element p-2 rounded-full mb-4">
            <span className="text-2xl">📈</span>
          </div>
          <h2 className="text-5xl font-bold glow-text mb-4">RACING CAREER</h2>
          <p className="text-gray-400 font-mono">Professional Journey & Achievements</p>
        </div>

        {/* Career Statistics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-red-500">⏱️</div>
            <div className="text-2xl font-bold text-white font-mono">{careerStats.totalExperience}+</div>
            <div className="text-sm text-gray-400 font-mono">MONTHS EXPERIENCE</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-green-500">🏆</div>
            <div className="text-2xl font-bold text-white font-mono">{careerStats.projectsCompleted}+</div>
            <div className="text-sm text-gray-400 font-mono">PROJECTS COMPLETED</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-blue-500">⚙️</div>
            <div className="text-2xl font-bold text-white font-mono">{careerStats.technologiesUsed}+</div>
            <div className="text-sm text-gray-400 font-mono">TECHNOLOGIES</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-yellow-500">👥</div>
            <div className="text-2xl font-bold text-white font-mono">{careerStats.teamLeadership}</div>
            <div className="text-sm text-gray-400 font-mono">TEAM MEMBERS LED</div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-400 flex items-center justify-center gap-3">
            <span>🏁</span>
            CAREER RACE TRACK
          </h3>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-gray-700 rounded-full">
              <div 
                className="h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full transition-all duration-100"
                style={{ width: `${timelineProgress}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {careerTimeline.map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-4 border-${item.type === 'future' ? 'gray' : 'blue'}-500 bg-black flex items-center justify-center text-2xl ${
                    item.type === 'future' ? 'opacity-50' : ''
                  }`}>
                    {item.icon}
                  </div>
                  <div className="text-xs font-mono text-white mb-1">{item.year}</div>
                  <div className={`text-xs ${item.type === 'future' ? 'text-gray-500' : 'text-gray-300'}`}>
                    {item.event}
                  </div>
                  {item.type === 'work' && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Details */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Experience Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🏎️</span>
              RACE HISTORY
            </h3>
            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 border-2 ${
                    activeExperience === index
                      ? `border-${exp.color}-500 bg-${exp.color}-600/20`
                      : 'border-gray-600 bg-black/30 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{exp.icon}</span>
                    <div className="flex-1">
                      <div className="font-mono text-sm text-white truncate">
                        {exp.title}
                      </div>
                      <div className="text-xs text-gray-400">{exp.company}</div>
                    </div>
                  </div>
                  <div className="text-xs text-center mb-2">
                    <span className={`px-2 py-1 rounded-full bg-${exp.color}-600/30 text-${exp.color}-400 font-mono`}>
                      {exp.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 text-center">{exp.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-3">
            <div className="hud-element p-8 rounded-lg">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <span className="text-5xl">{currentExperience.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {currentExperience.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-mono">{currentExperience.company}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                      <span>📅 {currentExperience.period}</span>
                      <span>📍 {currentExperience.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-4 py-2 rounded-lg bg-${currentExperience.color}-600/30 text-${currentExperience.color}-400 font-mono text-sm`}>
                    {currentExperience.status}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full bg-${getExperienceType(currentExperience.type).color}-600/30 text-${getExperienceType(currentExperience.type).color}-400`}>
                    {getExperienceType(currentExperience.type).icon} {currentExperience.type}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>📋</span>
                  MISSION BRIEFING
                </h4>
                <p className="text-gray-300 leading-relaxed">{currentExperience.description}</p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>🏆</span>
                  KEY ACHIEVEMENTS
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {currentExperience.keyAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                      <div className={`w-2 h-2 bg-${currentExperience.color}-500 rounded-full mt-2 animate-pulse`}></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>⚙️</span>
                  TECH ARSENAL
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentExperience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full bg-${currentExperience.color}-600/20 border border-${currentExperience.color}-500/30 text-${currentExperience.color}-400 text-sm font-mono`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>📊</span>
                  PERFORMANCE METRICS
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(currentExperience.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-3 bg-black/30 rounded-lg">
                      <div className={`text-2xl font-bold text-${currentExperience.color}-400 mb-1`}>
                        {typeof value === 'number' && value > 50 ? `${value}%` : value}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>🧠</span>
                  KEY LEARNINGS
                </h4>
                <div className="space-y-3">
                  {currentExperience.learnings.map((learning, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/30">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 text-sm">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Development Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills Growth */}
          <div className="hud-element p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">📈</span>
              TECHNICAL SKILLS GROWTH
            </h3>
            
            <div className="space-y-4">
              {[
                { skill: 'Team Leadership', before: 60, after: 92, color: 'red' },
                { skill: 'Project Management', before: 45, after: 88, color: 'blue' },
                { skill: 'Process Automation', before: 20, after: 85, color: 'green' },
                { skill: 'Client Communication', before: 70, after: 90, color: 'yellow' },
                { skill: 'Technical Documentation', before: 65, after: 87, color: 'purple' }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-black/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-mono text-sm">{item.skill}</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-400">{item.before}%</span>
                      <span className="text-gray-500">→</span>
                      <span className={`text-${item.color}-400 font-bold`}>{item.after}%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Before</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gray-500 transition-all duration-1000"
                          style={{ width: `${item.before}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">After</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-${item.color}-500 transition-all duration-1000`}
                          style={{ width: `${item.after}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-600/20 text-${item.color}-400`}>
                      +{item.after - item.before}% Growth
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Impact */}
          <div className="hud-element p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              CAREER IMPACT
            </h3>

            <div className="space-y-6">
              <div className="text-center p-4 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-lg font-bold text-white">Leadership Excellence</div>
                <div className="text-sm text-gray-300 mt-2">
                  Successfully led cross-functional teams and delivered high-impact projects
                </div>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-500/30">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-lg font-bold text-white">Technical Mastery</div>
                <div className="text-sm text-gray-300 mt-2">
                  Gained expertise in cutting-edge automation and web technologies
                </div>
              </div>

              <div className="text-center p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border border-green-500/30">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-lg font-bold text-white">Industry Recognition</div>
                <div className="text-sm text-gray-300 mt-2">
                  Certified by leading technology companies and platforms
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30">
              <div className="text-center">
                <div className="text-purple-400 text-sm font-mono mb-2 flex items-center justify-center gap-2">
                  <span className="animate-pulse">🌟</span>
                  CAREER TRAJECTORY
                </div>
                <div className="text-xs text-gray-300">
                  From foundation learning to team leadership - consistently growing and taking on greater responsibilities.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="hud-element p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center justify-center gap-3">
            <span>🗺️</span>
            FUTURE RACE STRATEGY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-lg font-bold text-white mb-2">IMMEDIATE GOALS</div>
              <div className="text-sm text-gray-400 font-mono mb-4">Q1-Q2 2025</div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Complete advanced AWS certifications
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Land full-time software engineer role
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Lead larger development teams
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-4xl mb-4">🚀</div>
              <div className="text-lg font-bold text-white mb-2">MID-TERM VISION</div>
              <div className="text-sm text-gray-400 font-mono mb-4">2025-2026</div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Specialize in cloud architecture
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Build enterprise-level applications
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Mentor junior developers
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-lg font-bold text-white mb-2">LONG-TERM ASPIRATIONS</div>
              <div className="text-sm text-gray-400 font-mono mb-4">2026+</div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  Technical leadership roles
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Contribute to open-source projects
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Innovation in emerging technologies
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/30">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-green-400 text-3xl animate-bounce">🏁</span>
              <div>
                <div className="text-green-400 font-bold text-lg">READY FOR THE NEXT LAP</div>
                <div className="text-sm text-gray-400">Continuously evolving, always racing ahead</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400">COMMITMENT</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">∞</div>
                <div className="text-xs text-gray-400">LEARNING</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400">DEDICATION</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;