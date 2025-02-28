import { useEffect, useState } from "react";

interface Props {
  task: string;
  addTask: (task: string) => void;
  setTask: (task: string) => void;
}

const AddTasks = ({ task, addTask, setTask }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && task.trim()) addTask(task);
  };

  return (
    <div className="flex bg-[#22177A] text-white max-w-70 mt-10 px-3 py-2 justify-between mx-auto rounded-xl gap-x-1 group transition-transform duration-100 focus-within:scale-104">
      <input
        className="grow-1 text-white px-2 py-1 placeholder-white focus:outline-none focus:ring-0"
        type="text"
        placeholder="Add Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button className="text-xl" onClick={() => addTask(task)}>
        +
      </button>
    </div>
  );
};

export default AddTasks;
