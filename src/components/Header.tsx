import { LogOut, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  user: { email: string };
  onLogout: () => void;
  onToggleSidebar: () => void;
}

const Header = ({ user, onLogout, onToggleSidebar }: HeaderProps) => {
  return (
    <header className="glass-card m-6 mb-0 rounded-2xl">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 lg:hidden"
          >
            <Menu className="h-5 w-5 text-gray-400" />
          </button>
          
          <div>
            <h1 className="text-2xl font-bold gradient-text">
              AI Question Quality Analyzer
            </h1>
            <p className="text-gray-400 text-sm">
              Analyze • Classify • Improve
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3 glass-card p-3 rounded-xl">
            <div className="p-2 rounded-lg bg-indigo-500/20">
              <User className="h-4 w-4 text-indigo-400" />
            </div>
            <div className="text-sm">
              <p className="text-gray-300 font-medium">{user.email}</p>
              <p className="text-gray-500">QA Analyzer</p>
            </div>
          </div>

          <Button
            onClick={onLogout}
            variant="outline"
            size="sm"
            className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-red-500/20 
                     hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;