import { Task } from "./TasksContainer";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
  updateTaskCompletion: (id: number) => void;
}

const Tasks = ({ tasks, deleteTask, updateTaskCompletion }: Props) => {
  return (
    <section className="mb-20 grid grid-cols-1 place-items-center grid-xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-col border-1 bg-neutral-950 border-neutral-500 border-solid w-full max-w-50 lg:max-w-60 mt-6 px-3 py-2 rounded-md justify-center items-center gap-y-3"
        >
          <p
            className={`text-justify w-full ${
              task.isCompleted ? "line-through text-neutral-400 " : ""
            }`}
          >
            {task.name}
          </p>
          <div className="flex w-full justify-center gap-x-5">
            <button
              className="border-1 border-neutral-500 border-solid rounded-lg size-7.5 cursor-pointer"
              onClick={() => updateTaskCompletion(task.id)}
            >
              ✔️
            </button>
            <button
              className="border-1 border-neutral-500 border-solid rounded-lg size-7.5 cursor-pointer"
              onClick={() => deleteTask(task.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tasks;
