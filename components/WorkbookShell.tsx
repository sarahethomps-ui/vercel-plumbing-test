import React from "react";
import { WORKBOOK_SUBTITLE, WORKBOOK_TITLE } from "../config/workbook";

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
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="text-2xl font-semibold text-slate-900">
              {WORKBOOK_TITLE}
            </div>
            <div className="text-slate-500">{WORKBOOK_SUBTITLE}</div>
          </div>
          {rightBadge ? <div>{rightBadge}</div> : null}
        </div>
        <div className="rounded-2xl bg-white/80 p-10 shadow-sm ring-1 ring-black/5">
          {children}
        </div>
      </div>
    </div>
  );
}

