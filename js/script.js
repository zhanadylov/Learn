"use strict";
let NumberOfFilms;

function start(){
    NumberOfFilms = +prompt('how many films did you watched?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
        NumberOfFilms = +prompt('how many films did you watched?', '');
    }
}
start();

const personalMovieDb = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Last watched film?',''),
    b = prompt('your vote?','');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a] = b;
        console.log('done');
    }
    else {
        console.log('error');
        i--;
    }
}