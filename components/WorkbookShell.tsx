import React from "react";
import { WORKBOOK_SUBTITLE, WORKBOOK_TITLE } from "../config/workbook";
import { BackToStart } from "./BackToStart";

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
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold text-slate-900">
                {WORKBOOK_TITLE}
              </div>
              <div className="text-base text-slate-500">{WORKBOOK_SUBTITLE}</div>
            </div>
            <BackToStart />
          </div>
          {rightBadge ? <div className="shrink-0 pt-0.5">{rightBadge}</div> : null}
        </div>
        <div className="rounded-2xl bg-white/80 p-10 shadow-sm ring-1 ring-black/5">
          {children}
        </div>
      </div>
    </div>
  );
}

