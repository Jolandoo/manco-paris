import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { HomeClient } from "@/components/sections/HomeClient";
import { PersonaColumns } from "@/components/sections/PersonaColumns";
import { SGPDetail } from "@/components/sections/SGPDetail";
import { VideosFullBleed } from "@/components/sections/VideosFullBleed";
import { TeamSection } from "@/components/sections/TeamSection";
import { Shareholders } from "@/components/sections/Shareholders";
import { CrispChat } from "@/components/integrations/CrispChat";
import {
    getTeamMembers,
    getQuestions,
    getPersonas,
    getServices,
} from "@/sanity/queries";
import type { Question } from "@/data/questions";
import type { Persona } from "@/data/personas";
import type { Service } from "@/data/services";
import type { QuestionResult, PersonaResult, ServiceResult } from "@/sanity/queries";

function mapQuestions(qs: QuestionResult[]): Question[] {
    return qs.map((q, i) => ({
        id: q._id,
        titleFr: q.titleFr || "",
        titleEn: q.titleEn || "",
        category: q.category || "",
        bodyFr: q.bodyFr || "",
        bodyEn: q.bodyEn || "",
        glyph: q.glyph || "",
        contact: {
            name: q.contactName || "",
            title: q.contactTitle || "",
            email: q.contactEmail || "",
            phone: q.contactPhone || "",
        },
    }));
}

function mapPersonas(ps: PersonaResult[]): Persona[] {
    return ps.map((p) => ({
        num: p.num || "",
        titleFr: p.titleFr || "",
        titleEn: p.titleEn || "",
        subtitleFr: p.subtitleFr || "",
        subtitleEn: p.subtitleEn || "",
    }));
}

function mapServices(ss: ServiceResult[]): Service[] {
    return ss.map((s) => ({
        glyph: s.glyph || "",
        titleFr: s.titleFr || "",
        titleEn: s.titleEn || "",
        descFr: s.descFr || "",
        descEn: s.descEn || "",
    }));
}

export default async function HomePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const [members, questionsRaw, personasRaw, servicesRaw] = await Promise.all([
        getTeamMembers(),
        getQuestions(),
        getPersonas(),
        getServices(),
    ]);

    const questions = questionsRaw.length > 0 ? mapQuestions(questionsRaw) : undefined;
    const personas = personasRaw.length > 0 ? mapPersonas(personasRaw) : undefined;
    const services = servicesRaw.length > 0 ? mapServices(servicesRaw) : undefined;

    return (
        <>
            <Hero />
            <HomeClient questions={questions} />
            <PersonaColumns personas={personas} />
            <SGPDetail services={services} />
            <VideosFullBleed />
            <TeamSection members={members} />
            <Shareholders />
            <CrispChat />
        </>
    );
}
