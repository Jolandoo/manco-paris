"use client";

import { cn } from "@/lib/utils";

interface AccentHeadingProps {
  text: string;
  accentWord: string;
  as?: "h1" | "h2" | "h3";
  size?: "xxl" | "xl" | "l" | "m";
  className?: string;
}

const sizeClasses = {
  xxl: "text-[clamp(44px,5.8vw,88px)] leading-[0.95] tracking-[-0.03em]",
  xl: "text-[clamp(40px,5.5vw,76px)] leading-[1] tracking-[-0.025em]",
  l: "text-[clamp(40px,5vw,68px)] leading-[1] tracking-[-0.025em]",
  m: "text-[clamp(28px,3.5vw,44px)] leading-[1.05] tracking-[-0.02em]",
};

export function AccentHeading({
  text,
  accentWord,
  as: Tag = "h2",
  size = "l",
  className,
}: AccentHeadingProps) {
  const parts = text.split(`{accent}`);

  return (
    <Tag
      className={cn(
        "font-display font-normal text-fg",
        sizeClasses[size],
        className,
      )}
    >
      {parts[0]}
      <em className="italic text-accent">{accentWord}</em>
      {parts[1]}
    </Tag>
  );
}
