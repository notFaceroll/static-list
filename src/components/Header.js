import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';
import JobsFilter from './JobsFilter';

export default function Header({ onRemove, onClear, filters }) {
  return (
    <Fragment>
      <header className="h-32 bg-primary bg-hero-pattern-mobile sm:bg-hero-pattern-desktop bg-no-repeat bg-top bg-cover mx-auto p-4 max-w-full">
        <h1 className="absolute -top-full">Static Job Listings</h1>
      </header>
      <AnimatePresence>
        {filters.length > 0 && (
          <JobsFilter onRemove={onRemove} onClear={onClear} filters={filters} />
        )}
      </AnimatePresence>
    </Fragment>
  );
}
