import React from 'react';

function Block({ title, data }) {
  return (
    <div className="mt-8 px-2 w-full flex flex-col last-of-type:mb-12">
      <h4 className="text-2xl lg:text-3xl font-semibold mb-6 w-full underline underline-offset-8 decoration-orange-400">
        {title}
      </h4>
      <ul className="list-disc">
        {data.map((item, index) => (
          <li key={index} className="mb-1 text-gray-300 font-light text-md lg:text-xl text-left">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Block;
