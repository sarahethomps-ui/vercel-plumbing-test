"use client";

import React from "react";
import { STEPS, type WorkbookStep } from "../../../config/workbook";
import { useWorkbook } from "../../providers";
import { Button, LinkButton } from "../../../components/Button";
import { FieldLabel, RadioGroup, TextArea, TextInput } from "../../../components/Field";
import { WorkbookShell } from "../../../components/WorkbookShell";
import { ProgressPill } from "../../../components/ProgressPill";

function FieldRenderer({
  field,
  value,
  setValue,
}: {
  field: WorkbookStep["fields"][number];
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <FieldLabel title={field.label} description={field.helpText} />
      {field.type === "shortText" ? (
        <TextInput
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : null}
      {field.type === "longText" ? (
        <TextArea
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : null}
      {field.type === "radio" ? (
        <RadioGroup
          name={field.id}
          value={value}
          options={field.options ?? []}
          onChange={setValue}
        />
      ) : null}
    </div>
  );
}

export function QuestionClient({ stepId }: { stepId: number }) {
  const step = STEPS.find((s) => s.id === stepId);
  const { state, dispatch } = useWorkbook();

  if (!step) return null;

  const onReset = () => dispatch({ type: "reset" });

  return (
    <WorkbookShell rightBadge={<ProgressPill current={stepId} total={8} />}>
      <div className="space-y-6">
        <div>
          <div className="text-2xl font-semibold text-slate-900">
            {stepId}. {step.title}
          </div>
          {step.description ? (
            <div className="mt-2 text-slate-600">{step.description}</div>
          ) : null}
        </div>

        <div className="space-y-8">
          {step.fields.map((field) => (
            <FieldRenderer
              key={field.id}
              field={field}
              value={state.answers[field.id] ?? ""}
              setValue={(v) =>
                dispatch({ type: "setAnswer", fieldId: field.id, value: v })
              }
            />
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <LinkButton
              href={stepId === 1 ? "/" : `/pause/${stepId - 1}`}
              variant="secondary"
            >
              Back
            </LinkButton>
            <Button type="button" variant="ghost" onClick={onReset}>
              Reset
            </Button>
          </div>

          <LinkButton
            href={stepId === 8 ? "/results" : `/pause/${stepId}`}
            variant="primary"
          >
            Next
          </LinkButton>
        </div>
      </div>
    </WorkbookShell>
  );
}

