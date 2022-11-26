/* eslint-disable no-alert */
import React, { useState } from 'react';

import ReactPlayer from 'react-player';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi';
import { HiPlay } from 'react-icons/hi2';

const Header = ({ title, description }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <header className="header">
      <ReactPlayer
        loop={true}
        playing={false}
        volume={1}
        muted={isMuted}
        width="100%"
        height="100%"
        className="header__video"
        url="https://vimeo.com/316041685"
      />
      <div className="header__main">
        <h1 className="header__title">{title}</h1>
        <p className="header__description">{description}</p>
        <div className="header__btns">
          <div className="header__btns--first">
            <button className="header__btn--play">
              <HiPlay className="header__btn--icon" color="#000" />
              <span>Reproducir</span>
            </button>
            <button className="header__btn--info">
              <AiOutlineExclamationCircle className="header__btn--icon" />
              <span>Más informacion</span>
            </button>
          </div>
          <button className="header__btn--volume">
            {isMuted ? (
              <BiVolumeMute onClick={() => setIsMuted(false)} />
            ) : (
              <BiVolumeFull onClick={() => setIsMuted(true)} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
