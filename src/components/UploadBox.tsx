import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Sparkles } from "lucide-react";

interface UploadBoxProps {
  onAnalyze: (file: File | null, text: string) => void;
}

const UploadBox = ({ onAnalyze }: UploadBoxProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [isDragging, setIsDragging] = useState(false);
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
    </div>
  );
};

export default UploadBox;