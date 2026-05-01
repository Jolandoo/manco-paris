"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  hover = true,
  as: Tag = "div",
  onClick,
}: GlassCardProps) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        "glass-card p-7",
        hover &&
          "transition-all duration-[240ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.5 cursor-pointer",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
