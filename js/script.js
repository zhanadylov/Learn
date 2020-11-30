"use strict";

const numberOfFilms = +prompt('How many films did you watch yet?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i = 0; i < 2; i++){
    const a = prompt('One of the last watched films?',''),
      b = prompt('Your vote?','');

      if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log.log("done");
      }else{
          console.log("error!");
          i--;
      }
      
}
      console.log(personalMovieDB);
    