import { Task } from "./components/task/Task";
import styles from "./App.module.css";
import React from "react";

export const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    setTasks(data);
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task name={task.name} desc={task.desc} />
        ))}
      </div>
    </>
  );
};
