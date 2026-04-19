import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, Image as ImageIcon, MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 bg-gradient-glow opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-60 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Multimodal RAG · Powered by Medical AI
        </div>

        <h1 className="animate-fade-up mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: "80ms" }}>
          Ask Anything From Your{" "}
          <span className="text-gradient">Medical Documents</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "160ms" }}>
          Upload PDFs, scans, and clinical images. MedQuery AI reads everything
          and answers your questions with precise, cited references.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <Button asChild size="lg" className="group h-12 bg-gradient-primary px-8 text-base text-primary-foreground shadow-elegant hover:opacity-90">
            <Link to="/dashboard">
              Try Now
              <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="h-12 px-6 text-base text-muted-foreground hover:bg-secondary hover:text-foreground">
            <a href="#how">See how it works</a>
          </Button>
        </div>

        {/* Floating preview card */}
        <div className="animate-fade-up relative mx-auto mt-20 max-w-3xl" style={{ animationDelay: "360ms" }}>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
          <div className="glass-strong rounded-3xl p-6 text-left">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground">medquery · session</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-secondary/60 px-4 py-2.5 text-sm">
                  Uploaded <span className="text-primary">patient_report.pdf</span> · 12 pages
                </div>
              </div>
              <div className="flex items-start justify-end gap-3">
                <div className="rounded-2xl rounded-tr-sm bg-gradient-primary px-4 py-2.5 text-sm text-primary-foreground">
                  What does the MRI on page 4 indicate?
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <MessageSquare className="h-4 w-4 text-accent" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="rounded-2xl rounded-tl-sm border border-border bg-card/60 px-4 py-2.5 text-sm">
                  The MRI on page 4 shows mild disc bulging at L4–L5 with no signs of nerve compression.
                  <span className="ml-1 text-xs text-primary">[source: page 4]</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                <ImageIcon className="h-3.5 w-3.5" /> Image regions analyzed · 3 citations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
