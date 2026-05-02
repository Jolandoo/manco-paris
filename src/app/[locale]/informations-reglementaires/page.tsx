import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "regulatory" });
  return { title: t("metaTitle") };
}

export default async function InformationsReglementairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "regulatory" });

  return (
    <article className="py-[120px] px-12 max-md:px-6 bg-bg-1 min-h-screen">
      <div className="max-w-[760px] mx-auto">
        <h1 className="font-display text-[clamp(32px,4vw,52px)] font-normal text-fg leading-[1.05] tracking-[-0.02em]">
          {t("title")}
        </h1>
        <div className="mt-10 prose-manco">
          <h2>{t("vote.title")}</h2>
          <p>{t("vote.body")}</p>

          <h2>{t("esg.title")}</h2>
          <p className="whitespace-pre-line">{t("esg.body")}</p>

          <h2>{t("sfdr.title")}</h2>
          <p className="whitespace-pre-line">{t("sfdr.body")}</p>

          <h2>{t("pai.title")}</h2>
          <p>{t("pai.body")}</p>

          <h2>{t("remuneration.title")}</h2>
          <p>{t("remuneration.body")}</p>

          <h2>{t("claims.title")}</h2>
          <p className="whitespace-pre-line">{t("claims.body")}</p>

          <h2>{t("conflicts.title")}</h2>
          <p className="whitespace-pre-line">{t("conflicts.body")}</p>

          <h2>{t("bestSelection.title")}</h2>
          <p className="whitespace-pre-line">{t("bestSelection.body")}</p>
        </div>
      </div>
    </article>
  );
}
