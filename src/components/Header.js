import React from 'react';
import Tag from './Tag';

export default function Header(props) {
  return (
    <header className="shadow-xl mx-auto p-4 max-w-4xl rounded-md mb-8 bg-white flex justify-between">
      <ul className="flex">
        <Tag />
      </ul>
      <button className=' font-semibold text-primary hover:underline' onClick={() => console.log('click')}>Clear</button>
    </header>
  );
}
