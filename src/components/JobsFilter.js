import React, { useContext } from 'react';
import { JobsContext } from '../store/jobs-context';
import { jobsData } from './JobsData';

// Click on a tag, and display only the jobs with the same tag
// The input can be a single array value inside of an object
// Or multiple items of the same array
// The output is an object value which contains the selected tag

// Create a new array named 'Selected' with the chosen tags
// Compare the Selected array with the 'tags' array inside each object
// Those which match, return the object
// Re-render new filtered array
// Clicking on 'clear' button, set the render array to the default

export default function JobsFilter(props) {
  const updateFilter = ({ target: { value } }) => {
    console.log('nothing');
  };

  const jobCtx = useContext(JobsContext);
  const selectedTags = jobCtx.filterTags;

  return (
    <nav>
      <ul className="flex">
        {selectedTags > 0 && selectedTags.map((tag) => <li>{tag}</li>)}
      </ul>
      <button
        className=" font-semibold text-primary hover:underline"
        onClick={() => console.log('click')}
      >
        Clear
      </button>
    </nav>
  );
}
