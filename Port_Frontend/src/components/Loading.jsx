import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loadingText, setLoadingText] = useState('INITIALIZING ENGINE...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messages = [
      'INITIALIZING ENGINE...',
      'WARMING UP TIRES...',
      'CHECKING TELEMETRY...',
      'READY FOR RACE!'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length - 1) {
        currentIndex++;
        setLoadingText(messages[currentIndex]);
      }
    }, 750);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Background racing track */}
      <div className="absolute inset-0 opacity-10">
        <div className="racing-stripes"></div>
      </div>

      {/* Main loading content */}
      <div className="text-center relative z-10">
        {/* F1 Car Animation */}
        <div className="mb-12 relative">
          <div className="f1-car text-6xl">
            🏎️
          </div>
          
          {/* Speed lines behind car */}
          <div className="absolute top-8 left-0 w-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="speed-line h-1 bg-red-500 mb-2 opacity-60"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Engine sound visualization */}
        <div className="mb-8 flex justify-center items-center space-x-2">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-red-500 engine-rev`}
              style={{
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${i * 0.05}s`
              }}
            ></div>
          ))}
        </div>

        {/* Loading text with glow effect */}
        <h1 className="text-2xl font-bold mb-8 glow-text animate-pulse">
          {loadingText}
        </h1>

        {/* Progress bar */}
        <div className="w-80 h-4 bg-gray-800 rounded-full mx-auto mb-6 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
            {progress}%
          </div>
        </div>

        {/* RPM Gauge */}
        <div className="relative w-32 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-700 rounded-t-full border-b-0"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-12 bg-red-500 origin-bottom transform -translate-x-0.5 rpm-gauge"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs">
            RPM
          </div>
        </div>

        {/* Tire smoke effects */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="tire-smoke w-8 h-8 bg-gray-400 rounded-full absolute opacity-60"
              style={{
                left: `${i * 20}px`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-red-500"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-red-500"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-red-500"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-red-500"></div>
    </div>
  );
};

export default Loading;