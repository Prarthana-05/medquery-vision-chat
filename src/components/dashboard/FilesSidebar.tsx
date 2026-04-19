import { useRef, useState } from "react";
import { FileText, ImageIcon, Upload, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface UploadedFile {
  id: string;
  name: string;
  type: "pdf" | "image";
  size: string;
}

const initialFiles: UploadedFile[] = [
  { id: "1", name: "patient_report.pdf", type: "pdf", size: "1.2 MB" },
  { id: "2", name: "mri_scan_l4.png", type: "image", size: "640 KB" },
  { id: "3", name: "lab_results_q3.pdf", type: "pdf", size: "880 KB" },
];

export const FilesSidebar = () => {
  const [files, setFiles] = useState<UploadedFile[]>(initialFiles);
  const [active, setActive] = useState<string>("1");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    const next: UploadedFile[] = Array.from(list).map((f) => ({
      id: crypto.randomUUID(),
      name: f.name,
      type: f.type.startsWith("image/") ? "image" : "pdf",
      size: `${(f.size / 1024).toFixed(0)} KB`,
    }));
    setFiles((prev) => [...next, ...prev]);
  };

  return (
    <aside className="glass flex h-full w-full flex-col gap-4 rounded-2xl p-4">
      <div>
        <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Documents</h2>
      </div>

      {/* Upload zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "group relative cursor-pointer rounded-xl border-2 border-dashed border-border bg-secondary/30 px-4 py-6 text-center transition-all hover:border-primary/60 hover:bg-secondary/50",
          dragging && "border-primary bg-primary/10",
        )}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-elegant">
          <Upload className="h-5 w-5 text-primary-foreground" />
        </div>
        <p className="text-sm font-medium">Drop PDFs or images</p>
        <p className="mt-1 text-xs text-muted-foreground">or click to browse</p>
      </div>

      {/* File list */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>{files.length} files</span>
          <button onClick={() => inputRef.current?.click()} className="flex items-center gap-1 text-primary hover:opacity-80">
            <Plus className="h-3 w-3" /> Add
          </button>
        </div>
        <ul className="space-y-1.5">
          {files.map((f) => {
            const Icon = f.type === "pdf" ? FileText : ImageIcon;
            const isActive = active === f.id;
            return (
              <li key={f.id}>
                <button
                  onClick={() => setActive(f.id)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl border border-transparent p-2.5 text-left transition-all",
                    isActive
                      ? "border-primary/40 bg-primary/10"
                      : "hover:border-border hover:bg-secondary/60",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                      isActive ? "bg-gradient-primary" : "bg-secondary",
                    )}
                  >
                    <Icon className={cn("h-4 w-4", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{f.size}</p>
                  </div>
                  <Trash2
                    className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFiles((prev) => prev.filter((x) => x.id !== f.id));
                    }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
