import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date as DD/MM/YYYY
 * Ensures consistent date display across all browsers/locales
 */
export function formatDateDDMMYYYY(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Format time as HH:MM (24-hour format)
 * Ensures consistent time display across all browsers/locales
 */
export function formatTime24(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * Format time as HH:MM AM/PM (12-hour format)
 * Ensures consistent time display across all browsers/locales
 */
export function formatTime12(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${String(hours12).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${ampm}`;
}

/**
 * Format date and time as DD/MM/YYYY HH:MM
 */
export function formatDateTime(date: Date | string): string {
  const dateStr = formatDateDDMMYYYY(date);
  const timeStr = formatTime24(date);
  return `${dateStr} ${timeStr}`;
}

/**
 * Get month name from date
 * Ensures consistency across all browsers/locales
 */
export function getMonthName(date: Date | string | number): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = typeof date === "string" ? new Date(date) : typeof date === "number" ? new Date(date) : date;
  return months[d.getMonth()];
}
