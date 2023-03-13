import React from 'react';

function PageTitle({ title }) {
  return (
    <div className="flex justify-center ">
      <h2 className="font-normal tracking-widest text-3xl text-center my-8 border-b-2 rounded-sm uppercase border-cyan-500 pb-2 px-4">
        {title}
      </h2>
    </div>
  );
}

export default PageTitle;
