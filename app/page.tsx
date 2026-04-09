import Link from "next/link";
import { WORKBOOK_SUBTITLE, WORKBOOK_TITLE } from "../config/workbook";

export default function Home() {
  return (
    <div className="app-shell-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">
        <div className="w-full rounded-2xl bg-white/80 p-10 shadow-sm ring-1 ring-black/5">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-1">
              <div className="text-2xl font-semibold text-slate-900">
                {WORKBOOK_TITLE}
              </div>
              <div className="text-base text-slate-500">{WORKBOOK_SUBTITLE}</div>
            </div>
            <span
              className="no-print inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400 ring-1 ring-slate-200/80"
              title="You're already on the workbook start page"
            >
              Back to start
            </span>
          </div>

          <div className="text-slate-700">
            <p>
              This interactive workbook will walk you through eight questions
              for designing user-centered AI experiences.
            </p>
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/q/1"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Begin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
