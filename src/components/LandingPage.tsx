import { Button } from "./ui/button";
import logoImage from "@/assets/logo.png";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 relative overflow-hidden">
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
        <div className="hidden md:flex items-center space-x-8">
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors">Home</span>
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors">Resources</span>
          <span className="text-white/80 hover:text-white cursor-pointer transition-colors">About</span>
          <Button variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
            Contact
          </Button>
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
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg"
              >
                📚 Learn More
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center lg:text-left">
                <div className="text-cyan-300 text-2xl mb-2">📊</div>
                <h3 className="text-white font-semibold mb-1">Difficulty Analysis</h3>
                <p className="text-white/60 text-sm">AI-powered categorization</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-pink-300 text-2xl mb-2">🧠</div>
                <h3 className="text-white font-semibold mb-1">Bloom's Taxonomy</h3>
                <p className="text-white/60 text-sm">Cognitive level mapping</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-purple-300 text-2xl mb-2">✨</div>
                <h3 className="text-white font-semibold mb-1">Quality Metrics</h3>
                <p className="text-white/60 text-sm">Clarity & improvement insights</p>
              </div>
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

      {/* Bottom Stats/Features */}
      <div className="relative z-10 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/70 text-sm">Questions Analyzed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/70 text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 text-sm">Institutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm">Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;