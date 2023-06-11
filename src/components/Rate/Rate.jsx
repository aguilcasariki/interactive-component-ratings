import React, { useState } from 'react';

function Rate({ handleClick, selected }) {
  return (
    <div className="mt-4   flex justify-between">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          onClick={handleClick}
          className="rounded-full bg-dark-blue p-3 hover:bg-orange hover:text-white text-gray-medium text-base focus:bg-gray-medium focus:text-white"
        >
          <span className="w-5 h-5 block">{i}</span>
        </button>
      ))}
    </div>
  );
}

export default Rate;
