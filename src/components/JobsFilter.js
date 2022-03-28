import React from 'react';

export default function JobsFilter({ onRemove, onClear, filters }) {
  const removeFilterHandler = ({ target: { value } }) => {
    console.log(value);
    onRemove(value);
  };

  const clearFilterHandler = () => {
    onClear();
  };

  return (
    <header className="shadow-xl mx-auto h-16 p-4 max-w-4xl rounded-md mb-8 bg-white flex justify-between">
      <ul className="flex">
        {filters.length > 0 &&
          filters.map((tag, index) => (
            <li key={index}>
              <button
                value={tag}
                onClick={removeFilterHandler}
                className="mx-2 cursor-pointer bg-neutral-background text-sm font-semibold text-primary p-2 rounded-md hover:bg-primary hover:text-white"
              >
                {tag}
              </button>
            </li>
          ))}
      </ul>
      <button
        className=" font-semibold text-primary hover:underline"
        onClick={clearFilterHandler}
      >
        Clear
      </button>
    </header>
  );
}
