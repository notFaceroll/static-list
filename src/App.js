import './App.css';
import JobsList from './components/JobsList';

import React, { useState, useEffect, Fragment } from 'react';
import Job from './components/Job';
import Header from './components/Header';
import { jobsData } from './components/JobsData';
import JobsFilter from './components/JobsFilter';

function App() {
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
    <main className="">
      <Header
        onRemove={removeFilter}
        onClear={clearFilters}
        filters={filters}
      />
      <JobsList addFilter={addFilter} jobs={jobs}/>
    </main>
  );
}

export default App;
