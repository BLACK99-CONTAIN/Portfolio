import React, { useState, useEffect } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [rpmLevel, setRpmLevel] = useState(0);

  const skillCategories = [
    { id: "all", name: "ALL SYSTEMS", icon: "⚙️", color: "red" },
    { id: "frontend", name: "FRONTEND", icon: "🎨", color: "blue" },
    { id: "backend", name: "BACKEND", icon: "⚡", color: "green" },
    { id: "database", name: "DATABASE", icon: "🗄️", color: "yellow" },
    { id: "tools", name: "TOOLS", icon: "🔧", color: "purple" },
    { id: "languages", name: "LANGUAGES", icon: "💻", color: "cyan" },
  ];

  const skills = [
    // Frontend
    {
      name: "React.js",
      level: 92,
      category: "frontend",
      icon: "⚛️",
      description: "Advanced component architecture & hooks",
      projects: 4,
      color: "blue",
    },
    {
      name: "HTML5 & CSS3",
      level: 88,
      category: "frontend",
      icon: "🎨",
      description: "Responsive design & semantic HTML",
      projects: 12,
      color: "yellow",
    },
    {
      name: "JavaScript (ES6+)",
      level: 93,
      category: "frontend",
      icon: "📜",
      description: "Modern features & DOM manipulation",
      projects: 10,
      color: "yellow",
    },
    {
      name: "TailwindCSS",
      level: 85,
      category: "frontend",
      icon: "💠",
      description: "Utility-first responsive design",
      projects: 6,
      color: "cyan",
    },

    // Backend
    {
      name: "Node.js",
      level: 90,
      category: "backend",
      icon: "🟢",
      description: "Server-side JavaScript runtime",
      projects: 6,
      color: "green",
    },
    {
      name: "Express.js",
      level: 88,
      category: "backend",
      icon: "🚀",
      description: "REST APIs & middleware framework",
      projects: 5,
      color: "purple",
    },
    {
      name: "Java",
      level: 85,
      category: "backend",
      icon: "☕",
      description: "Core OOP concepts, DSA, and backend logic",
      projects: 8,
      color: "red",
    },

    // Database
    {
      name: "MongoDB",
      level: 90,
      category: "database",
      icon: "🍃",
      description: "NoSQL document database",
      projects: 6,
      color: "green",
    },
    {
      name: "MySQL",
      level: 82,
      category: "database",
      icon: "🗄️",
      description: "Relational database & SQL queries",
      projects: 5,
      color: "yellow",
    },

    // Tools
    {
      name: "Git & GitHub",
      level: 92,
      category: "tools",
      icon: "🐙",
      description: "Version control & collaboration",
      projects: 15,
      color: "gray",
    },
    {
      name: "VS Code",
      level: 95,
      category: "tools",
      icon: "📝",
      description: "Primary development environment",
      projects: 20,
      color: "blue",
    },
    {
      name: "Postman",
      level: 80,
      category: "tools",
      icon: "📮",
      description: "API testing & debugging",
      projects: 7,
      color: "orange",
    },

    // Languages
    {
      name: "C",
      level: 88,
      category: "languages",
      icon: "🔵",
      description: "Low-level programming & DSA",
      projects: 5,
      color: "blue",
    },
    {
      name: "C++",
      level: 86,
      category: "languages",
      icon: "🟦",
      description: "OOP, DSA & competitive programming",
      projects: 6,
      color: "indigo",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      filteredSkills.forEach((skill) => {
        animated[skill.name] = skill.level;
      });
      setAnimatedSkills(animated);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRpmLevel((prev) => {
        const target =
          activeCategory === "all"
            ? 85
            : activeCategory === "frontend"
            ? 88
            : activeCategory === "backend"
            ? 90
            : activeCategory === "database"
            ? 86
            : activeCategory === "tools"
            ? 91
            : 84;
        return prev + (target - prev) * 0.1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [activeCategory]);

  const getSkillRating = (level) => {
    if (level >= 90) return { rating: "EXPERT", color: "red" };
    if (level >= 80) return { rating: "ADVANCED", color: "orange" };
    if (level >= 70) return { rating: "INTERMEDIATE", color: "yellow" };
    return { rating: "BEGINNER", color: "gray" };
  };

  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-mono text-sm ${
              activeCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-black/50 text-gray-400 hover:text-white hover:bg-white/10 border border-gray-600"
            }`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => {
          const rating = getSkillRating(skill.level);
          const animatedLevel = animatedSkills[skill.name] || 0;
          return (
            <div
              key={skill.name}
              className={`p-6 rounded-lg border-l-4 border-${skill.color}-500 bg-gray-800`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-white font-bold">{skill.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full bg-${rating.color}-600/30 text-${rating.color}-400`}
                    >
                      {rating.rating}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-${skill.color}-400 font-bold`}>
                    {skill.level}%
                  </div>
                  <div className="text-xs text-gray-400">
                    {skill.projects} projects
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full bg-${skill.color}-500 transition-all duration-1000`}
                  style={{ width: `${animatedLevel}%` }}
                ></div>
              </div>

              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
