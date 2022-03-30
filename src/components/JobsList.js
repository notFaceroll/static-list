import React from 'react';
import Job from './Job';
import { AnimatePresence } from 'framer-motion';

export default function JobsList({ addFilter, jobs }) {
  return (
    <ul className="flex flex-col gap-12 sm:gap-4 w-dynamic mx-6 sm:mx-auto my-6">
      <AnimatePresence>
        {jobs.map((jobItem, index) => (
          <Job key={index} job={jobItem} onAddFilter={addFilter} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
