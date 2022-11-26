import React from 'react';

const backdrop = ({ toggleBackdrop, show }) => {
  const res = show ? (
    <div onClick={toggleBackdrop} className="backdrop"></div>
  ) : null;
  return res;
};

export default backdrop;
