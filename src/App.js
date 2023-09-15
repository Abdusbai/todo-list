import { useState, useEffect } from "react";
import { TasksList } from "./TasksList";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [sort, setSortBy] = useState("input");

  function handleAddTasks(task) {
    setTasks((t) => [...t, task]);
  }

  function handleDeleteItem(id) {
    setTasks((t) => t.filter((ta) => ta.id !== id));
  }

  function handleUpdateItem(id) {
    setTasks((t) =>
      t.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  function deleteListItems(){
    const confirmed = window.confirm("Are you sure you want to delete all items ?")
    
    if(confirmed) setTasks([]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header onAddTask={handleAddTasks} sort={sort} setSortBy={setSortBy}/>
      <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteItem}
        onUpdateTask={handleUpdateItem}
        sort={sort}
      />
      <Footer tasks={tasks} deleteListItems={deleteListItems}/>
    </>
  );
}


