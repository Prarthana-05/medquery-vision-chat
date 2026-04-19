import { Upload, MessageCircleQuestion, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    label: "Upload",
    title: "Drop your documents",
    desc: "PDFs, scans, lab images. We handle parsing, OCR, and embeddings automatically.",
  },
  {
    icon: MessageCircleQuestion,
    label: "Ask",
    title: "Question naturally",
    desc: "Type any clinical question — no special syntax. Multi-turn conversation supported.",
  },
  {
    icon: Sparkles,
    label: "Get Answer",
    title: "Receive cited insights",
    desc: "Concise answers with highlighted source regions in the original document.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-glow opacity-40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Workflow</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Three steps to <span className="text-gradient">clarity</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-12 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />

          {steps.map((step, i) => (
            <div key={step.label} className="relative text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                <div className="absolute h-24 w-24 animate-pulse-glow rounded-full bg-gradient-primary opacity-30 blur-xl" />
                <div className="glass-strong relative flex h-20 w-20 items-center justify-center rounded-2xl border-primary/30">
                  <step.icon className="h-9 w-9 text-primary" strokeWidth={1.8} />
                </div>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground shadow-elegant">
                  {i + 1}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{step.label}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
