import React from 'react';
import Tag from './Tag';

const Job = ({ job, onAddFilter }) => {
  return (
    <li className={"relative shadow-xl flex gap-2 sm:items-center p-4 max-w-4xl rounded-md bg-white flex-col sm:flex-row pt-8 sm:pt-4" + (job.new ? ' border-l-primary border-l-4' : '')}>
      {/* Logo da empresa */}
      <div className="w-14 h-14 bg-black mx-4 rounded-full absolute sm:static -top-8 -left-1 shrink-0">
        <img className="block max-w-full" src={job.logo} alt="Company Logo" />
      </div>

      {/* Job specs */}
      <div className="flex flex-col  gap-2 sm:mr-auto border-b border-b-neutral-darkGrayishCyan sm:border-b-0 py-2 pb-4 sm:py-0">
        <div className="flex items-center sm:justify-between">
          <h2 className="text-primary font-semibold text-xs mr-2">
            {job.company}
          </h2>
          {job.new && (
            <span className="bg-primary inline-block align-middle text-white font-semibold text-xs uppercase py-1 px-3 rounded-full ">
              New!
            </span>
          )}
          {job.featured && (
            <span className="mx-1 inline-block align-middle bg-neutral-veryDarkGrayishCyan text-white font-semibold text-xs uppercase py-1 px-3 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-bold text-base  text-neutral-veryDarkGrayishCyan hover:text-primary hover:cursor-pointer">
          {job.role}
        </h3>
        <div className="text-sm text-neutral-darkGrayishCyan">
          {job.posted} - {job.work} - {job.location}
        </div>
      </div>

      {/* List of filtered tags */}
      <ul className="flex flex-wrap gap-2">
        {job.tags.map((item, index) => (
          <Tag key={index} tag={item} onAddFilter={onAddFilter} />
        ))}
      </ul>
    </li>
  );
};

export default Job;
