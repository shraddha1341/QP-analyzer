import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import logoImage from "@/assets/logo.png";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -20, 20, -20],
              opacity: [0, 1, 0.5, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Background decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"
          animate={{ 
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 flex items-center justify-between p-6 lg:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <motion.img 
            src={logoImage} 
            alt="QA Analyzer Logo" 
            className="w-10 h-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
          <motion.span 
            className="text-white text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            QA Analyzer
          </motion.span>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Hero Section */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Question Quality
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: { duration: 0.8, delay: 0.4 },
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Analysis Platform
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform your educational content with AI-powered question analysis. 
              Discover difficulty levels, cognitive complexity, and quality metrics 
              for better assessment design.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={onStart}
                  size="lg"
                  className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:from-indigo-600 hover:via-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:shadow-2xl hover:shadow-indigo-500/25 border-0 relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Start Analyzing
                    <motion.div
                      className="ml-1"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo Section */}
          <motion.div 
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
              />
              
              {/* Hexagonal container */}
              <motion.div
                className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Hexagonal border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 rounded-full opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                  }}
                />
                
                {/* Inner glow circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 50px rgba(99, 102, 241, 0.3)",
                      "0 0 80px rgba(147, 51, 234, 0.4)",
                      "0 0 50px rgba(34, 211, 238, 0.3)",
                      "0 0 50px rgba(99, 102, 241, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-cyan-500/30 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20"
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.img 
                      src={logoImage} 
                      alt="QA Analyzer" 
                      className="w-48 h-48 lg:w-56 lg:h-56 drop-shadow-2xl"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;