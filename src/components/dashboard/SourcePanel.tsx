import { FileText, ExternalLink, Quote } from "lucide-react";

export const SourcePanel = () => {
  return (
    <aside className="glass flex h-full w-full flex-col rounded-2xl">
      <div className="border-b border-border/60 px-5 py-3">
        <h2 className="font-display text-base font-semibold">Source</h2>
        <p className="text-xs text-muted-foreground">Reference for the latest answer</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {/* Document header */}
        <div className="glass-strong flex items-center gap-3 rounded-xl p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">patient_report.pdf</p>
            <p className="text-xs text-muted-foreground">Page 7 of 12 · cited</p>
          </div>
          <button className="text-muted-foreground hover:text-primary" aria-label="Open document">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        {/* Page preview */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-secondary/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="absolute inset-0 flex flex-col gap-2 p-5 text-[10px] leading-relaxed text-muted-foreground">
            <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
            <div className="h-2 w-full rounded bg-muted-foreground/20" />
            <div className="h-2 w-5/6 rounded bg-muted-foreground/20" />
            <div className="my-2 h-px bg-border" />
            <div className="rounded-lg border-l-2 border-primary bg-primary/10 p-2">
              <p className="text-xs leading-snug text-foreground">
                <span className="font-medium">Recommendation:</span> conservative management with
                physiotherapy, NSAIDs as needed, follow-up MRI in 6 months.
              </p>
            </div>
            <div className="h-2 w-full rounded bg-muted-foreground/20" />
            <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
            <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
            <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
          </div>
          <div className="absolute bottom-3 right-3 rounded-md bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur">
            p. 7
          </div>
        </div>

        {/* Citations */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Citations
          </h3>
          {[
            { page: 4, text: "Mild disc bulging L4–L5, no nerve compression." },
            { page: 7, text: "Conservative management recommended; follow-up in 6 months." },
          ].map((c) => (
            <div key={c.page} className="rounded-xl border border-border bg-secondary/30 p-3">
              <div className="mb-1 flex items-center gap-1.5 text-xs text-primary">
                <Quote className="h-3 w-3" /> page {c.page}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
