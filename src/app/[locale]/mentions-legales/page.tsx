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
          <p className="whitespace-pre-line">{t("editor.body")}</p>

          <h2>{t("dpo.title")}</h2>

          <h3>{t("dpo.principles.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.principles.body")}</p>

          <h3>{t("dpo.framework.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.framework.body")}</p>

          <h3>{t("dpo.objectives.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.objectives.body")}</p>

          <h3>{t("dpo.dataCollected.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.dataCollected.body")}</p>

          <h3>{t("dpo.dataUse.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.dataUse.body")}</p>

          <h3>{t("dpo.registry.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.registry.body")}</p>

          <h3>{t("dpo.rights.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.rights.body")}</p>

          <h3>{t("dpo.retention.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.retention.body")}</p>

          <h3>{t("dpo.contactDpo.title")}</h3>
          <p className="whitespace-pre-line">{t("dpo.contactDpo.body")}</p>

          <h2>{t("purpose.title")}</h2>
          <p className="whitespace-pre-line">{t("purpose.body")}</p>

          <h2>{t("content.title")}</h2>

          <h3>{t("content.responsibilities.title")}</h3>
          <p className="whitespace-pre-line">{t("content.responsibilities.body")}</p>

          <h3>{t("content.hyperlinks.title")}</h3>
          <p className="whitespace-pre-line">{t("content.hyperlinks.body")}</p>

          <h3>{t("content.copyright.title")}</h3>
          <p className="whitespace-pre-line">{t("content.copyright.body")}</p>

          <h3>{t("content.copyrightUsage.title")}</h3>
          <p className="whitespace-pre-line">{t("content.copyrightUsage.body")}</p>

          <h2>{t("access.title")}</h2>
          <p className="whitespace-pre-line">{t("access.body")}</p>
        </div>
      </div>
    </article>
  );
}
