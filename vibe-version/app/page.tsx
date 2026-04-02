"use client"

import { useState, useMemo } from "react"
import { TaskInput } from "@/components/task-input"
import { TaskList } from "@/components/task-list"
import { FilterButtons, Filter } from "@/components/filter-buttons"
import { Task } from "@/components/task-item"

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Build a task manager app", completed: true },
    { id: "2", text: "Add dark mode support", completed: true },
    { id: "3", text: "Implement task filtering", completed: false },
    { id: "4", text: "Deploy to production", completed: false },
  ])
  const [filter, setFilter] = useState<Filter>("all")

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed)
      case "completed":
        return tasks.filter((t) => t.completed)
      default:
        return tasks
    }
  }, [tasks, filter])

  const counts = useMemo(
    () => ({
      all: tasks.length,
      active: tasks.filter((t) => !t.completed).length,
      completed: tasks.filter((t) => t.completed).length,
    }),
    [tasks]
  )

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-xl">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            Task Manager
          </h1>
          <p className="text-muted-foreground">
            Stay organized and get things done
          </p>
        </header>

        <div className="space-y-6">
          <TaskInput onAddTask={addTask} />

          <FilterButtons
            filter={filter}
            onFilterChange={setFilter}
            counts={counts}
          />

          <TaskList tasks={filteredTasks} onToggle={toggleTask} />
        </div>
      </div>
    </main>
  )
}
