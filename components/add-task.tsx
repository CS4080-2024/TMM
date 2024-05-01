"use client";
import React, { useState } from "react";
import { Task } from "@/types";

interface AddTaskProps {
  addTask: (content: string) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  //TODO: useState to keep track of the value in the input
  const [task, setTask] = useState('');
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Task = {
      
    }

    if(task.trim() === '') return;
    // TODO: call addTask
    addTask(task)

    setTask('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <section className="w-full">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-y-2">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 appearance-none rounded-l border border-gray-300 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            // TODO: bind value
            value={task}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="focus:shadow-outline flex-shrink-0 appearance-none rounded-r border border-transparent bg-purple-600 px-4 py-2 font-bold uppercase leading-tight text-white focus:outline-none"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};
