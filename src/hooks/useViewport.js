/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { useState, useEffect } from 'react';

let height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

let width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

export const useViewport = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    height,
    width,
  });

  const deriveWindowDimensions = () => {
    height = window.innerHeight || document.documentElement.clientHeight;
    width = window.innerWidth || document.documentElement.clientWidth;

    setWindowDimensions({ height, width });
  };

  useEffect(() => {
    deriveWindowDimensions();
    window.addEventListener('resize', deriveWindowDimensions);

    return () => {
      window.removeEventListener('resize', deriveWindowDimensions);
    };
  }, []);

  return [windowDimensions];
};
