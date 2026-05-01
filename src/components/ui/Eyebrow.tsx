import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export function Eyebrow({ children, className, accent = true }: EyebrowProps) {
  return (
    <div
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em]",
        accent ? "text-accent" : "text-fg-faint",
        className,
      )}
    >
      — {children}
    </div>
  );
}
