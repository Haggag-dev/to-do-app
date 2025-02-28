import { useEffect, useState } from "react";
import AddTask from "./AddTask";

const TasksConatiner = () => {
  const getTasks = () => JSON.parse(localStorage.getItem("tasks") || "[]");
  const saveTasks = (tasks: string[]) =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

  const [tasks, setTasks] = useState<string[]>(getTasks());
  const [task, setTask] = useState("");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: string) => {
    setTasks(() => {
      const newTasks = [...tasks, task];
      setTask("");
      return newTasks;
    });
  };

  return (
    <main>
      <AddTask addTask={(task: string) => addTask(task)} task={task} setTask={(task: string) => setTask(task)} />
    </main>
  );
};

export default TasksConatiner;
