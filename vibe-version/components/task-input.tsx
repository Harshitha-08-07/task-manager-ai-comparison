"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState("")

  const handleSubmit = () => {
    const trimmed = text.trim()
    if (trimmed) {
      onAddTask(trimmed)
      setText("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
      <Plus className="h-5 w-5 text-muted-foreground" />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
    </div>
  )
}
