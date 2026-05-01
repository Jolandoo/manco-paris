"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export function Shareholders() {
  const t = useTranslations("shareholders");

  return (
    <section id="institutional" className="py-16 max-md:py-10 px-12 max-md:px-6 bg-bg-1 border-b border-border scroll-mt-20">
      <FadeIn className="max-w-container mx-auto flex items-center gap-16 max-md:gap-4 flex-wrap">
        <div className="font-mono text-[11px] text-fg-faint tracking-[0.18em]">
          {t("label")} —
        </div>
        {["BANQUE DELUBAC & CIE", "HOLDING BCM"].map((name) => (
          <div
            key={name}
            className="px-6 max-md:px-4 py-3.5 max-md:py-2.5 border border-border rounded-lg font-display text-[18px] max-md:text-[15px] text-fg tracking-[0.05em] opacity-70"
          >
            {name}
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
