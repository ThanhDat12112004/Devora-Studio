import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingContactButton from "@/components/FloatingContactButton";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import XuHuongThietKeWeb2026 from "@/pages/blog/XuHuongThietKeWeb2026";
import SeoOnpageHuongDan from "@/pages/blog/SeoOnpageHuongDan";
import NamLyDoNenCoWebsiteRieng from "@/pages/blog/NamLyDoNenCoWebsiteRieng";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingContactButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/xu-huong-thiet-ke-website-2026" element={<XuHuongThietKeWeb2026 />} />
          <Route path="/blog/seo-onpage-la-gi" element={<SeoOnpageHuongDan />} />
          <Route path="/blog/5-ly-do-nen-co-website-rieng" element={<NamLyDoNenCoWebsiteRieng />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
