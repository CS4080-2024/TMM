import { Task } from "./task";

interface Task{
    isfinish: boolean;
    content: string;

}

interface TaskListProps{
    tasks: Task[];
}

export const TaskList=({tasks}:TaskListProps)=>{

    return (
        <div >
            {
                tasks.map(task => (
                    <Task key={task.content} isFinish={task.isfinish} content={task.content}/>
                ))
            }
        </div>
    )

}