import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Settings, Sparkles } from "lucide-react";

export const DashboardNav = () => {
  return (
    <header className="glass-strong sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border/60 px-4 md:px-6">
      <Logo to="/" />
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary md:inline-flex">
          <Sparkles className="h-3.5 w-3.5" /> Multimodal RAG
        </div>
        <Button variant="ghost" size="icon" aria-label="Settings" className="hover:bg-secondary">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
