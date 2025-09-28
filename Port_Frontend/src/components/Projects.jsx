import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Quiz App with AI-Enhanced Explanations",
      period: "July 2025",
      status: "🥇 CHAMPION",
      type: "Full-Stack Application",
      tech: ["React", "Express", "MongoDB", "OpenAI API"],
      description: "Developed a full-stack quiz platform with role-based access control using React, Express, and MongoDB. Integrated OpenAI's API to generate dynamic quiz content and provide post-quiz chatbot explanations.",
      features: [
        "Role-based authentication system",
        "Dynamic quiz generation with AI",
        "Real-time scoring and analytics",
        "Intelligent post-quiz explanations",
        "Responsive mobile-first design"
      ],
      link: "https://quiz-app-frontend-d6z1.onrender.com/",
      github: "https://github.com/BLACK99-CONTAIN",
      image: "🧠",
      color: "red",
      difficulty: "Expert",
      performance: 95
    },
    {
      id: 2,
      title: "Uber Clone Website",
      period: "Mar 2025 – Jun 2025",
      status: "🥈 RUNNER-UP",
      type: "MERN Stack Application",
      tech: ["MongoDB", "Express", "React", "Node.js", "Maps API"],
      description: "Built a ride-sharing website using the MERN stack, with responsive UI, real-time map APIs, and driver-passenger interaction logic.",
      features: [
        "Real-time GPS tracking",
        "Driver-passenger matching algorithm",
        "Payment integration system",
        "Route optimization",
        "Live ride tracking"
      ],
      link: "#",
      github: "https://github.com/BLACK99-CONTAIN",
      image: "🚗",
      color: "blue",
      difficulty: "Advanced",
      performance: 92
    },
    {
      id: 3,
      title: "Bookstore App Backend",
      period: "Feb 2025 – Mar 2025",
      status: "🥉 PODIUM FINISH",
      type: "Backend API",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      description: "Designed and implemented REST APIs using Node.js, Express, and MongoDB for a bookstore application.",
      features: [
        "RESTful API architecture",
        "JWT authentication",
        "CRUD operations for books",
        "User management system",
        "Order processing workflow"
      ],
      link: "#",
      github: "https://github.com/BLACK99-CONTAIN",
      image: "📚",
      color: "green",
      difficulty: "Intermediate",
      performance: 88
    },
    {
      id: 4,
      title: "Moving Average Crossover Strategy",
      period: "Apr 2025 – Present",
      status: "🏃 IN PROGRESS",
      type: "Trading Algorithm",
      tech: ["Pine Script", "TradingView", "Technical Analysis"],
      description: "Created and backtested an automated trading strategy using Pine Script on TradingView.",
      features: [
        "Moving average crossover signals",
        "Risk management system",
        "Backtesting framework",
        "Performance analytics",
        "Alert system integration"
      ],
      link: "#",
      github: "https://github.com/BLACK99-CONTAIN",
      image: "📈",
      color: "yellow",
      difficulty: "Advanced",
      performance: 90
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block hud-element p-2 rounded-full mb-4">
            <span className="text-2xl">🏆</span>
          </div>
          <h2 className="text-5xl font-bold glow-text mb-4">RACING CHAMPIONSHIPS</h2>
          <p className="text-gray-400 font-mono">Project Portfolio & Achievements</p>
        </div>

        {/* Championship Podium */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Project Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🏁</span>
              RACE CALENDAR
            </h3>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 border-2 ${
                    selectedProject === index
                      ? `border-${project.color}-500 bg-${project.color}-600/20`
                      : 'border-gray-600 bg-black/30 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{project.image}</span>
                    <div className="flex-1">
                      <div className="font-mono text-sm text-white truncate">
                        {project.title}
                      </div>
                      <div className="text-xs text-gray-400">{project.period}</div>
                    </div>
                  </div>
                  <div className="text-xs text-center">
                    <span className={`px-2 py-1 rounded-full bg-${project.color}-600/30 text-${project.color}-400 font-mono`}>
                      {project.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-3">
            <div className="hud-element p-8 rounded-lg">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <span className="text-5xl">{currentProject.image}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm">{currentProject.type}</p>
                    <p className="text-gray-500 font-mono text-xs">{currentProject.period}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-4 py-2 rounded-lg bg-${currentProject.color}-600/30 text-${currentProject.color}-400 font-mono text-sm`}>
                    {currentProject.status}
                  </div>
                  <div className="text-xs text-gray-400">
                    Performance: {currentProject.performance}%
                  </div>
                </div>
              </div>

              {/* Performance Meter */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-gray-400">PROJECT PERFORMANCE</span>
                  <span className="text-sm font-mono text-white">{currentProject.performance}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-4 rounded-full bg-gradient-to-r from-${currentProject.color}-500 to-${currentProject.color}-400 transition-all duration-1000 relative`}
                    style={{ width: `${currentProject.performance}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>⚙️</span>
                  TECH SPECIFICATIONS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full bg-${currentProject.color}-600/20 border border-${currentProject.color}-500/30 text-${currentProject.color}-400 text-sm font-mono`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>📋</span>
                  RACE SUMMARY
                </h4>
                <p className="text-gray-300 leading-relaxed">{currentProject.description}</p>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span>🏆</span>
                  KEY FEATURES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${currentProject.color}-500 rounded-full animate-pulse`}></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {currentProject.link !== "#" && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`f1-button bg-${currentProject.color}-600 hover:bg-${currentProject.color}-700 px-6 py-3 rounded-lg font-mono text-center transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <span>🚀</span>
                    LIVE DEMO
                  </a>
                )}
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hud-element px-6 py-3 rounded-lg font-mono text-center hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>📂</span>
                  SOURCE CODE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Championship Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-red-500">🥇</div>
            <div className="text-xl font-bold text-white mb-1">4</div>
            <div className="text-sm text-gray-400 font-mono">MAJOR PROJECTS</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-blue-500">⚡</div>
            <div className="text-xl font-bold text-white mb-1">91%</div>
            <div className="text-sm text-gray-400 font-mono">AVG PERFORMANCE</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-green-500">🏁</div>
            <div className="text-xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-gray-400 font-mono">COMPLETED RACES</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-3xl mb-3 text-yellow-500">🚀</div>
            <div className="text-xl font-bold text-white mb-1">1</div>
            <div className="text-sm text-gray-400 font-mono">IN PROGRESS</div>
          </div>
        </div>

        {/* Next Race Preview */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">🏁 NEXT CHAMPIONSHIP</h3>
          <p className="text-gray-300 mb-6">
            Currently developing advanced projects with cutting-edge technologies including AI/ML integration,
            microservices architecture, and cloud-native applications.
          </p>
          <div className="inline-flex items-center gap-2 text-purple-400 font-mono">
            <span className="animate-pulse">🔄</span>
            PREPARING FOR NEXT RACE...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;