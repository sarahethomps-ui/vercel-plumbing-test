import Image from "next/image";
import Link from "next/link";
import { WORKBOOK_SUBTITLE, WORKBOOK_TITLE } from "../config/workbook";

export default function Home() {
  return (
    <div className="app-shell-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">
        <div className="w-full rounded-2xl bg-white/80 p-10 shadow-sm ring-1 ring-black/5">
          <div className="mb-8 space-y-1">
            <div className="text-2xl font-semibold text-slate-900">
              {WORKBOOK_TITLE}
            </div>
            <div className="text-base text-slate-500">{WORKBOOK_SUBTITLE}</div>
          </div>

          <div className="text-slate-700">
            <p>
              This interactive workbook will walk you through eight questions
              for designing user-centered AI experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full max-w-sm shrink-0 sm:max-w-[min(100%,320px)]">
              <Image
                src="/hero-human-ai.png"
                alt="Illustration of a friendly brain and robot shaking hands, representing human and AI collaboration"
                width={842}
                height={476}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <Link
              href="/q/1"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 sm:self-end"
            >
              Begin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
