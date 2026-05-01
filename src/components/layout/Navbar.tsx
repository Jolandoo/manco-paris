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
          ? "py-3.5 px-12 max-md:px-6 bg-bg-0/[0.78] backdrop-blur-[20px] backdrop-saturate-[1.4] border-b border-border"
          : "py-[22px] px-12 max-md:px-6 bg-transparent border-b border-transparent",
      )}
    >
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Logo size={20} />
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_KEYS.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className="font-sans text-[13px] font-medium text-fg-dim hover:text-fg transition-colors duration-[160ms]"
          >
            {t(key)}
          </a>
        ))}

        {/* Lang switch */}
        <button
          onClick={() => switchLocale(locale === "fr" ? "en" : "fr")}
          className="flex gap-0.5 p-[3px] border border-border rounded-full font-mono text-[11px] cursor-pointer hover:border-border-strong transition-colors"
        >
          <span
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              locale === "fr" ? "bg-fg text-bg-0" : "text-fg-dim",
            )}
          >
            FR
          </span>
          <span
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              locale === "en" ? "bg-fg text-bg-0" : "text-fg-dim",
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
            "block w-6 h-0.5 bg-fg transition-transform duration-200",
            menuOpen && "rotate-45 translate-y-2",
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-fg transition-opacity duration-200",
            menuOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-fg transition-transform duration-200",
            menuOpen && "-rotate-45 -translate-y-2",
          )}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-0/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-5">
          {NAV_KEYS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base font-medium text-fg-dim hover:text-fg transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <button
            onClick={() => switchLocale(locale === "fr" ? "en" : "fr")}
            className="flex gap-0.5 p-[3px] border border-border rounded-full font-mono text-[11px] self-start cursor-pointer hover:border-border-strong transition-colors"
          >
            <span
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors",
                locale === "fr" ? "bg-fg text-bg-0" : "text-fg-dim",
              )}
            >
              FR
            </span>
            <span
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors",
                locale === "en" ? "bg-fg text-bg-0" : "text-fg-dim",
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
