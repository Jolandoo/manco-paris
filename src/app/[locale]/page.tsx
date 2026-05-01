import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { HomeClient } from "@/components/sections/HomeClient";
import { PersonaColumns } from "@/components/sections/PersonaColumns";
import { SGPDetail } from "@/components/sections/SGPDetail";
import { VideosFullBleed } from "@/components/sections/VideosFullBleed";
import { TeamSection } from "@/components/sections/TeamSection";
import { Shareholders } from "@/components/sections/Shareholders";
import { CrispChat } from "@/components/integrations/CrispChat";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <HomeClient />
      <PersonaColumns />
      <SGPDetail />
      <VideosFullBleed />
      <TeamSection />
      <Shareholders />
      <CrispChat />
    </>
  );
}
