import React from "react";

type Variant = "primary" | "secondary" | "ghost";

function variantClass(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-slate-900 text-white hover:bg-slate-800";
    case "secondary":
      return "bg-white text-slate-700 ring-1 ring-black/10 hover:bg-slate-50";
    case "ghost":
      return "bg-transparent text-slate-700 hover:bg-slate-100/60";
  }
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...props}
      className={[
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        variantClass(variant),
        className ?? "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  children,
  className,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        variantClass(variant),
        className ?? "",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

