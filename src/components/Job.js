import React from 'react';
import Card from './Card';

// Job description:
// Company logo and name, tagged if new/featured
// Role
// Post date, work Schedule/type, location
// Tags for filtering

const Job = (props) => {
  return (
    <div className="shadow-xl rounded-m flex items-center mx-auto p-4 max-w-4xl rounded-md">
      {/* Logo da empresa */}
      <div className="w-14 h-14 bg-black mx-4 rounded-full"></div>

      {/* Job specs */}
      <div className="mr-auto">
        <div className="flex justify-between">
          <h2 className=' text-primary font-semibold text-sm'>Photosnap</h2>
          <div>New!</div>
          <div>Featured</div>
        </div>
        <h3 className="colors-neutral-veryDarkGrayCyan font-bold text-neutral-veryDarkGrayishCyan">
          Senior Frontend Developer
        </h3>
        <div className=" text-neutral-darkGrayishCyan">
          1d ago - Full time - USA only
        </div>
      </div>

      {/* List of filtered tags */}
      <ul className="flex justify-between">
        <li>Frontend</li>
        <li>Senior</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
  );
};

export default Job;
