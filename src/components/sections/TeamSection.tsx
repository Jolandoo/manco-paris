"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { team, type TeamMember } from "@/data/team";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

export function TeamSection() {
  const t = useTranslations("team");
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="team"
      className="py-[120px] max-md:py-16 px-12 max-md:px-6 bg-bg-1 border-b border-border scroll-mt-20"
    >
      <div className="max-w-container mx-auto">
        <FadeIn>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-[clamp(24px,4.5vw,60px)] font-normal text-fg leading-[1] tracking-[-0.025em] mt-4">
            {t.rich("title", {
              accent: (chunks) => (
                <em className="italic text-accent">{chunks}</em>
              ),
            })}
          </h2>
          <p className="text-fg-dim font-sans text-base leading-relaxed mt-6 max-w-[640px]">
            {t("intro")}
          </p>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: shouldReduce ? 0 : 0.1 },
            },
          }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
        >
          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              locale={locale}
              t={t}
              shouldReduce={shouldReduce}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  locale,
  t,
  shouldReduce,
}: {
  member: TeamMember;
  locale: string;
  t: ReturnType<typeof useTranslations>;
  shouldReduce: boolean | null;
}) {
  return (
    <motion.div
      variants={
        shouldReduce
          ? { hidden: {}, visible: {} }
          : {
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
              },
            }
      }
      className="glass-card overflow-hidden flex flex-col"
    >
      {/* Portrait */}
      <div className="relative flex-shrink-0 overflow-hidden aspect-square w-full">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-[26px] font-normal text-fg tracking-[-0.01em]">
          {member.name}
        </h3>
        <div className="font-sans text-[13px] text-fg-dim mt-1">
          {locale === "fr" ? member.titleFr : member.titleEn}
        </div>

        <p className="text-fg-dim font-sans text-sm leading-relaxed mt-4">
          {locale === "fr" ? member.bioFr : member.bioEn}
        </p>

        <div className="mt-4 flex flex-col gap-1.5 font-mono text-[12px] text-fg-dim">
          <span>✉ {member.email}</span>
          {member.linkedin && (
            <a
              href={`https://${member.linkedin}`}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ {member.linkedin}
            </a>
          )}
        </div>

        <div className="mt-auto pt-5">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-accent text-white rounded-full font-sans text-[13px] font-semibold hover:brightness-110 transition-colors"
          >
            {t("contact")} ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}
