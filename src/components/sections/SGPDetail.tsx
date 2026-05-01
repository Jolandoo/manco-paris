"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";

const testimonials = [
  { name: "Carmin", duration: "02:14" },
  { name: "Tactical", duration: "01:48" },
  { name: "Pivot", duration: "03:02" },
  { name: "Northwind", duration: "02:30" },
  { name: "Lumen", duration: "01:55" },
  { name: "Adagio", duration: "02:22" },
];

export function SGPDetail() {
  const t = useTranslations("sgp");
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  return (
    <section id="assetManagers" className="py-[120px] max-md:py-16 px-12 max-md:px-6 bg-bg-1 border-b border-border scroll-mt-20">
      <div className="max-w-container mx-auto">
        <FadeIn>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal text-fg leading-[1.05] tracking-[-0.02em] mt-4">
            {t("title")}
          </h2>
        </FadeIn>

        {/* 4 service pillars — staggered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: shouldReduce ? 0 : 0.07 },
            },
          }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.glyph}
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
              <GlassCard hover>
                <div className="w-11 h-11 rounded-[10px] border border-border-strong flex items-center justify-center font-display text-[22px] text-accent bg-bg-2">
                  {s.glyph}
                </div>
                <h3 className="font-display text-[22px] font-normal text-fg mt-5 mb-2 tracking-[-0.01em]">
                  {locale === "fr" ? s.titleFr : s.titleEn}
                </h3>
                <p className="text-fg-dim font-sans text-sm leading-[1.55]">
                  {locale === "fr" ? s.descFr : s.descEn}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Video testimonials */}
        <FadeIn className="mt-14" delay={0.1}>
          <Eyebrow>{t("testimonials")}</Eyebrow>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: shouldReduce ? 0 : 0.05 },
              },
            }}
            className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
          >
            {testimonials.map((v) => (
              <motion.div
                key={v.name}
                variants={
                  shouldReduce
                    ? { hidden: {}, visible: {} }
                    : {
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.3,
                            ease: [0.23, 1, 0.32, 1],
                          },
                        },
                      }
                }
              >
                <VideoTile
                  label={`${v.name.toUpperCase()} · ${v.duration}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

function VideoTile({ label, big = false }: { label: string; big?: boolean }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-bg-3 to-bg-2 border border-border rounded-xl overflow-hidden cursor-pointer transition-all duration-[220ms] hover:scale-[1.01] group ${big ? "aspect-video" : "aspect-[4/3]"}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 8px, rgba(255,255,255,0.02) 8px 9px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`rounded-full bg-accent flex items-center justify-center text-white pl-1 transition-shadow duration-[280ms] group-hover:shadow-[0_0_0_8px_rgba(37,99,235,0.15)] ${big ? "w-20 h-20 text-2xl" : "w-14 h-14 text-base"}`}
        >
          ▶
        </div>
      </div>
      <div className="absolute left-4 bottom-3.5 font-mono text-[10px] text-fg tracking-[0.12em] bg-black/50 px-2 py-1 rounded">
        {label}
      </div>
    </div>
  );
}

export { VideoTile };
