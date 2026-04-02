"use client"

import { TaskItem, Task } from "./task-item"

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
}

export function TaskList({ tasks, onToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-2 text-4xl">📋</div>
        <p className="text-muted-foreground">No tasks to display</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  )
}
