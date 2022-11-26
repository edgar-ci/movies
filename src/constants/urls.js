/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
const search = '/search/multi?api_key=::apiKey&language=en-US&include_adult=false&query=::query';
const discover = '/discover/tv?api_key=::apiKey&with_networks=::id';
const urlImages = 'https://image.tmdb.org/t/p/';

const urlSearch = (apiKey, query) => search.replace('::apiKey', apiKey).replace('::query', query);
const urlDiscover = (apiKey, id) => discover.replace('::apiKey', apiKey).replace('::id', id);

export default {
  urlSearch,
  urlDiscover,
  urlImages,
};
