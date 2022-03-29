import React, { useState, useEffect, Fragment } from 'react';
import Job from './Job';
import { jobsData } from './JobsData';
import JobsFilter from './JobsFilter';

export default function JobsList(props) {
  const [filters, setFilters] = useState([]);
  const [jobs, setJobs] = useState(jobsData);

  useEffect(() => {
    if (filters.length > 0) {
      const updatedList = jobs.filter((item) => {
        return filters.every((f) => item.tags.includes(f));
      });
      setJobs(updatedList);
      console.log('updated');
    }
    console.log('render');
  }, [filters, setJobs]);

  const addFilter = (tag) => {
    const tagExists = filters.some((item) => item === tag);
    if (tagExists) return;
    setFilters([...filters, tag]);
  };

  const removeFilter = (tag) => {
    const updatedFilters = filters.filter((item) => item !== tag);
    setFilters(updatedFilters);
    setJobs(jobsData);
  };

  const clearFilters = () => {
    if (filters.length === 0) return;
    setFilters([]);
    setJobs(jobsData);
  };

  return (
    <Fragment>
     {filters.length > 0 && <JobsFilter
        onRemove={removeFilter}
        onClear={clearFilters}
        filters={filters}
      />}
      <ul className="flex flex-col gap-12 sm:gap-4 max-w-4xl mx-auto">
        {jobs.map((jobItem, index) => (
          <Job key={index} job={jobItem} onAddFilter={addFilter} />
        ))}
      </ul>
    </Fragment>
  );
}
