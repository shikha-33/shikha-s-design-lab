import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
const Work = lazy(() => import("./pages/Work"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { ThemeProvider } from "@/components/ThemeProvider";
const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" attribute="class">
    <BrowserRouter>
      <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/roles" element={<Navigate to="/#experience" replace />} />
            <Route path="/skills" element={<Navigate to="/#about" replace />} />
            <Route path="/marketing" element={<Navigate to="/work" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
