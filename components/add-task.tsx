"use client";

export const AddTask = () => {
  //TODO: useState to keep track of the value in the input

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: call addTask
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
            value={""}
            onChange={() => {
              // TODO: update values
            }}
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
