import React, { useEffect, useState } from 'react';
import Rate from '../Rate/Rate';

function MainCard({ data }) {
  const [rating, setRating] = useState(null);

  const [thanks, setThanks] = useState(false);
  const dataEvaluated = thanks ? data[1] : data[0];

  useEffect(() => {
    if (!thanks) {
      setRating(null);
    }
  }, [thanks]);

  const handleClickRate = (element) => {
    setRating(element);
  };

  return (
    <>
      <div
        className={`max-w-xs bg-gradient-to-b from-dark-blue to-vdark-blue wrapper p-6 rounded-2xl flex flex-col shadow-2xl mx-5 text-prg ${
          thanks ? 'items-center' : ''
        }`}
      >
        <div className={`topImage ${!thanks ? 'bg-dark-blue shadow-lg rounded-full p-4 w-12' : ''}`}>
          {dataEvaluated.image}
        </div>
        {thanks && (
          <p className="mt-4 text-orange bg-dark-blue shadow-lg rounded-full px-3 py-2 text-sm">
            You selected a {rating} out of 5
          </p>
        )}

        <h1 className="mt-4 text-white text-2xl font-bold">{dataEvaluated.title}</h1>
        <p className={`mt-2 text-gray-light  ${thanks ? 'text-center' : ''}`}>{dataEvaluated.description}</p>
        {!thanks && <Rate handleClick={handleClickRate} selected={rating} />}
        <button
          onClick={() => {
            rating && setThanks(!thanks);
          }}
          className={`${
            rating
              ? 'bg-orange text-white  md:hover:bg-white md:hover:text-orange'
              : 'text-gray-medium bg-dark-blue cursor-default '
          } mt-5 rounded-full py-3 text-base uppercase tracking-widest self-stretch`}
        >
          {dataEvaluated.buttonLabel}
        </button>
      </div>
    </>
  );
}

export default MainCard;
