"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Task {
  id: string
  text: string
  completed: boolean
}

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <button
      onClick={() => onToggle(task.id)}
      className="flex w-full items-center gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:bg-secondary"
    >
      <div
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          task.completed
            ? "border-accent bg-accent"
            : "border-muted-foreground"
        )}
      >
        {task.completed && (
          <Check className="h-3 w-3 text-accent-foreground" />
        )}
      </div>
      <span
        className={cn(
          "flex-1 transition-colors",
          task.completed
            ? "text-muted-foreground line-through"
            : "text-foreground"
        )}
      >
        {task.text}
      </span>
    </button>
  )
}
