import { Task } from "./Task";

export function TasksList({ tasks, onDeleteTask, onUpdateTask, sort }) {
  let sortedTasks;
  if (sort === "input") sortedTasks = tasks;
  if (sort === "description") sortedTasks = tasks.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "tasks") sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <main>
      <ul key={tasks.id}>
        {sortedTasks.map((task) => (
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
            key={task.id} />
        ))}
      </ul>
    </main>
  );
}
