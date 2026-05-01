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
          <h2>{t("esg.title")}</h2>
          <p>{t("esg.body")}</p>

          <h2>{t("sfdr.title")}</h2>
          <p>{t("sfdr.body")}</p>

          <h2>{t("vote.title")}</h2>
          <p>{t("vote.body")}</p>

          <h2>{t("remuneration.title")}</h2>
          <p>{t("remuneration.body")}</p>
        </div>
      </div>
    </article>
  );
}
