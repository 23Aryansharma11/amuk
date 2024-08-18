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

export const formatNumber = (number: number, threshold: number = 100): string => {
  return number > threshold ? `${Math.floor(number / threshold) * threshold}+` : number.toString()
}

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options)
}