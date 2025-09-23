import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UploadBox from "./UploadBox";
import ResultsDashboard from "./ResultsDashboard";

export type ActiveModule = "home" | "upload" | "results";

interface DashboardProps {
  user: { email: string };
  onLogout: () => void;
}

const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const [activeModule, setActiveModule] = useState<ActiveModule>("home");
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleAnalyze = (file: File | null, text: string) => {
    // Mock analysis results
    const mockResults = {
      difficultyDistribution: [
        { name: "Easy", value: 30, color: "#10b981" },
        { name: "Medium", value: 50, color: "#f59e0b" },
        { name: "Hard", value: 20, color: "#ef4444" },
      ],
      bloomsTaxonomy: [
        { category: "Remember", count: 15, color: "#8b5cf6" },
        { category: "Understand", count: 25, color: "#06b6d4" },
        { category: "Apply", count: 20, color: "#10b981" },
        { category: "Analyze", count: 18, color: "#f59e0b" },
        { category: "Evaluate", count: 12, color: "#ef4444" },
        { category: "Create", count: 10, color: "#ec4899" },
      ],
      clarityScore: 85,
      totalQuestions: file ? "45" : text.split('\n').filter(line => line.trim()).length.toString(),
    };

    setAnalysisResults(mockResults);
    setActiveModule("results");
  };

  const renderContent = () => {
    switch (activeModule) {
      case "home":
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="glass-card p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold gradient-text mb-6">
                  Welcome to AI Question Analysis
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Transform your educational content with AI-powered question analysis. 
                  Upload your questions and get comprehensive insights into difficulty levels, 
                  cognitive complexity, and clarity metrics.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="text-indigo-400 text-4xl font-bold mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Difficulty Analysis</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Automatically categorize questions into Easy, Medium, and Hard difficulty levels 
                      using advanced NLP algorithms for balanced assessment creation.
                    </p>
                  </div>
                  <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="text-purple-400 text-4xl font-bold mb-4">🧠</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Bloom's Taxonomy</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Classify questions across all six cognitive levels: Remember, Understand, 
                      Apply, Analyze, Evaluate, and Create for comprehensive learning assessment.
                    </p>
                  </div>
                  <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="text-cyan-400 text-4xl font-bold mb-4">✨</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">Clarity Score</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Measure question clarity and quality with detailed metrics including 
                      readability, ambiguity detection, and improvement suggestions.
                    </p>
                  </div>
                </div>

                {/* Additional Features */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-card p-6 text-left">
                    <h4 className="text-lg font-semibold text-gray-200 mb-3 flex items-center">
                      <span className="text-green-400 mr-2">📈</span>
                      Analytics Dashboard
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Visualize your question data with interactive charts and detailed breakdowns 
                      to identify patterns and improve your assessment quality.
                    </p>
                  </div>
                  <div className="glass-card p-6 text-left">
                    <h4 className="text-lg font-semibold text-gray-200 mb-3 flex items-center">
                      <span className="text-yellow-400 mr-2">⚡</span>
                      Instant Results
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get immediate feedback on your questions with real-time processing 
                      and comprehensive analysis reports generated in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Getting Started */}
            <div className="glass-card p-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">Getting Started</h3>
                <p className="text-gray-400 mb-6">
                  Ready to analyze your questions? Choose your preferred method below:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 hover:bg-gray-700/30 transition-colors duration-300 cursor-pointer"
                       onClick={() => setActiveModule("upload")}>
                    <div className="text-indigo-400 text-2xl mb-3">📁</div>
                    <h4 className="font-semibold text-gray-200 mb-2">Upload Files</h4>
                    <p className="text-gray-400 text-sm">
                      Upload .txt, .csv, or .pdf files containing your questions
                    </p>
                  </div>
                  <div className="glass-card p-6 hover:bg-gray-700/30 transition-colors duration-300 cursor-pointer"
                       onClick={() => setActiveModule("upload")}>
                    <div className="text-purple-400 text-2xl mb-3">✏️</div>
                    <h4 className="font-semibold text-gray-200 mb-2">Paste Text</h4>
                    <p className="text-gray-400 text-sm">
                      Directly paste your questions for instant analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "upload":
        return <UploadBox onAnalyze={handleAnalyze} />;
      case "results":
        return analysisResults ? (
          <ResultsDashboard results={analysisResults} />
        ) : (
          <div className="glass-card p-8 text-center">
            <p className="text-gray-400">
              No analysis results yet. Please upload questions first.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        activeModule={activeModule}
        onModuleChange={setActiveModule}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'} lg:ml-0`}>
        <Header
          user={user}
          onLogout={onLogout}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;