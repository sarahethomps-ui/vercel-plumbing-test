import React from "react";

export function FieldLabel({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-1">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      {description ? (
        <div className="text-sm text-slate-500">{description}</div>
      ) : null}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900",
        "placeholder:text-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-slate-300",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-slate-300",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function RadioGroup({
  name,
  value,
  options,
  onChange,
}: {
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 hover:bg-slate-50"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="h-4 w-4"
          />
          <span className="text-sm text-slate-900">{opt}</span>
        </label>
      ))}
    </div>
  );
}

/** Value is newline-separated selections, in config option order. */
export function MultiSelectGroup({
  name,
  value,
  options,
  onChange,
}: {
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const selected = new Set(
    value
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
  );

  const toggle = (opt: string) => {
    const next = new Set(selected);
    if (next.has(opt)) next.delete(opt);
    else next.add(opt);
    const ordered = options.filter((o) => next.has(o));
    onChange(ordered.join("\n"));
  };

  return (
    <div className="space-y-3" role="group" aria-label={name}>
      {options.map((opt, i) => (
        <label
          key={opt}
          className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 hover:bg-slate-50"
        >
          <input
            type="checkbox"
            name={`${name}-${i}`}
            checked={selected.has(opt)}
            onChange={() => toggle(opt)}
            className="mt-1 h-4 w-4 shrink-0"
          />
          <span className="text-sm leading-snug text-slate-900">{opt}</span>
        </label>
      ))}
    </div>
  );
}

