import { setRequestLocale, getTranslations } from "next-intl/server";
import { getPublications } from "@/sanity/queries";
import { PublicationsClient } from "./PublicationsClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "publications" });
    return { title: t("metaTitle") };
}

export default async function PublicationsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const publications = await getPublications(locale);

    return (
        <section className="py-[120px] px-12 max-md:px-6 bg-bg-1 min-h-screen">
            <div className="max-w-container mx-auto">
                <PublicationsClient publications={publications} />
            </div>
        </section>
    );
}
