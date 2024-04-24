import { Task } from "@/types";
import { TaskItem } from "@/components/task-item";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, toggleTask, deleteTask }: TaskListProps) => {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </section>
  );
};
