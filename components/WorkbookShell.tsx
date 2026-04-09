import React from "react";
import Link from "next/link";
import { WORKBOOK_SUBTITLE, WORKBOOK_TITLE } from "../config/workbook";

const backToStartClass =
  "no-print inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold " +
  "bg-white text-slate-700 ring-1 ring-black/10 hover:bg-slate-50 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function WorkbookShell({
  children,
  rightBadge,
}: {
  children: React.ReactNode;
  rightBadge?: React.ReactNode;
}) {
  return (
    <div className="app-shell-bg">
      <div className="mx-auto max-w-5xl px-6 py-10 print-full-bleed">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <div className="text-2xl font-semibold text-slate-900">
              {WORKBOOK_TITLE}
            </div>
            <div className="text-base text-slate-500">{WORKBOOK_SUBTITLE}</div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-3 pt-0.5">
            <Link href="/" className={backToStartClass}>
              Back to start
            </Link>
            {rightBadge ? <div>{rightBadge}</div> : null}
          </div>
        </div>
        <div className="rounded-2xl bg-white/80 p-10 shadow-sm ring-1 ring-black/5">
          {children}
        </div>
      </div>
    </div>
  );
}

