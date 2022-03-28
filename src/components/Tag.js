import React from 'react';

export default function Tag({ tag, onAddFilter }) {

  const tagHandler = () => {
    onAddFilter(tag);
  };

  return (
    <li className="mx-2">
      <button
        className="bg-neutral-background text-sm font-semibold text-primary p-2 rounded-md hover:bg-primary hover:text-white"
        onClick={tagHandler}
      >
        {tag}
      </button>
    </li>
  );
}
