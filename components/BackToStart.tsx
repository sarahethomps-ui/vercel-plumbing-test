"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BackToStart() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="no-print pt-2">
      <Link
        href="/"
        className="text-sm font-semibold text-slate-500 hover:text-slate-700"
      >
        Back to start
      </Link>
    </div>
  );
}
