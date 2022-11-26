import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import { BiPlayCircle } from 'react-icons/bi';
import Backdrop from '../Backdrop';
import { URLS } from '../../constants';

const Modal = ({
  show,
  modalClosed,
  backgroundImage,
  movie: {
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
    runtime,
    episode_run_time,
    number_of_episodes,
    number_of_seasons,
    overview,
  },
}) => {
  const bgImage = `url(${URLS.urlImages}original/${backgroundImage})`;

  return (
    <div>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={{ backgroundImage: bgImage }}
        className={show ? 'modal show' : 'modal hide'}
      >
        <div className="modal__container">
          <h1 className="modal__title">{title || name}</h1>
          <p className="modal__info">
            <span className="modal__rating">Rating: {vote_average * 10}% </span>
            Release date: {release_date || first_air_date} Runtime:{' '}
            {runtime || episode_run_time}m
          </p>
          <p className="modal__episode">
            {number_of_episodes ? ` Episodes: ${number_of_episodes}` : ''}
            {number_of_seasons ? ` Seasons: ${number_of_seasons}` : ''}
          </p>
          <p className="modal__overview">{overview}</p>
          <button className="modal__btn modal__btn--red">
            <BiPlayCircle className="modal__btn--icon" />
            Reproducir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
