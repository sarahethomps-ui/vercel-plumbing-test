import Link from "next/link";

export default function Home() {
  return (
    <div className="app-shell-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">
        <div className="w-full rounded-2xl bg-white/80 p-10 shadow-sm ring-1 ring-black/5">
          <div className="mb-8 flex items-center gap-3">
            <div className="text-2xl font-semibold text-slate-900">
              8 Questions
            </div>
            <div className="text-slate-500">The Psychology of AI User Experiences</div>
          </div>

          <div className="space-y-3 text-slate-700">
            <p>
              This is an interactive workbook. Your answers are saved in this
              browser.
            </p>
            <p>Click Begin to start.</p>
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
