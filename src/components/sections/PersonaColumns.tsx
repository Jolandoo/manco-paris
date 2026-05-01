"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { personas } from "@/data/personas";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

export function PersonaColumns() {
  const t = useTranslations("personas");
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  return (
    <section id="incubation" className="py-[120px] max-md:py-16 px-12 max-md:px-6 bg-bg-2 border-b border-border scroll-mt-20">
      <div className="max-w-container mx-auto">
        <FadeIn>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-[clamp(28px,5vw,68px)] font-normal text-fg leading-[1] tracking-[-0.025em] mt-4">
            {t.rich("title", {
              accent: (chunks) => (
                <em className="italic text-accent">{chunks}</em>
              ),
            })}
          </h2>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: shouldReduce ? 0 : 0.08 },
            },
          }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {personas.map((p) => (
            <motion.div
              key={p.num}
              variants={
                shouldReduce
                  ? { hidden: {}, visible: {} }
                  : {
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      },
                    }
              }
              className="glass-card p-7 max-md:p-5 min-h-[320px] max-md:min-h-0 flex flex-col transition-all duration-[240ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
            >
              <div className="font-display italic text-[56px] max-md:text-[40px] text-accent leading-none">
                {p.num}
              </div>
              <h3 className="font-display text-[26px] font-normal text-fg mt-5 mb-2 tracking-[-0.01em]">
                {locale === "fr" ? p.titleFr : p.titleEn}
              </h3>
              <p className="text-fg-dim font-sans text-sm leading-[1.55] flex-1">
                {locale === "fr" ? p.subtitleFr : p.subtitleEn}
              </p>
              <button className="mt-5 self-start px-3.5 py-2 bg-transparent text-fg border border-border-strong rounded-full font-sans text-[12px] font-medium cursor-pointer hover:border-fg transition-colors">
                → {t("details")}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
