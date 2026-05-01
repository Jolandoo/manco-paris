"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { type Question } from "@/data/questions";
import { cn } from "@/lib/utils";

interface SidePanelProps {
  question: Question | null;
  onClose: () => void;
}

export function SidePanel({ question, onClose }: SidePanelProps) {
  const t = useTranslations("sidePanel");
  const locale = useLocale();
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!question) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [question, onClose]);

  if (!question) return null;

  const q = question;
  const initials = q.contact.name
    .split(" ")
    .map((s) => s[0])
    .join("");

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[8px] animate-[fadeIn_250ms_ease-out]"
      />

      {/* Panel — ease-out-quint for enter, will-change for GPU */}
      <aside
        ref={panelRef}
        tabIndex={-1}
        className="fixed top-0 right-0 bottom-0 z-[91] w-[min(560px,92%)] bg-bg-1 border-l border-border overflow-y-auto p-10 max-md:p-6 will-change-transform animate-[slideIn_280ms_cubic-bezier(0.23,1,0.32,1)]"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="font-mono text-[11px] text-accent tracking-[0.18em]">
            ─ {q.category.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-border bg-transparent text-fg cursor-pointer text-base flex items-center justify-center hover:border-border-strong transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <h2 className="font-display text-[38px] max-md:text-[28px] font-normal leading-[1.05] tracking-[-0.02em] text-fg">
          {locale === "fr" ? q.titleFr : q.titleEn}
        </h2>

        {/* Body */}
        <p className="text-fg-dim font-sans text-[15px] leading-[1.65] mt-6">
          {locale === "fr" ? q.bodyFr : q.bodyEn}
        </p>

        {/* Contact card */}
        <div className="mt-9 p-6 rounded-xl bg-bg-2 border border-border">
          <div className="font-mono text-[10px] text-fg-faint tracking-[0.16em] mb-4">
            {t("interlocutor")}
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bg-3 to-bg-2 border border-border-strong flex items-center justify-center font-display text-[22px] text-accent">
              {initials}
            </div>
            <div>
              <div className="font-sans text-[15px] font-semibold text-fg">
                {q.contact.name}
              </div>
              <div className="font-sans text-[13px] text-fg-dim">
                {q.contact.title}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2 font-mono text-[12px] text-fg-dim">
            <span>✉ {q.contact.email}</span>
            <span>☏ {q.contact.phone}</span>
          </div>
        </div>

        {/* Contact form */}
        <ContactForm t={t} questionId={q.id} />
      </aside>
    </>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm({
  t,
  questionId,
}: {
  t: ReturnType<typeof useTranslations>;
  questionId: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      company: fd.get("company") as string,
      message: fd.get("message") as string,
      questionId,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 p-6 rounded-xl bg-bg-2 border border-accent/30">
        <p className="font-sans text-sm text-accent">{t("success")}</p>
      </div>
    );
  }

  return (
    <form className="mt-8 flex flex-col gap-3.5" onSubmit={handleSubmit}>
      <div className="font-mono text-[10px] text-fg-faint tracking-[0.16em]">
        {t("formTitle")}
      </div>
      {[
        { name: "name", label: t("name"), type: "text" },
        { name: "email", label: t("email"), type: "email" },
        { name: "company", label: t("company"), type: "text" },
      ].map((f) => (
        <label key={f.name} className="flex flex-col gap-1.5">
          <span className="font-sans text-[12px] text-fg-dim">{f.label}</span>
          <input
            name={f.name}
            type={f.type}
            required={f.name !== "company"}
            className={cn(
              "bg-bg-2 border border-border rounded-lg px-3.5 py-3 text-fg font-sans text-sm outline-none",
              "focus:border-accent transition-colors",
            )}
          />
        </label>
      ))}
      <label className="flex flex-col gap-1.5">
        <span className="font-sans text-[12px] text-fg-dim">
          {t("message")}
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="bg-bg-2 border border-border rounded-lg px-3.5 py-3 text-fg font-sans text-sm outline-none resize-y focus:border-accent transition-colors"
        />
      </label>
      {status === "error" && (
        <p className="font-sans text-sm text-red-400">{t("error")}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 self-start px-6 py-3.5 bg-accent text-white rounded-full font-sans text-sm font-semibold cursor-pointer hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("sending") : `${t("send")} →`}
      </button>
    </form>
  );
}
