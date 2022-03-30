import React from 'react';
import CloseTagImage from '../assets/icon-remove.svg';
import { motion } from 'framer-motion';

export default function JobsFilter({ onRemove, onClear, filters }) {
  const removeFilter = (tag) => {
    onRemove(tag);
  };

  const clearFilterHandler = () => {
    onClear();
  };

  return (
    <motion.aside
      key="modal"
      initial={{ scale: 1, opacity: 0, x: -300 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      exit={{ scale: 1, opacity: 0, x: -300 }}
      transition={{ duration: 0.2 }}
      className=" -mt-6 shadow-[0.5px_3px_15px_rgba(91,164,164,0.5)] mx-4 sm:mx-auto min-h-16 p-4 max-w-4xl rounded-md mb-12 sm:mb-6 bg-white flex justify-between"
    >
      <ul className="flex flex-wrap gap-3">
        {filters.length > 0 &&
          filters.map((tag, index) => (
            <li
              key={index}
              className="flex bg-neutral-background overflow-hidden rounded-md"
            >
              <p className="text-xs font-bold text-primary p-2">{tag}</p>
              <button
                aria-label="Remove Tag"
                value={tag}
                onClick={() => {
                  removeFilter(tag);
                }}
                className="cursor-pointer px-2 bg-primary hover:bg-neutral-veryDarkGrayishCyan"
              >
                <img className="max-w-full block" alt="" src={CloseTagImage} />
              </button>
            </li>
          ))}
      </ul>
      <button
        aria-label="Clear Filters"
        className=" outline-primary text-sm font-semibold text-neutral-darkGrayishCyan hover:underline ml-1"
        onClick={clearFilterHandler}
      >
        Clear
      </button>
    </motion.aside>
  );
}
