"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduce = useReducedMotion();

  const stats = [
    { key: "amf" as const, idx: "01" },
    { key: "funds" as const, idx: "02" },
    { key: "aum" as const, idx: "03" },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] bg-[radial-gradient(800px_400px_at_30%_0%,_var(--color-accent)/0.06,_transparent_60%)] bg-bg-1 border-b border-border">
      {/* Left — text */}
      <div className="px-12 max-md:px-6 pt-[100px] max-md:pt-20 pb-20 max-md:pb-12">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-fg-dim tracking-[0.18em]">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_16px_var(--color-accent)]" />
            {t("eyebrow")}
          </div>

          {/* H1 */}
          <h1 className="font-display text-[clamp(28px,5.5vw,76px)] leading-[1] tracking-[-0.025em] font-normal mt-8 text-fg">
            {t.rich("title", {
              accent: (chunks) => (
                <em className="italic text-accent">{chunks}</em>
              ),
            })}
          </h1>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex gap-4 flex-wrap"
        >
          <button className="px-7 py-4 bg-accent text-bg-0 rounded-full font-sans text-sm font-semibold shadow-cta cursor-pointer hover:brightness-110 transition-all">
            {t("ctaPrimary")} →
          </button>
          <button className="px-7 py-4 bg-transparent text-fg border border-border-strong rounded-full font-sans text-sm font-medium cursor-pointer hover:border-fg transition-colors">
            {t("ctaSecondary")}
          </button>
        </motion.div>
      </div>

      {/* Right — stats panel, staggered entrance */}
      <div className="border-l border-border bg-bg-2 grid grid-rows-3 max-lg:grid-rows-none max-lg:grid-cols-3 max-md:grid-cols-1 max-lg:border-l-0 max-lg:border-t">
        {stats.map(({ key, idx }, i) => (
          <motion.div
            key={key}
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={`px-8 max-md:px-6 py-9 max-md:py-6 flex flex-col justify-center ${i > 0 ? "border-t border-border max-lg:border-t-0 max-lg:border-l max-md:border-l-0 max-md:border-t" : ""}`}
          >
            <div className="font-mono text-[10px] text-fg-faint tracking-[0.16em]">
              {idx}
            </div>
            <div className="font-display text-[clamp(36px,4vw,56px)] font-normal text-fg mt-2 leading-none tracking-[-0.02em]">
              {t(`stats.${key}.big`)}
            </div>
            <div className="font-sans text-sm text-fg-dim mt-1.5">
              {t(`stats.${key}.sub`)}
            </div>
            <div className="font-mono text-[10px] text-fg-faint mt-1">
              {t(`stats.${key}.foot`)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
