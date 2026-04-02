# Task Manager AI Comparison

This project compares two approaches to building the same application:

1. Vibe Coding (v0)
2. AI Pair Programming (GitHub Copilot / Cursor)

Both versions implement the same task manager app.

---

## Live Deployments

- Vibe Version: https://69cdf0b4168c1c24e5ab0dd9--heroic-conkies-526cb2.netlify.app/
- Pair Version: https://69cdf1fed3dfc8302e6eb91c--peppy-peony-f18a07.netlify.app/

---

## Features

- Add a task
- Mark task as complete
- Filter tasks:
  - All
  - Active
  - Completed

---

## Comparison Table

| Dimension      | Vibe Version (v0) | Pair Version (Copilot/Cursor) | Verdict |
|---------------|------------------|-------------------------------|--------|
| Speed         | Generated full app in ~1–2 minutes | Took ~40 minutes to build manually | Vibe |
| Control       | No control over structure | Full control over every line | Pair |
| Code Quality  | Complex structure (Next.js, multiple folders) | Clean and simple structure | Pair |
| Explainability| Hard to understand generated hooks | Easy to explain each function | Pair |
| Editability   | Difficult to modify due to scattered logic | Easy to modify and extend | Pair |

---

## Observations

- Vibe tool generated a full Next.js app with multiple folders like app, hooks, lib
- Pair version was built step-by-step with full understanding
- Vibe version was extremely fast but harder to debug
- Pair version was slower but easier to maintain and modify

---

## When I Would Use Each Tool

### Vibe Coding Tool
- Quick demos
- Rapid prototyping
- Exploring UI ideas

### AI Pair Programming
- Production applications
- Maintainable codebases
- When debugging is required

---

## Tech Stack

- Vibe Version: Next.js
- Pair Version: React (Vite)
Final submission for Kalvium assignmentFinal submission for Kalvium assignment


Submission branch change