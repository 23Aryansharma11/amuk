import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formDataToString(data: FormData): Record<string, string> {
  const dataObj: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    dataObj[key] = value.toString();
  }

  return dataObj;
}
