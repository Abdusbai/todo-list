
export function Task({ task, onDeleteTask, onUpdateTask }) {
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        value={task.done}
        onClick={() => onUpdateTask(task.id)} />
      <label htmlFor={task.id} className={task.done ? "line-through" : ""}>
        {task.description}{" "}
      </label>
      <button className="close-btn" onClick={() => onDeleteTask(task.id)}>
        ❌
      </button>
    </li>
  );
}
