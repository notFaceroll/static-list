import React from 'react';

export default function Tag({ tag, onAddFilter }) {
  const tagHandler = () => {
    onAddFilter(tag);
  };

  return (
    <li className="m-2">
      <button
        aria-label="Add Tag"
        className="bg-neutral-background text-sm font-semibold text-primary p-2 rounded-md hover:bg-primary hover:text-white outline-neutral-veryDarkGrayishCyan"
        onClick={tagHandler}
      >
        {tag}
      </button>
    </li>
  );
}
