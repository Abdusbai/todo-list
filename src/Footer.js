export function Footer({ tasks, deleteListItems }) {
  const completedTasks = tasks.filter((t) => t.done).length;
  const totalTasks = tasks.length;

  const completedTasksCount = isNaN(completedTasks) ? 0 : completedTasks;
  const totalTasksCount = isNaN(totalTasks) ? 0 : totalTasks;
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <span>
            You have <strong>{totalTasksCount}</strong> tasks on your list.
          </span>
          <span>
            You have completed <strong>{completedTasksCount}</strong> tasks (
            <strong>
              {totalTasksCount > 0
                ? Math.round((completedTasksCount / totalTasksCount) * 100)
                : 0}
              %
            </strong>
            ).
          </span>
        </div>
        <div className="right">
          <button className="add-btn" onClick={deleteListItems}>Clear list</button>
        </div>
      </div>

      <div className="bottom">Made with ❤️ by <strong><a href="mailto:sbai.itsd@gmail.com">SBAI ABDESSAMAD</a></strong></div>

    </footer>
  );
}
