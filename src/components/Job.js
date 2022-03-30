import React from 'react';
import Tag from './Tag';
import { motion } from 'framer-motion';

const Job = ({ job, onAddFilter }) => {
  return (
    <motion.li
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={
        'relative shadow-[0.5px_3px_15px_rgba(91,164,164,0.5)] flex gap-2 sm:items-center p-4 max-w-4xl rounded-md bg-white flex-col sm:flex-row pt-8 sm:pt-4' +
        (job.new ? ' border-l-primary border-l-4' : '')
      }
    >
      <div className="w-14 h-14 sm:w-20 sm:h-20 mx-4 rounded-full absolute sm:static -top-8 -left-1 shrink-0">
        <img className="block max-w-full" src={job.logo} alt="Company Logo" />
      </div>

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
          {job.posted} <span className="font-extrabold">&#183;</span> {job.work}{' '}
          <span className="font-extrabold">&#183;</span> {job.location}
        </div>
      </div>

      <ul className="flex flex-wrap">
        {job.tags.map((item, index) => (
          <Tag key={index} tag={item} onAddFilter={onAddFilter} />
        ))}
      </ul>
    </motion.li>
  );
};

export default Job;
