"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VideoTile } from "@/components/sections/SGPDetail";

const videos = [
  { num: "04", title: "CGP — Architecture ouverte" },
  { num: "05", title: "Institutionnel — One-stop-shop" },
];

export function VideosFullBleed() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="familyOffice" className="py-[120px] max-md:py-16 px-12 max-md:px-6 bg-bg-0 border-b border-border scroll-mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduce ? 0 : 0.12 },
          },
        }}
        className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6"
      >
        {videos.map((v) => (
          <motion.div
            key={v.num}
            variants={
              shouldReduce
                ? { hidden: {}, visible: {} }
                : {
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.45,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    },
                  }
            }
          >
            <h3 className="font-display text-[clamp(24px,2.4vw,36px)] font-normal text-fg mb-4 tracking-[-0.015em]">
              {v.title}
            </h3>
            <VideoTile label="PRÉSENTATION · 03:24" big />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
