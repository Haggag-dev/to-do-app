import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

const TasksContainer = () => {
  const getTasks = () =>
    JSON.parse(
      localStorage.getItem("tasks") ||
        '[{"id":1,"name":"Walk the dog 🐕","isCompleted":true},{"id":2,"name":"Clean the car","isCompleted":false}]'
    );
  const saveTasks = (tasks: Task[]) =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

  const [tasks, setTasks] = useState<Task[]>(getTasks());
  const [task, setTask] = useState("");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: string) => {
    if (task) {
      setTasks(() => {
        const id = Date.now();
        const newTasks = [...tasks, { id, name: task, isCompleted: false }];
        setTask("");
        return newTasks;
      });
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTaskCompletion = (id: number) => {
    setTasks(() =>
      tasks.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : { ...task }
      )
    );
  };

  return (
    <main>
      <AddTask
        addTask={(task: string) => addTask(task)}
        task={task}
        setTask={(task: string) => setTask(task)}
      />

      <Tasks
        tasks={tasks}
        deleteTask={(id: number) => deleteTask(id)}
        updateTaskCompletion={(id: number) => updateTaskCompletion(id)}
      />
    </main>
  );
};

export default TasksContainer;
