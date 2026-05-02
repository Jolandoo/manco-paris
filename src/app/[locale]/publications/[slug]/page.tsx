import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getPublication, getPublicationSlugs } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import { Link } from "@/i18n/navigation";

export async function generateStaticParams() {
    const slugs = await getPublicationSlugs();
    return slugs.map(({ slug, locale }) => ({ slug, locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>;
}) {
    const { slug, locale } = await params;
    const pub = await getPublication(slug, locale);
    return { title: pub?.title || "Publication" };
}

export default async function PublicationPage({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>;
}) {
    const { slug, locale } = await params;
    setRequestLocale(locale);

    const pub = await getPublication(slug, locale);
    if (!pub) notFound();

    return (
        <article className="py-[120px] px-12 max-md:px-6 bg-bg-1 min-h-screen">
            <div className="max-w-[760px] mx-auto">
                <Link
                    href="/publications"
                    className="font-mono text-[11px] text-fg-dim tracking-[0.16em] hover:text-accent transition-colors"
                >
                    ← PUBLICATIONS
                </Link>

                <div className="mt-8 font-mono text-[11px] text-accent tracking-[0.16em]">
                    {pub.category.toUpperCase()} ·{" "}
                    {new Date(pub.publishedAt).toLocaleDateString("fr-FR")}
                </div>
                <h1 className="font-display text-[clamp(32px,4vw,52px)] font-normal text-fg leading-[1.05] tracking-[-0.02em] mt-4">
                    {pub.title}
                </h1>

                {pub.videoUrl && (
                    <div className="mt-10 aspect-video rounded-xl overflow-hidden border border-border">
                        <iframe
                            src={pub.videoUrl}
                            className="w-full h-full"
                            allowFullScreen
                            title={pub.title}
                        />
                    </div>
                )}

                {pub.body && (
                    <div className="mt-10 prose-manco">
                        <PortableText value={pub.body} />
                    </div>
                )}
            </div>
        </article>
    );
}
