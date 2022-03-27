import React from 'react';

export default function Tag({tag}) {
  return (
    <li className="mx-2">
      <button
        className="bg-neutral-background text-sm font-semibold text-primary p-2 rounded-md hover:bg-primary hover:text-white"
        onClick={() => console.log(`${tag} button clicked`)}
      >
        {tag}
      </button>
    </li>
  );
}
