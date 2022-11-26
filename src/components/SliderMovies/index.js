/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { HiPlay, HiPlus } from 'react-icons/hi2';
import { SlArrowDown } from 'react-icons/sl';
import { BiLike } from 'react-icons/bi';
import { URLS } from '../../constants';
import { useViewport } from '../../hooks/useViewport';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const breakpontis = {
  1378: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  998: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  625: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  0: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
};

const loopAdditionalSlides = width => {
  if (width >= 1378) {
    return 4;
  }
  if (width >= 998) {
    return 3;
  }
  if (width >= 625) {
    return 2;
  }
  return 2;
};

const scrollbar = { draggable: false, hide: true };

const SliderMovies = ({ movies, selectMovieHandler }) => {
  const [windowDimensions] = useViewport();
  const { width } = windowDimensions;

  return (
    <Swiper
      className="slider__movies--container"
      navigation={true}
      grabCursor={false}
      draggable={false}
      loop={true}
      loopAdditionalSlides={() => loopAdditionalSlides(width)}
      breakpoints={breakpontis}
      preventClicksPropagation
      preventClicks
      scrollbar={scrollbar}
      slideToClickedSlide={false}
      pagination={{ clickable: true }}
    >
      {movies?.map((movie, idx) => (
        <SwiperSlide key={idx} className={'slider__movies--movie'}>
          <img
            src={`${URLS.urlImages}/w500/${movie.backdrop_path}`}
            className="slider__movies--movie-image"
          />
          <footer className="slider__footer">
            <div className="slider__footer--btns">
              <div>
                <i className="slider__footer--icon bg-white">
                  <HiPlay />
                </i>
                <i className="slider__footer--icon">
                  <HiPlus />
                </i>
                <i className="slider__footer--icon">
                  <BiLike />
                </i>
              </div>
              <i className="slider__footer--icon">
                <SlArrowDown onClick={() => selectMovieHandler(movie)} />
              </i>
            </div>
            <div className="slider__footer--wrapper">
              <span>95 % para ti </span>
              <span>1 h 30 min</span>
            </div>
            <ul className="slider__footer--labels">
              <li>label</li>
              <li>label</li>
              <li>label</li>
            </ul>
          </footer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderMovies;
