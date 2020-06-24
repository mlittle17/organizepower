import React, { useState } from 'react';
// child of Movement, shows charity details
// also a child of addCharity

// these setChar.. functions set the state of addCharity
const Charity = ({
  charity,
  setCharName,
  setCharUrl,
  setCharImageUrl,
  setCharDescription,
  setCharTagline,
}) => {
  const { charDescription, charImageUrl, charName, charUrl, charTagline, currentRating } = charity;
  // uses this charity's info to set the state of addCharity, so it can create the movement
  const setCharState = () => {
    setCharName(charName);
    setCharUrl(charUrl);
    setCharImageUrl(charImageUrl);
    setCharDescription(charDescription);
    setCharTagline(charTagline);
  };

  return (
    <div onClick={setCharState} className="max-w-sm h-full rounded overflow-hidden shadow-lg m-8 float-left">
      <div className="border-r border-b border-l border-gray-400 hover:border-black hover:bg-teal-100 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-3">
          <span className="text-gray-900 font-bold text-xl mb-2 hover:text-gray-500 mr-4">
            <img className="w-full" src={charImageUrl} alt="" />
            <p className="text-black text-lg my-2 mb-3">
              {charName}
            </p>
            {/* <p className="text-gray-700 text-base my-2">
              {currentRating}
            </p> */}
            <p className="text-gray-700 text-base my-2">
              {charTagline}
            </p>
            <p className="text-gray-700 text-sm my-2">
              {charDescription}
            </p>
            <p className="text-gray-700 text-base mt-4">
              <a className="hover:text-blue-400" href={charUrl}>{charUrl}</a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Charity;
