interface FilterProps {
  setFilter: (status: string) => void;
}

export const Filter = ({ setFilter }: FilterProps) => {
  return (
    <div className="flex h-10">
      <button
        onClick={() => {
          setFilter("All");
        }}
        className="text-gray-400 hover:text-gray-900 focus:bg-purple-500 focus:text-white p-2"
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("Active");
        }}
        className="text-gray-400 hover:text-gray-900 focus:bg-purple-500 focus:text-white p-2"
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter("Completed");
        }}
        className="text-gray-400 hover:text-gray-900 focus:bg-purple-500 focus:text-white p-2"
      >
        Completed
      </button>
    </div>
  );
};
