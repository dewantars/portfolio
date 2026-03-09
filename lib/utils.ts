import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYear(year: number | null): string {
  return year ? year.toString() : "Sekarang";
}

export function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Sekarang";
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
}
