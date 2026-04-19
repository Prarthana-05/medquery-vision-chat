import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  source?: string;
}

const seed: Message[] = [
  { id: "1", role: "user", text: "What does the MRI on page 4 show?" },
  {
    id: "2",
    role: "ai",
    text: "The MRI on page 4 indicates mild disc bulging at L4–L5 with no significant nerve root compression. Findings suggest early degenerative changes.",
    source: "patient_report.pdf · page 4",
  },
  { id: "3", role: "user", text: "Any recommendations from the report?" },
  {
    id: "4",
    role: "ai",
    text: "The clinician recommends conservative management: physiotherapy, NSAIDs as needed, and a follow-up MRI in 6 months if symptoms persist.",
    source: "patient_report.pdf · page 7",
  },
];

export const ChatPanel = () => {
  const [messages, setMessages] = useState<Message[]>(seed);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", text: t }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "ai",
          text: "Based on the uploaded documents, this is a simulated multimodal answer. Connect a backend to enable real responses.",
          source: "patient_report.pdf · page 2",
        },
      ]);
      setThinking(false);
    }, 1100);
  };

  return (
    <section className="glass flex h-full w-full flex-col rounded-2xl">
      <div className="border-b border-border/60 px-5 py-3">
        <h2 className="font-display text-base font-semibold">Conversation</h2>
        <p className="text-xs text-muted-foreground">Grounded in your uploaded documents</p>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {thinking && (
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-border bg-card/60 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="border-t border-border/60 p-4">
        <div className="glass-strong flex items-end gap-2 rounded-2xl p-2 focus-within:border-primary/50">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Ask anything about your documents…"
            rows={1}
            className="min-h-[44px] resize-none border-0 bg-transparent text-sm focus-visible:ring-0"
          />
          <Button
            onClick={send}
            disabled={!input.trim()}
            size="icon"
            className="h-10 w-10 shrink-0 bg-gradient-primary text-primary-foreground hover:opacity-90 disabled:opacity-40"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 px-2 text-[11px] text-muted-foreground">
          Press <kbd className="rounded bg-secondary px-1.5 py-0.5 text-[10px]">Enter</kbd> to send · <kbd className="rounded bg-secondary px-1.5 py-0.5 text-[10px]">Shift+Enter</kbd> for newline
        </p>
      </div>
    </section>
  );
};

const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex items-start gap-3", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
          isUser ? "bg-secondary" : "bg-gradient-primary",
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-foreground" />
        ) : (
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        )}
      </div>
      <div className={cn("max-w-[85%]", isUser && "text-right")}>
        <div
          className={cn(
            "inline-block rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "rounded-tr-sm bg-gradient-primary text-primary-foreground"
              : "rounded-tl-sm border border-border bg-card/60 text-foreground",
          )}
        >
          {message.text}
        </div>
        {message.source && (
          <p className="mt-1.5 text-xs text-primary">📎 {message.source}</p>
        )}
      </div>
    </div>
  );
};
