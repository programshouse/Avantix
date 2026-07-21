import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatEGP(value) {
  return `${Number(value).toLocaleString("ar-EG")} جنيه`
}
