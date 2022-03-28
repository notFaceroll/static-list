import React from 'react';

export const JobsContext = React.createContext({
  jobsList: [],
  addFilter: (tag) => {},
  removeFilter: (tag) => {},
  filterTags: [],
});
