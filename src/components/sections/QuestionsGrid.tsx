"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { questions, type Question } from "@/data/questions";
import { GlassCard } from "@/components/ui/GlassCard";

interface QuestionsGridProps {
  onOpen: (q: Question) => void;
}

export function QuestionsGrid({ onOpen }: QuestionsGridProps) {
  const t = useTranslations("questions");
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-[120px] max-md:py-16 px-12 max-md:px-6 bg-bg-1 border-b border-border">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduce ? 0 : 0.05 },
          },
        }}
        className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {questions.map((q) => (
          <motion.div
            key={q.id}
            variants={
              shouldReduce
                ? { hidden: {}, visible: {} }
                : {
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.35,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    },
                  }
            }
          >
            <GlassCard
              onClick={() => onOpen(q)}
              className="flex flex-col justify-between min-h-[240px]"
            >
              <div className="flex justify-between items-start">
                <div className="w-[52px] h-[52px] rounded-full border border-border-strong flex items-center justify-center font-display text-[26px] text-accent transition-colors duration-[220ms]">
                  {q.glyph}
                </div>
                <div className="font-mono text-[10px] text-fg-faint tracking-[0.16em]">
                  {q.category.toUpperCase()}
                </div>
              </div>
              <h3 className="font-display text-[24px] font-normal text-fg mt-6 tracking-[-0.015em] leading-[1.15]">
                {locale === "fr" ? q.titleFr : q.titleEn}
              </h3>
              <div className="mt-5 font-mono text-[11px] text-fg-dim tracking-[0.1em] hover:text-accent transition-colors duration-[220ms]">
                → {t("openPanel")}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
