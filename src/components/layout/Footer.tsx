import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";

const NAV_KEYS = [
  "team",
  "incubation",
  "assetManagers",
  "familyOffice",
  "institutional",
  "publications",
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-bg-0 px-12 max-md:px-6 pt-16 max-md:pt-10 pb-8 text-white/60 font-sans">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 pb-12 border-b border-white/10">
          {/* Col 1 — Brand */}
          <div>
            <Logo size={22} className="brightness-0 invert" />
            <p className="text-[13px] leading-relaxed mt-4 max-w-[320px]">
              {t("tagline")}
            </p>
          </div>

          {/* Col 2 — Sitemap */}
          <div>
            <div className="font-mono text-[10px] text-white/40 tracking-[0.16em] mb-3.5">
              {t("sitemap")}
            </div>
            {NAV_KEYS.map((key) => (
              <Link
                key={key}
                href={key === "publications" ? "/publications" : `/#${key}`}
                className="block text-[13px] mb-2 hover:text-white transition-colors"
              >
                {nav(key)}
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div>
            <div className="font-mono text-[10px] text-white/40 tracking-[0.16em] mb-3.5">
              {t("contact")}
            </div>
            <a href={`mailto:${t("email")}`} className="block text-[13px] mb-2 hover:text-white transition-colors">{t("email")}</a>
            <a href={`tel:${t("phone")}`} className="block text-[13px] mb-2 hover:text-white transition-colors">{t("phone")}</a>
            <div className="text-[13px] mb-2 whitespace-pre-line">
              {t("address")}
            </div>
          </div>

          {/* Col 4 — Social */}
          <div>
            <div className="font-mono text-[10px] text-white/40 tracking-[0.16em] mb-3.5">
              {t("follow")}
            </div>
            <a href="https://www.linkedin.com/company/manco-paris" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-white transition-colors">↗ {t("linkedin")}</a>
            <a href="https://twitter.com/MancoParis" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-white transition-colors">↗ {t("twitter")}</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 max-md:flex-col max-md:items-start max-md:gap-2 pt-6 font-mono text-[11px] text-white/40 tracking-[0.12em]">
          <span>{t("amf")}</span>
          <span className="flex flex-wrap gap-x-1">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">{t("legal")}</Link>
            <span>·</span>
            <Link href="/informations-reglementaires" className="hover:text-white transition-colors">{t("privacy")}</Link>
            <span>·</span>
            <span>{t("cookies")}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
