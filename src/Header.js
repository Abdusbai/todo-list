import { useState } from "react";

export function Header({ onAddTask, sort, setSortBy }) {
  const [description, setDescription] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newTask = { id: Date.now(), description, done: false };
    onAddTask(newTask);

    setDescription("");
  }

  return (
    <header>
      <div className="logo">
        <div className="title">
          <p className="todo">Todo &nbsp; List </p>
        </div>

        <div className="actions">
          <select value={sort} onChange={e => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="tasks">Sort by tasks status</option>
          </select>
        </div>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <button className="add-btn">Add</button>
      </form>
    </header>
  );
}
