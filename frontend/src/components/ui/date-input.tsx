"use client";

import React, { useRef } from "react";
import { Calendar } from "lucide-react";
import { formatDateDDMMYYYY } from "@/lib/utils";

interface DateInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  value: string; // YYYY-MM-DD
  onChange: (value: string) => void;
}

export default function DateInput({
  value,
  onChange,
  className = "",
  min,
  ...rest
}: DateInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const formatted = value
    ? (() => {
        try {
          // Keep in local timezone
          const d = new Date(value + "T00:00:00");
          return formatDateDDMMYYYY(d);
        } catch {
          return "";
        }
      })()
    : "";

  const handleClick = () => {
    if (inputRef.current) {
      try {
        if (inputRef.current.showPicker) {
          inputRef.current.showPicker();
        } else {
          inputRef.current.focus();
          inputRef.current.click();
        }
      } catch {
        inputRef.current.focus();
        inputRef.current.click();
      }
    }
  };

  return (
    <div
      className={`relative inline-flex items-center cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="pointer-events-none flex items-center gap-2 py-1">
        <Calendar className="w-4 h-4 opacity-80" />
        <span className="text-sm whitespace-nowrap">
          {formatted || "Select date"}
        </span>
      </div>

      <input
        ref={inputRef}
        aria-label="date"
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        style={{ colorScheme: "dark" }}
        {...rest}
      />
    </div>
  );
}
