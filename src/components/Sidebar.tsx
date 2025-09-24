import { Home, Upload, BarChart3, Menu } from "lucide-react";
import { ActiveModule } from "./Dashboard";

interface SidebarProps {
  activeModule: ActiveModule;
  onModuleChange: (module: ActiveModule) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ activeModule, onModuleChange, isOpen, onToggle }: SidebarProps) => {
  const menuItems = [
    { id: "home" as ActiveModule, label: "Home", icon: Home },
    { id: "upload" as ActiveModule, label: "Upload", icon: Upload },
    { id: "results" as ActiveModule, label: "Results", icon: BarChart3 },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full glass-card z-50 transition-all duration-300
        ${isOpen ? 'w-64' : 'w-16'} 
        lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0'}`}>
              <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              {isOpen && (
                <div>
                  <h2 className="font-bold gradient-text">QA Analyzer</h2>
                  <p className="text-xs text-gray-400">Professional</p>
                </div>
              )}
            </div>
            <button
              onClick={onToggle}
              className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 lg:hidden"
            >
              <Menu className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onModuleChange(item.id)}
                className={`
                  w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300
                  transform hover:scale-105
                  ${isActive 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25' 
                    : 'hover:bg-gray-700/50 text-gray-300 hover:text-white'
                  }
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {isOpen && (
                  <span className={`font-medium transition-colors duration-200 ${isActive ? 'text-white' : ''}`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </>
  );
};

export default Sidebar;