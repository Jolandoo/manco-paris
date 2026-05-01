import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return { title: t("metaTitle") };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <article className="py-[120px] px-12 max-md:px-6 bg-bg-1 min-h-screen">
      <div className="max-w-[760px] mx-auto">
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-normal text-fg leading-[1.05] tracking-[-0.02em]">
          {t("title")}
        </h1>
        <div className="mt-10 prose-manco">
          {(["editor", "dpo", "purpose", "content", "access", "ip", "contact", "amf", "shareholders"] as const).map((key) => (
            <div key={key}>
              <h2>{t(`${key}.title`)}</h2>
              <p className="whitespace-pre-line">{t(`${key}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
