"use client";

import { useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";

const VIDEOS = ["/videos/download.mp4", "/videos/Design sans titre.mp4"];
const FADE_MS = 800;

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduce = useReducedMotion();
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [activeIs, setActiveIs] = useState<"A" | "B">("A");
  const nextIndexRef = useRef(1);

  const handleEnded = useCallback(() => {
    const incoming = activeIs === "A" ? videoBRef.current : videoARef.current;
    if (!incoming) return;
    incoming.src = VIDEOS[nextIndexRef.current];
    incoming.play();
    setActiveIs(activeIs === "A" ? "B" : "A");
    nextIndexRef.current = (nextIndexRef.current + 1) % VIDEOS.length;
  }, [activeIs]);

  const stats = [
    { key: "amf" as const },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] bg-[radial-gradient(800px_400px_at_30%_0%,_var(--color-accent)/0.04,_transparent_60%)] bg-bg-1 border-b border-border">
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
          <button className="px-7 py-4 bg-accent text-white rounded-full font-sans text-sm font-semibold shadow-cta cursor-pointer hover:brightness-110 transition-all">
            {t("ctaPrimary")} →
          </button>
          <button className="px-7 py-4 bg-transparent text-fg border border-border-strong rounded-full font-sans text-sm font-medium cursor-pointer hover:border-fg transition-colors">
            {t("ctaSecondary")}
          </button>
        </motion.div>
      </div>

      {/* Right — stats panel with Paris video background */}
      <div className="relative border-l border-border overflow-hidden max-lg:border-l-0 max-lg:border-t">
        <video
          ref={videoARef}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          src={VIDEOS[0]}
          style={{ transition: `opacity ${FADE_MS}ms ease`, opacity: activeIs === "A" ? 1 : 0 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          ref={videoBRef}
          muted
          playsInline
          onEnded={handleEnded}
          style={{ transition: `opacity ${FADE_MS}ms ease`, opacity: activeIs === "B" ? 1 : 0 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg-1/70" />

        <div className="relative z-10 grid grid-rows-1 max-lg:grid-rows-none max-lg:grid-cols-1 h-full">
          {stats.map(({ key }, i) => (
            <motion.div
              key={key}
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="px-8 max-md:px-6 py-9 max-md:py-6 flex flex-col justify-center"
            >
              <div className="font-display text-[clamp(36px,4vw,56px)] font-normal text-fg leading-none tracking-[-0.02em]">
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
      </div>
    </section>
  );
}
