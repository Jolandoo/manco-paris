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
          <h2>{t("editor.title")}</h2>
          <p>{t("editor.body")}</p>

          <h2>{t("hosting.title")}</h2>
          <p>{t("hosting.body")}</p>

          <h2>{t("dpo.title")}</h2>
          <p>{t("dpo.body")}</p>

          <h2>{t("cookies.title")}</h2>
          <p>{t("cookies.body")}</p>
        </div>
      </div>
    </article>
  );
}
