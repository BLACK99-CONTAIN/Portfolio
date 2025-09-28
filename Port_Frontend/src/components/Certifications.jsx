import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animatedCount, setAnimatedCount] = useState(0);

  const certifications = [
    {
      id: 1,
      title: "AWS Cloud Technical Essentials",
      provider: "Amazon Web Services",
      platform: "Coursera",
      date: "June 2025",
      category: "cloud",
      level: "Intermediate",
      icon: "☁️",
      color: "orange",
      description: "Comprehensive understanding of AWS core services, security, and architecture principles.",
      skills: ["AWS EC2", "S3", "VPC", "IAM", "Cloud Architecture"]
    },
    {
      id: 2,
      title: "Generative AI",
      provider: "Google Cloud",
      platform: "Coursera", 
      date: "July 2025",
      category: "ai",
      level: "Advanced",
      icon: "🤖",
      color: "purple",
      description: "Deep dive into AI model development, machine learning algorithms, and generative AI applications.",
      skills: ["Machine Learning", "Neural Networks", "AI Models", "Google Cloud AI"]
    },
    {
      id: 3,
      title: "Applied Machine Learning in Python",
      provider: "University of Michigan",
      platform: "Coursera",
      date: "May 2025",
      category: "ai",
      level: "Advanced",
      icon: "🐍",
      color: "green",
      description: "Hands-on experience with Python libraries for ML, data preprocessing, and model evaluation.",
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"]
    },
    {
      id: 4,
      title: "SQL",
      provider: "University of Colorado Boulder",
      platform: "Coursera",
      date: "April 2025",
      category: "database",
      level: "Intermediate",
      icon: "🗄️",
      color: "blue",
      description: "Advanced SQL queries, database optimization, and relational database management.",
      skills: ["SQL", "Database Design", "Query Optimization", "Joins", "Indexing"]
    },
    {
      id: 5,
      title: "Relational Database Design",
      provider: "University of Colorado Boulder",
      platform: "Coursera",
      date: "March 2025",
      category: "database",
      level: "Intermediate",
      icon: "🏗️",
      color: "cyan",
      description: "Database normalization, ER diagrams, and efficient database structure design.",
      skills: ["Database Design", "Normalization", "ER Diagrams", "RDBMS"]
    },
    {
      id: 6,
      title: "Introduction to Software Engineering",
      provider: "IBM",
      platform: "Coursera",
      date: "Feb 2025",
      category: "software",
      level: "Beginner",
      icon: "⚙️",
      color: "red",
      description: "Software development lifecycle, version control, and engineering best practices.",
      skills: ["SDLC", "Version Control", "Agile", "Software Testing"]
    },
    {
      id: 7,
      title: "Advanced DB Technologies",
      provider: "University of Colorado Boulder & IBM",
      platform: "Coursera",
      date: "Feb 2025",
      category: "database",
      level: "Advanced",
      icon: "💾",
      color: "indigo",
      description: "NoSQL databases, distributed systems, and modern database technologies.",
      skills: ["NoSQL", "MongoDB", "Distributed Systems", "Big Data"]
    },
    {
      id: 8,
      title: "Algorithms, Part I",
      provider: "Princeton University",
      platform: "Coursera",
      date: "Jan 2025",
      category: "algorithms",
      level: "Advanced",
      icon: "🧮",
      color: "yellow",
      description: "Fundamental algorithms, data structures, and algorithmic thinking.",
      skills: ["Algorithms", "Data Structures", "Complexity Analysis", "Problem Solving"]
    },
    {
      id: 9,
      title: "Collaborate Effectively for Success",
      provider: "IBM",
      platform: "Coursera",
      date: "Jan 2025",
      category: "soft-skills",
      level: "Beginner",
      icon: "🤝",
      color: "pink",
      description: "Team collaboration, communication skills, and project management.",
      skills: ["Team Work", "Communication", "Leadership", "Project Management"]
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL TROPHIES', icon: '🏆', count: certifications.length },
    { id: 'cloud', name: 'CLOUD', icon: '☁️', count: certifications.filter(c => c.category === 'cloud').length },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: certifications.filter(c => c.category === 'ai').length },
    { id: 'database', name: 'DATABASE', icon: '🗄️', count: certifications.filter(c => c.category === 'database').length },
    { id: 'software', name: 'SOFTWARE', icon: '⚙️', count: certifications.filter(c => c.category === 'software').length },
    { id: 'algorithms', name: 'ALGORITHMS', icon: '🧮', count: certifications.filter(c => c.category === 'algorithms').length },
    { id: 'soft-skills', name: 'SOFT SKILLS', icon: '🤝', count: certifications.filter(c => c.category === 'soft-skills').length }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  useEffect(() => {
    // Animate trophy count
    const targetCount = certifications.length;
    const duration = 2000;
    const steps = 30;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setAnimatedCount(targetCount);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'green';
      case 'Intermediate': return 'blue';
      case 'Advanced': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block hud-element p-2 rounded-full mb-4">
            <span className="text-2xl">🏆</span>
          </div>
          <h2 className="text-5xl font-bold glow-text mb-4">TROPHY COLLECTION</h2>
          <p className="text-gray-400 font-mono">Professional Certifications & Achievements</p>
        </div>

        {/* Trophy Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-4xl mb-3 text-yellow-500">🏆</div>
            <div className="text-3xl font-bold text-white font-mono">{animatedCount}</div>
            <div className="text-sm text-gray-400 font-mono">TOTAL TROPHIES</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-4xl mb-3 text-red-500">🥇</div>
            <div className="text-3xl font-bold text-white font-mono">3</div>
            <div className="text-sm text-gray-400 font-mono">ADVANCED LEVEL</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-4xl mb-3 text-blue-500">🎯</div>
            <div className="text-3xl font-bold text-white font-mono">5</div>
            <div className="text-sm text-gray-400 font-mono">TECH DOMAINS</div>
          </div>
          
          <div className="hud-element p-6 rounded-lg text-center">
            <div className="text-4xl mb-3 text-green-500">⭐</div>
            <div className="text-3xl font-bold text-white font-mono">2025</div>
            <div className="text-sm text-gray-400 font-mono">LATEST YEAR</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-black/50 text-gray-400 hover:text-white hover:bg-white/10 border border-gray-600'
              }`}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`hud-element p-6 rounded-lg hover:bg-${cert.color}-600/10 transition-all duration-300 transform hover:scale-105 border-l-4 border-${cert.color}-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <div className={`text-xs px-2 py-1 rounded-full bg-${getLevelColor(cert.level)}-600/30 text-${getLevelColor(cert.level)}-400 font-mono mb-2`}>
                      {cert.level}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-mono">{cert.date}</div>
              </div>

              {/* Title and Provider */}
              <div className="mb-4">
                <h3 className="font-bold text-white mb-2 text-sm leading-tight">{cert.title}</h3>
                <p className={`text-${cert.color}-400 text-xs font-mono mb-1`}>{cert.provider}</p>
                <p className="text-gray-500 text-xs">via {cert.platform}</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs leading-relaxed mb-4">{cert.description}</p>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-xs text-gray-400 font-mono mb-2">SKILLS GAINED:</div>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 rounded-full bg-${cert.color}-600/20 text-${cert.color}-400 text-xs font-mono`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trophy Icon */}
              <div className="text-center">
                <div className={`inline-block p-3 rounded-full bg-${cert.color}-600/20 border-2 border-${cert.color}-500/30`}>
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400 flex items-center justify-center gap-3">
            <span>🎖️</span>
            CERTIFICATION ACHIEVEMENTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learning Path */}
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-lg font-bold text-white mb-2">CONTINUOUS LEARNING</h4>
              <p className="text-sm text-gray-300">
                Consistent skill development across multiple technology domains with focus on emerging technologies.
              </p>
            </div>
            
            {/* Expertise Areas */}
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">EXPERTISE AREAS</h4>
              <p className="text-sm text-gray-300">
                Specialized knowledge in Cloud Computing, AI/ML, Database Systems, and Software Engineering.
              </p>
            </div>
            
            {/* Industry Recognition */}
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-lg font-bold text-white mb-2">INDUSTRY RECOGNITION</h4>
              <p className="text-sm text-gray-300">
                Certifications from leading tech companies and prestigious universities worldwide.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-green-600/20 border border-green-500/30 rounded-lg px-6 py-3">
              <span className="text-green-400 text-2xl animate-pulse">🚀</span>
              <div>
                <div className="text-green-400 font-bold">CERTIFIED & READY</div>
                <div className="text-xs text-gray-400 font-mono">Equipped with industry-standard knowledge</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Certifications */}
        <div className="mt-12 hud-element p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold text-purple-400 mb-4">🎯 UPCOMING CERTIFICATIONS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm font-mono text-white">Advanced AWS Solutions</div>
              <div className="text-xs text-gray-400">Q2 2025</div>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🐳</div>
              <div className="text-sm font-mono text-white">Docker & Kubernetes</div>
              <div className="text-xs text-gray-400">Q3 2025</div>
            </div>
            <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-mono text-white">Cybersecurity Fundamentals</div>
              <div className="text-xs text-gray-400">Q4 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;