import React, { useContext } from 'react';
import { JobsContext } from '../store/jobs-context';

export default function Tag({ tag }) {
  const jobCtx = useContext(JobsContext);

  const tagHandler = () => {
    jobCtx.addFilter(tag);
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
