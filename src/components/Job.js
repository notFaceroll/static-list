import React from 'react';
import Tag from './Tag';

const Job = ({ job, onAddFilter }) => {
  return (
    <li className="shadow-xl flex items-center p-4 max-w-4xl rounded-md bg-white">
      {/* Logo da empresa */}
      <div className="w-14 h-14 bg-black mx-4 rounded-full"></div>

      {/* Job specs */}
      <div className="mr-auto">
        <div className="flex justify-between">
          <h2 className=" text-primary font-semibold text-sm">{job.company}</h2>
          {job.new && <div>New!</div>}
          {job.featured && <div>Featured</div>}
        </div>
        <h3 className="colors-neutral-veryDarkGrayCyan font-bold text-neutral-veryDarkGrayishCyan">
          {job.role}
        </h3>
        <div className=" text-neutral-darkGrayishCyan">
          {job.posted} - {job.work} - {job.location}
        </div>
      </div>

      {/* List of filtered tags */}
      <ul className="flex justify-between">
        {job.tags.map((item, index) => (
          <Tag key={index} tag={item} onAddFilter={onAddFilter}/>
        ))}
      </ul>
    </li>
  );
};

export default Job;
