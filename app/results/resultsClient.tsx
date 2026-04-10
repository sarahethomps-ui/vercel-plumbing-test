"use client";

import React from "react";
import { STEPS } from "../../config/workbook";
import { Button, LinkButton } from "../../components/Button";
import { WorkbookShell } from "../../components/WorkbookShell";
import { useWorkbook } from "../providers";
import { buildPrompt } from "../../lib/prompt";

type Tab = "answers" | "prompt";

async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

/** Plain text matching the Answers tab: "Your Answers", each Q line, field labels + values (no Update links). */
function buildAnswersClipboardText(answers: Record<string, string>) {
  const parts: string[] = ["Your Answers", ""];
  for (const step of STEPS) {
    parts.push(`Q${step.id} — ${step.title}`);
    parts.push("");
    for (const f of step.fields) {
      parts.push(f.label);
      // Match AnswerRollup: show raw stored value if truthy, else em dash
      parts.push(answers[f.id] ? answers[f.id] : "—");
      parts.push("");
    }
    parts.push("");
  }
  return parts.join("\n").trimEnd();
}

function AnswerRollup({ answers }: { answers: Record<string, string> }) {
  return (
    <div className="space-y-10">
      {STEPS.map((step) => (
        <div key={step.id} className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="text-lg font-semibold text-slate-900">
              Q{step.id} — {step.title}
            </div>
            <a
              href={`/q/${step.id}`}
              className="text-sm font-semibold text-slate-500 hover:text-slate-700"
            >
              Update
            </a>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            {step.fields.map((f) => (
              <div key={f.id}>
                <div className="font-semibold text-slate-900">{f.label}</div>
                <div className="whitespace-pre-wrap text-slate-700">
                  {answers[f.id] ? answers[f.id] : <span className="text-slate-400">—</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResultsClient() {
  const { state } = useWorkbook();
  const [tab, setTab] = React.useState<Tab>("answers");
  const [copied, setCopied] = React.useState<null | "answers" | "prompt">(null);

  const prompt = React.useMemo(() => buildPrompt(state.answers), [state.answers]);

  const onCopyAnswers = async () => {
    const text = buildAnswersClipboardText(state.answers);
    await copyText(text);
    setCopied("answers");
    window.setTimeout(() => setCopied(null), 1200);
  };

  const onCopyPrompt = async () => {
    await copyText(prompt);
    setCopied("prompt");
    window.setTimeout(() => setCopied(null), 1200);
  };

  const onPrint = () => window.print();

  return (
    <WorkbookShell
      rightBadge={
        <div className="no-print">
          <Button type="button" variant="secondary" onClick={onPrint}>
            Print
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        <div className="no-print flex items-center gap-2 rounded-xl bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => setTab("answers")}
            className={[
              "h-9 rounded-lg px-4 text-sm font-semibold",
              tab === "answers" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
            ].join(" ")}
          >
            Answers
          </button>
          <button
            type="button"
            onClick={() => setTab("prompt")}
            className={[
              "h-9 rounded-lg px-4 text-sm font-semibold",
              tab === "prompt" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900",
            ].join(" ")}
          >
            Prompt
          </button>

          <div className="ml-auto flex items-center gap-2 pr-1">
            <Button type="button" variant="secondary" onClick={onCopyAnswers}>
              {copied === "answers" ? "Copied" : "Copy Answers"}
            </Button>
            <Button type="button" variant="secondary" onClick={onCopyPrompt}>
              {copied === "prompt" ? "Copied" : "Copy Prompt"}
            </Button>
          </div>
        </div>

        {tab === "answers" ? (
          <div>
            <div className="mb-6 text-xl font-semibold text-slate-900">
              Your Answers
            </div>
            <AnswerRollup answers={state.answers} />
          </div>
        ) : (
          <div>
            <div className="mb-4 text-sm font-semibold text-slate-500">
              Prompt for AI to build your prototype
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 shadow-sm">
              <pre className="whitespace-pre-wrap font-mono text-slate-900">{prompt}</pre>
            </div>
          </div>
        )}

        <div className="no-print flex items-center justify-between pt-4">
          <LinkButton href="/q/8" variant="secondary">
            Back
          </LinkButton>
          <LinkButton href="/" variant="primary">
            Start over
          </LinkButton>
        </div>
      </div>
    </WorkbookShell>
  );
}

