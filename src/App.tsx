import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [showLanding, setShowLanding] = useState(true);

  const handleLogin = (email: string, password: string) => {
    // Simple mock authentication
    setUser({ email });
    setShowLanding(true);
  };

  const handleStartFromLanding = () => {
    setShowLanding(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLanding(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {user ? (
          showLanding ? (
            <LandingPage onStart={handleStartFromLanding} />
          ) : (
            <Dashboard user={user} onLogout={handleLogout} />
          )
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
