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
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl font-bold gradient-text mb-4">
                Welcome to AI Question Analysis
              </h2>
              <p className="text-gray-400 mb-6">
                Upload your questions or paste them directly to get comprehensive quality analysis
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-indigo-400 text-3xl font-bold mb-2">📊</div>
                  <h3 className="font-semibold mb-2">Difficulty Analysis</h3>
                  <p className="text-gray-400 text-sm">
                    Categorize questions by difficulty level
                  </p>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-purple-400 text-3xl font-bold mb-2">🧠</div>
                  <h3 className="font-semibold mb-2">Bloom's Taxonomy</h3>
                  <p className="text-gray-400 text-sm">
                    Classify cognitive complexity levels
                  </p>
                </div>
                <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-cyan-400 text-3xl font-bold mb-2">✨</div>
                  <h3 className="font-semibold mb-2">Clarity Score</h3>
                  <p className="text-gray-400 text-sm">
                    Measure question clarity and quality
                  </p>
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