import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Award, TrendingUp, FileText } from "lucide-react";

interface ResultsData {
  difficultyDistribution: Array<{ name: string; value: number; color: string }>;
  bloomsTaxonomy: Array<{ category: string; count: number; color: string }>;
  clarityScore: number;
  totalQuestions: string;
}

interface ResultsDashboardProps {
  results: ResultsData;
}

const ResultsDashboard = ({ results }: ResultsDashboardProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="glass-card p-3 border border-white/20">
          <p className="text-gray-300">{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const getClarityColor = (score: number) => {
    if (score >= 85) return "text-green-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getClarityBadgeColor = (score: number) => {
    if (score >= 85) return "from-green-500 to-emerald-500";
    if (score >= 70) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-2xl bg-indigo-500/20 w-fit mx-auto mb-4">
            <FileText className="h-8 w-8 text-indigo-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{results.totalQuestions}</h3>
          <p className="text-gray-400">Total Questions</p>
        </div>

        <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className="p-3 rounded-2xl bg-purple-500/20 w-fit mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">6</h3>
          <p className="text-gray-400">Taxonomy Levels</p>
        </div>

        <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
          <div className={`p-3 rounded-2xl bg-gradient-to-r ${getClarityBadgeColor(results.clarityScore)} w-fit mx-auto mb-4`}>
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-2xl font-bold mb-1 ${getClarityColor(results.clarityScore)}`}>
            {results.clarityScore}%
          </h3>
          <p className="text-gray-400">Clarity Score</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Difficulty Distribution */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold gradient-text mb-6 text-center">
            📊 Difficulty Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={results.difficultyDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }: any) => `${name} ${(Number(percent) * 100).toFixed(0)}%`}
                >
                  {results.difficultyDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {results.difficultyDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-gray-400">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloom's Taxonomy */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold gradient-text mb-6 text-center">
            🧠 Bloom's Taxonomy
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={results.bloomsTaxonomy} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="category" 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: '#9CA3AF' }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {results.bloomsTaxonomy.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Clarity Analysis */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-bold gradient-text mb-6 text-center">
          ✨ Clarity Analysis Details
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-300 mb-3">Strengths</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm">Clear question structure</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm">Appropriate vocabulary level</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm">Good cognitive diversity</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-300 mb-3">Improvement Areas</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-sm">Some questions could be more specific</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-sm">Consider adding more "Create" level questions</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-sm">Balance difficulty distribution</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
          <p className="text-center text-gray-300">
            <strong className="gradient-text">Overall Assessment:</strong> Your questions demonstrate good quality with room for enhancement. 
            Focus on increasing specificity and balancing cognitive complexity levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;