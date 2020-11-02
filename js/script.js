"use strict";

const numberOfFilms = +prompt('How many films did you watch yet?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('One of the last watched films?',''),
      b = prompt('Your vote?',''),
      c = prompt('One of the watched films?',''),
      d = prompt('Your vote?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);