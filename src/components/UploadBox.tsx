import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Sparkles, Wand2 } from "lucide-react";

interface UploadBoxProps {
  onAnalyze: (file: File | null, text: string) => void;
}

const UploadBox = ({ onAnalyze }: UploadBoxProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [generatePrompt, setGeneratePrompt] = useState("");
  const [generatedQuestions, setGeneratedQuestions] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type === "text/plain" || 
        file.type === "application/pdf" || 
        file.name.endsWith(".csv") || 
        file.name.endsWith(".txt") || 
        file.name.endsWith(".pdf")) {
      setSelectedFile(file);
      setPastedText(""); // Clear text when file is selected
    } else {
      alert("Please select a .txt, .csv, or .pdf file");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleGenerateQuestions = async () => {
    if (!generatePrompt.trim()) {
      alert("Please enter a prompt to generate questions");
      return;
    }
    
    setIsGenerating(true);
    try {
      // Simulate AI question generation (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockQuestions = `1. What is the main concept discussed in ${generatePrompt}?
2. How does ${generatePrompt} relate to the broader field of study?
3. What are the key benefits of understanding ${generatePrompt}?
4. Analyze the impact of ${generatePrompt} on current practices.
5. Compare and contrast different approaches to ${generatePrompt}.
6. Evaluate the effectiveness of ${generatePrompt} in solving real-world problems.
7. What challenges might arise when implementing ${generatePrompt}?
8. How would you assess the quality of ${generatePrompt}?
9. What are the potential future developments in ${generatePrompt}?
10. Create a comprehensive plan for utilizing ${generatePrompt} effectively.`;
      
      setGeneratedQuestions(mockQuestions);
      setPastedText(mockQuestions);
      setSelectedFile(null);
    } catch (error) {
      alert("Failed to generate questions. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile && !pastedText.trim()) {
      alert("Please upload a file or paste some questions");
      return;
    }
    onAnalyze(selectedFile, pastedText);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-card p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-2">
            Upload Questions for Analysis
          </h2>
          <p className="text-gray-400">
            Upload a file (.txt/.csv/.pdf) or paste your questions directly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* File Upload Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              📁 File Upload
            </h3>
            
            <div
              className={`
                glass-card p-8 border-2 border-dashed transition-all duration-300 cursor-pointer
                ${isDragging 
                  ? 'border-indigo-500 bg-indigo-500/10' 
                  : 'border-gray-600 hover:border-indigo-500/50'
                }
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="text-center">
                <Upload className={`h-12 w-12 mx-auto mb-4 ${isDragging ? 'text-indigo-400' : 'text-gray-400'}`} />
                <p className="text-gray-300 font-medium mb-2">
                  {selectedFile ? selectedFile.name : "Drop your file here or click to browse"}
                </p>
                <p className="text-gray-500 text-sm">
                  Supports .txt, .csv, and .pdf files
                </p>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,.csv,.pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
              className="hidden"
            />

            {selectedFile && (
              <div className="glass-card p-4 animate-scale-in">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-indigo-400" />
                  <div>
                    <p className="text-gray-300 font-medium">{selectedFile.name}</p>
                    <p className="text-gray-500 text-sm">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Text Input Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              ✏️ Paste Questions
            </h3>
            
            <Textarea
              value={pastedText}
              onChange={(e) => {
                setPastedText(e.target.value);
                if (e.target.value.trim()) {
                  setSelectedFile(null); // Clear file when text is entered
                }
              }}
              placeholder="Paste your questions here, one per line..."
              className="min-h-[200px] bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 
                       focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
            />

            {pastedText && (
              <div className="glass-card p-4 animate-scale-in">
                <p className="text-gray-400 text-sm">
                  📊 {pastedText.split('\n').filter(line => line.trim()).length} questions detected
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Analyze Button */}
        <div className="text-center mt-8">
          <Button
            onClick={handleAnalyze}
            variant="gradient"
            size="lg"
            className="px-8 py-3 text-lg font-semibold rounded-xl
                     transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-indigo-500/25"
            disabled={!selectedFile && !pastedText.trim()}
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Analyze Questions
          </Button>
        </div>
      </div>

      {/* AI Question Generation Section */}
      <div className="glass-card p-8 animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-2">
            🤖 AI Question Generator
          </h2>
          <p className="text-gray-400">
            Generate questions using AI based on your topic or prompt
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Enter your topic or prompt:
            </label>
            <Textarea
              value={generatePrompt}
              onChange={(e) => setGeneratePrompt(e.target.value)}
              placeholder="e.g., Artificial Intelligence in Education, Climate Change Impact, Data Structures and Algorithms..."
              className="min-h-[120px] bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 
                       focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300 resize-none"
            />
          </div>

          <div className="text-center">
            <Button
              onClick={handleGenerateQuestions}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold rounded-xl border-purple-500/50 text-purple-400
                       hover:bg-purple-500/10 hover:border-purple-500 transform hover:scale-105 
                       transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              disabled={!generatePrompt.trim() || isGenerating}
            >
              <Wand2 className={`h-5 w-5 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Generating Questions...' : 'Generate Questions'}
            </Button>
          </div>

          {generatedQuestions && (
            <div className="glass-card p-6 animate-scale-in">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                ✨ Generated Questions:
              </h3>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">{generatedQuestions}</pre>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                📊 Generated questions have been automatically added to the analysis section above
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadBox;