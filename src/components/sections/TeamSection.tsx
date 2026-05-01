"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { team as staticTeam } from "@/data/team";
import type { TeamMemberResult } from "@/sanity/queries";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

interface SanityMember {
  id: string;
  name: string;
  photo: string | null;
  titleFr: string;
  titleEn: string;
  bioFr: string;
  bioEn: string;
  email: string;
  linkedin: string;
}

function mapSanityMembers(members: TeamMemberResult[]): SanityMember[] {
  return members.map((m) => ({
    id: m._id,
    name: m.name,
    photo: m.photoUrl,
    titleFr: m.role || "",
    titleEn: m.roleEn || "",
    bioFr: m.bio || "",
    bioEn: m.bioEn || "",
    email: m.email || "",
    linkedin: m.linkedin || "",
  }));
}

export function TeamSection({ members }: { members?: TeamMemberResult[] }) {
  const t = useTranslations("team");
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  const teamData =
    members && members.length > 0 ? mapSanityMembers(members) : staticTeam;

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
          {teamData.map((member) => (
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
  member: SanityMember;
  locale: string;
  t: ReturnType<typeof useTranslations>;
  shouldReduce: boolean | null;
}) {
  const linkedinUrl = member.linkedin?.startsWith("http")
    ? member.linkedin
    : member.linkedin
      ? `https://${member.linkedin}`
      : null;

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
      <div className="relative flex-shrink-0 overflow-hidden aspect-square w-full bg-bg-3">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[64px] text-accent/50">
              {member.name
                .split(" ")
                .map((s) => s[0])
                .join("")}
            </span>
          </div>
        )}
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
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ LinkedIn
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
