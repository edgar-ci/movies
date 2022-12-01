/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import Modal from '../components/Modal';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';
import { LANDING } from '../constants';
import SliderMovies from '../components/SliderMovies';

function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const selectMovieHandler = async movie => {
    setToggleModal(true);
    setMovieDetails(movie);
  };

  const closeModal = () => {
    setToggleModal(false);
  };
  const [, , sections] = useContext(AppContext);

  return (
    <div className="main-content">
      <div className="container">
        <Header {...LANDING} />
        <div className="slider__movies">
          {sections.map(({ title, movies }) => (
              <SliderMovies
                key={title}
                title={title}
                selectMovieHandler={selectMovieHandler}
                movies={movies}
              />

          ))}
        </div>
      </div>
      <Modal
        show={toggleModal}
        modalClosed={closeModal}
        backgroundImage={movieDetails.backdrop_path || movieDetails.poster_path}
        movie={movieDetails}
      />
    </div>
  );
}

export default Home;
