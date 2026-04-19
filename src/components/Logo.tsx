import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  to?: string;
}

export const Logo = ({ to = "/" }: LogoProps) => {
  return (
    <Link to={to} className="group flex items-center gap-2.5">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-60 blur-md transition-opacity group-hover:opacity-100" />
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
          <Activity className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
        </div>
      </div>
      <span className="font-display text-lg font-bold tracking-tight">
        MedQuery <span className="text-gradient">AI</span>
      </span>
    </Link>
  );
};
