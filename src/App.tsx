// UI Notifications & Tooltips
import { Toaster } from "@/components/ui/toaster";       // App-level toast notifications
import { Toaster as Sonner } from "@/components/ui/sonner"; // Optional secondary notification system
import { TooltipProvider } from "@/components/ui/tooltip"; // Global tooltip wrapper

// Data Fetching (React Query)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Routing (React Router)
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";

// Layout & Utilities
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

// Create a new React Query client instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Provide global tooltip support */}
    <TooltipProvider>
      {/* Global toast systems */}
      <Toaster />
      <Sonner />

      {/* React Router */}
      <BrowserRouter>
        {/* Shared layout across all routes (e.g., Header, Footer) */}
        <Layout>
          {/* Automatically scroll to top on route change */}
          <ScrollToTop />

          {/* Define all app routes */}
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
