import { Task } from "@/types";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
  return (
    <li className="group flex items-center justify-between border-b border-gray-300 py-3">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-7 w-7"
          defaultChecked={task.completed}
          onClick={() => {
            toggleTask(task.id);
          }}
        />
        <span
          className={`ml-4 w-full text-gray-700 ${
            task.completed && "line-through"
          }`}
        >
          {task.content}
        </span>
      </div>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="hidden text-red-500 font-sans font-semibold group-hover:block"
      >
        delete
      </button>
    </li>
  );
};
