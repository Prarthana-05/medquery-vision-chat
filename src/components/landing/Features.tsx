import { FileText, ImageIcon, Brain } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "PDF Analysis",
    desc: "Parse multi-page clinical reports, lab results, and prescriptions with surgical precision and full citations.",
  },
  {
    icon: ImageIcon,
    title: "Image Understanding",
    desc: "Vision models interpret X-rays, MRIs, and scans alongside text — no separate tools required.",
  },
  {
    icon: Brain,
    title: "AI-Powered Answers",
    desc: "Retrieval-augmented generation grounds every answer in your documents. No hallucinations, just facts.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Capabilities</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Built for <span className="text-gradient">multimodal</span> medicine
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three engines working together to turn unstructured records into clear, sourced answers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-elegant">
                <f.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
