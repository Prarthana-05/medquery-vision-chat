import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <Logo />
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#footer" className="transition-colors hover:text-foreground">About</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90">
            <Link to="/dashboard">
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
