import { notFound } from "next/navigation";
import { QuestionClient } from "./QuestionClient";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const step = Number(id);
  if (!Number.isInteger(step) || step < 1 || step > 8) return notFound();

  return <QuestionClient stepId={step} />;
}

