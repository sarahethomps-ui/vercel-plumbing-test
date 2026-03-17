import { notFound } from "next/navigation";
import { PAUSE_MESSAGE, PAUSE_TITLE } from "../../../config/workbook";
import { LinkButton } from "../../../components/Button";
import { WorkbookShell } from "../../../components/WorkbookShell";

export default async function PausePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const step = Number(id);
  if (!Number.isInteger(step) || step < 1 || step > 7) return notFound();

  return (
    <WorkbookShell>
      <div className="py-10">
        <div className="text-center text-sm font-semibold text-slate-500">
          {PAUSE_TITLE}
        </div>
        <div className="mt-6 text-center text-2xl font-semibold text-slate-900">
          {PAUSE_MESSAGE}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <LinkButton href={`/q/${step}`} variant="secondary">
            Back
          </LinkButton>
          <LinkButton href={`/q/${step + 1}`} variant="primary">
            Continue
          </LinkButton>
        </div>
      </div>
    </WorkbookShell>
  );
}

