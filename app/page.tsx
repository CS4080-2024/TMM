import { TaskList } from "@/components/tasks";

export default function Home() {
const tasks =[{
  isfinish:false, content:"Task 1"
},{
  isfinish:true, content:"Task 2"
}

]

  return (
    <div>
      ToDo Container
      <div>
        Header
        <h1 className="text-red-300 text-3xl">Time Manager Master</h1>
        <div>add task</div>
        <div>task filter</div>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}
