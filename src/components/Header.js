import React from 'react';
import JobsFilter from './JobsFilter';

export default function Header(props) {
  return (
    <header className="shadow-xl mx-auto p-4 max-w-4xl rounded-md mb-8 bg-white flex justify-between">
      <JobsFilter />
    </header>
  );
}
