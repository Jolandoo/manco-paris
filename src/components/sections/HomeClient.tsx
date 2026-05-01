"use client";

import { useState } from "react";
import { type Question } from "@/data/questions";
import { QuestionsGrid } from "@/components/sections/QuestionsGrid";
import { SidePanel } from "@/components/ui/SidePanel";

export function HomeClient({ questions }: { questions?: Question[] }) {
  const [openQuestion, setOpenQuestion] = useState<Question | null>(null);

  return (
    <>
      <QuestionsGrid onOpen={setOpenQuestion} questions={questions} />
      <SidePanel
        question={openQuestion}
        onClose={() => setOpenQuestion(null)}
      />
    </>
  );
}
