import { format } from "date-fns";

/**
 * Standardize date formatting across the application.
 * @param date The date to format (string, number, or Date)
 * @param formatStr The date-fns format string (default: "MMM d, yyyy")
 * @returns Formatted date string or "N/A" if invalid
 */
export function formatDate(date: string | number | Date | null | undefined, formatStr = "MMM d, yyyy"): string {
  if (!date) return "N/A";
  try {
    return format(new Date(date), formatStr);
  } catch {
    return "Invalid Date";
  }
}

/**
 * Standardize currency formatting across the application.
 * Defaults to USD, as specified by the platform's primary currency.
 * @param amount The numeric amount to format
 * @param currency The ISO 4217 currency code (default: "USD")
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number | null | undefined, currency = "USD"): string {
  if (amount === null || amount === undefined || isNaN(amount)) return "$0.00";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
