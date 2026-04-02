"use client"

import { cn } from "@/lib/utils"

export type Filter = "all" | "active" | "completed"

interface FilterButtonsProps {
  filter: Filter
  onFilterChange: (filter: Filter) => void
  counts: {
    all: number
    active: number
    completed: number
  }
}

export function FilterButtons({ filter, onFilterChange, counts }: FilterButtonsProps) {
  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ]

  return (
    <div className="flex gap-2">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            filter === value
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {label}
          <span className="ml-1.5 text-xs opacity-70">
            ({counts[value]})
          </span>
        </button>
      ))}
    </div>
  )
}
