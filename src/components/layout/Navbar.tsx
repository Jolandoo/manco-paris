"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  "team",
  "incubation",
  "assetManagers",
  "familyOffice",
  "institutional",
  "publications",
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent, hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", hash);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: "fr" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between transition-all duration-[280ms] ease-[cubic-bezier(.2,.7,.2,1)]",
        scrolled
          ? "py-3.5 px-12 max-md:px-6 bg-bg-0/[0.78] backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-white/10"
          : "py-[22px] px-12 max-md:px-6 bg-bg-0 border-b border-transparent",
      )}
    >
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Logo size={32} className="brightness-0 invert" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_KEYS.map((key) => {
          const isAnchor = key !== "publications";
          return (
            <Link
              key={key}
              href={isAnchor ? `/#${key}` : "/publications"}
              onClick={isAnchor ? (e: React.MouseEvent) => handleAnchorClick(e, `#${key}`) : undefined}
              className="font-sans text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-[160ms]"
            >
              {t(key)}
            </Link>
          );
        })}

        {/* Lang switch */}
        <button
          onClick={() => switchLocale(locale === "fr" ? "en" : "fr")}
          className="flex gap-0.5 p-[3px] border border-white/20 rounded-full font-mono text-[11px] cursor-pointer hover:border-white/40 transition-colors"
        >
          <span
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              locale === "fr" ? "bg-white text-bg-0" : "text-white/60",
            )}
          >
            FR
          </span>
          <span
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              locale === "en" ? "bg-white text-bg-0" : "text-white/60",
            )}
          >
            EN
          </span>
        </button>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span
          className={cn(
            "block w-6 h-0.5 bg-white transition-transform duration-200",
            menuOpen && "rotate-45 translate-y-2",
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-white transition-opacity duration-200",
            menuOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-white transition-transform duration-200",
            menuOpen && "-rotate-45 -translate-y-2",
          )}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-0/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-5">
          {NAV_KEYS.map((key) => {
            const isAnchor = key !== "publications";
            return (
              <Link
                key={key}
                href={isAnchor ? `/#${key}` : "/publications"}
                onClick={(e: React.MouseEvent) => {
                  setMenuOpen(false);
                  if (isAnchor) handleAnchorClick(e, `#${key}`);
                }}
                className="font-sans text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {t(key)}
              </Link>
            );
          })}
          <button
            onClick={() => switchLocale(locale === "fr" ? "en" : "fr")}
            className="flex gap-0.5 p-[3px] border border-white/20 rounded-full font-mono text-[11px] self-start cursor-pointer hover:border-white/40 transition-colors"
          >
            <span
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors",
                locale === "fr" ? "bg-white text-bg-0" : "text-white/60",
              )}
            >
              FR
            </span>
            <span
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors",
                locale === "en" ? "bg-white text-bg-0" : "text-white/60",
              )}
            >
              EN
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
