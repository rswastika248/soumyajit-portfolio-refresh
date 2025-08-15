import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperLoader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingSteps = [
    "$ npm run dev",
    "Loading components...",
    "Compiling React App...",
    "Building for production...",
    "Initializing Portfolio..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepTimer);
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
    >
      <div className="max-w-md w-full mx-auto px-6">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-muted px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-muted-foreground font-mono">
              terminal
            </div>
          </div>

          {/* Terminal Content */}
          <div className="bg-card p-6 h-64 font-mono text-sm">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-primary">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4"
                >
                  ⚙️
                </motion.div>
                <span className="text-lg font-bold">Initializing Portfolio</span>
              </div>
            </div>

            {/* Loading Steps */}
            <div className="space-y-2 mb-6">
              {loadingSteps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">✓</span>
                  <span className="text-muted-foreground">{step}</span>
                  {index === currentStep && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentStep >= 3 ? 1 : 0 }}
              className="text-xs text-muted-foreground"
            >
              <div className="text-blue-400">const</div>
              <div className="ml-2">
                <span className="text-yellow-400">portfolio</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">await</span>
                <span className="text-blue-400"> loadDeveloper</span>
                <span className="text-white">()</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Developer Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <span className="text-lg">👨‍💻</span>
            Developer Portfolio Loading...
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DeveloperLoader;