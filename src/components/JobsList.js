import React, { Fragment, useContext } from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import { jobsData } from './JobsData';
import Job from './Job';
import { JobsContext } from '../store/jobs-context';

// const jobsListState = atom({
//   key: 'JobsList',
//   default: jobsData,
// });

// const jobsListFilterState = atom({
//   key: 'JobsListFilter',
//   default: 'Show All',
// });

// const filteredJobsListState = selector({
//   key: 'FilteredJobsList',
//   get: ({ get }) => {
//     const filter = get(jobsListFilterState);
//     const list = get(jobsListState);

//     switch (filter) {
//       case 'NEW': {
//         return list.filter((item) => item.new);
//       }
//       default:
//         return list;
//     }
//   },
// });

export default function JobsList(props) {
  //   const jobs = useRecoilValue(filteredJobsListState);
  const jobCtx = useContext(JobsContext);

  return (
    <ul className="flex flex-col gap-4 max-w-4xl mx-auto">
      {jobCtx.jobsList.map((jobItem, index) => (
        <Job key={index} job={jobItem} />
      ))}
    </ul>
  );
}
