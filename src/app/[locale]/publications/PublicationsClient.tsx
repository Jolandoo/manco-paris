"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { type PublicationResult } from "@/sanity/queries";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CATEGORIES = ["all", "article", "interview", "webinaire"] as const;

interface Props {
  publications: PublicationResult[];
}

export function PublicationsClient({ publications }: Props) {
  const t = useTranslations("publications");
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? publications
      : publications.filter((p) => p.category === filter);

  return (
    <>
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <h1 className="font-display text-[clamp(36px,4.5vw,60px)] font-normal text-fg leading-[1] tracking-[-0.025em] mt-4">
        {t("title")}
      </h1>

      {/* Filters */}
      <div className="mt-10 flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full font-sans text-[13px] font-medium cursor-pointer transition-colors border",
              filter === cat
                ? "bg-accent text-white border-accent"
                : "bg-transparent text-fg-dim border-border hover:border-border-strong",
            )}
          >
            {t(`filter.${cat}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <p className="text-fg-dim font-sans col-span-full">{t("empty")}</p>
        ) : (
          filtered.map((pub) => (
            <Link
              key={pub._id}
              href={`/publications/${pub.slug}`}
              className="glass-card overflow-hidden group block transition-all duration-[240ms] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-bg-3 to-bg-2 relative">
                {pub.thumbnailUrl && (
                  <img
                    src={pub.thumbnailUrl}
                    alt={pub.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 rounded font-mono text-[10px] text-fg tracking-[0.12em]">
                  {pub.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono text-[11px] text-fg-faint tracking-[0.12em]">
                  {new Date(pub.publishedAt).toLocaleDateString("fr-FR")}
                </div>
                <h3 className="font-display text-[22px] font-normal text-fg mt-2 tracking-[-0.01em] leading-[1.2] group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
