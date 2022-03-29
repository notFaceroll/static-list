import React from 'react';
import CloseTagImage from '../assets/icon-remove.svg';

export default function JobsFilter({ onRemove, onClear, filters }) {
  const removeFilterHandler = ({ target: { value } }) => {
    console.log(value);
    onRemove(value);
  };

  const clearFilterHandler = () => {
    onClear();
  };

  return (
    <header className="shadow-xl mx-auto min-h-16 p-4 max-w-4xl rounded-md mb-12 sm:mb-6 bg-white flex justify-between">
      <ul className="flex flex-wrap gap-3">
        {filters.length > 0 &&
          filters.map((tag, index) => (
            <li key={index} className='flex bg-neutral-background overflow-hidden rounded-md'>
              <p className='text-xs font-bold text-primary p-2'>{tag}</p>
              <button 
                value={tag}
                onClick={removeFilterHandler}
                className="cursor-pointer px-2 bg-primary hover:bg-neutral-veryDarkGrayishCyan"
              >
                <img className='max-w-full block' alt='' src={CloseTagImage}/>
              </button>
            </li>
          ))}
      </ul>
      <button
        className="text-sm font-semibold text-neutral-darkGrayishCyan hover:underline"
        onClick={clearFilterHandler}
      >
        Clear
      </button>
    </header>
  );
}
