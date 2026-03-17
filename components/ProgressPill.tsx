export function ProgressPill({ current, total }: { current: number; total: number }) {
  return (
    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
      {current}/{total}
    </div>
  );
}

