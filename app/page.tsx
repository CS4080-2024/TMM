"use client";

import { useState, useEffect, useRef} from "react";

import { AddTask } from "@/components/add-task";
import { Filter } from "@/components/filter";
import { TaskList } from "@/components/task-list";
import { type Task } from "@/types";

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("All");
  const initialRender = useRef(true);

  // Load tasks from local storage
  useEffect(() => {   
    const storedTasks = localStorage.getItem("tasks");
    storedTasks ? setTasks(JSON.parse(storedTasks)) : []
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (content: string) => {
    const newTask = {
      id: Date.now(),
      content,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // deleteTask function
  const deletedTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id)
        {
          return {...task, completed:!task.completed};
        }
        return task;
    });
    setTasks(updatedTasks);
  };

  const getFilteredTasks = () => { //add functionality to the active and completed buttons
    return tasks.filter(task => {
      if(filter === "All") return true;
      if(filter === "Active") return !task.completed;
      if(filter === "Completed") return task.completed;
    }
    );
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="flex flex-col items-center">
        <header className="w-full bg-white py-12 text-center shadow">
          <div className="mx-auto w-full max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">Todo List</h1>
          </div>
        </header>

        <main className="flex flex-col w-full max-w-2xl gap-y-4 p-4">
          <AddTask addTask={addTask} />
          <Filter setFilter={setFilter} />
          <TaskList
            tasks={getFilteredTasks()}
            toggleTask={toggleTask}
            deleteTask={deletedTask}
          />
        </main>
      </div>

      <footer className="border-t border-gray-300 bg-white py-8 text-center">
        <p className="text-gray-700">© 2024 Todo List. No rights reserved.</p>
        <p className="text-gray-700">
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
