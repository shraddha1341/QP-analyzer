import { Button } from "./ui/button";
import logoImage from "@/assets/logo.png";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <img src={logoImage} alt="QA Analyzer Logo" className="w-10 h-10" />
          <span className="text-white text-xl font-bold">QA Analyzer</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Question Quality
              <span className="block bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Analysis Platform
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Transform your educational content with AI-powered question analysis. 
              Discover difficulty levels, cognitive complexity, and quality metrics 
              for better assessment design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onStart}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Analyzing
              </Button>
            </div>

          </div>

          {/* Right Content - Decorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Large Logo/Icon */}
              <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-full backdrop-blur-md flex items-center justify-center">
                <img src={logoImage} alt="QA Analyzer" className="w-48 h-48 drop-shadow-2xl" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl rotate-12 animate-bounce shadow-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-2xl"></div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl -rotate-12 animate-bounce delay-1000 shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;