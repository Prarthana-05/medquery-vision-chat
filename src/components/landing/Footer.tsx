import { Logo } from "@/components/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="relative mt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Multimodal RAG AI for clinicians, researchers, and patients. Turn medical documents into instant, cited answers.
            </p>
            <div className="mt-5 flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Product</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#how" className="hover:text-foreground">How it works</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} MedQuery AI. All rights reserved.</p>
          <p>Not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
};
