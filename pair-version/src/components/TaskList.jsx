export default function TaskList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} onClick={() => toggleTask(task.id)}>
          {task.title} {task.completed ? "✔" : ""}
        </li>
      ))}
    </ul>
  );
}