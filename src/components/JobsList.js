import React, { Fragment } from 'react';
import { atom, useRecoilValue } from 'recoil';
import { jobsData } from './JobsData';
import Job from './Job';

const jobsListState = atom({
  key: 'JobsList',
  default: jobsData,
});

export default function JobsList(props) {
  const jobs = useRecoilValue(jobsListState);
  console.log(jobs);
  return (
    <ul className='flex flex-col gap-4 max-w-4xl mx-auto'>
      {jobs.map((jobItem, index) => (
        <Job
          key={index}
          job={jobItem}
        />
      ))}
    </ul>
  );
}
