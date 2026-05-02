import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Manrope, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/integrations/CookieBanner";
import { GoogleAnalytics } from "@/components/integrations/GoogleAnalytics";

const clashDisplay = localFont({
    src: "../../../public/fonts/ClashDisplay-Variable.woff2",
    variable: "--font-clash-display",
    display: "swap",
    weight: "200 700",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "meta" });

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("title"),
            description: t("description"),
            locale,
            type: "website",
            siteName: "MANCO PARIS",
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html
            lang={locale}
            className={`${clashDisplay.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
        >
            <body className="min-h-screen bg-bg-1 text-fg font-sans">
                <NextIntlClientProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <CookieBanner />
                    <GoogleAnalytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
