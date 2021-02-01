"use strict";
let NumberOfFilms;

function start(){
    NumberOfFilms = +prompt('how many films did you watched?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
        NumberOfFilms = +prompt('how many films did you watched?', '');
    }
}
start();

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

 function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Last watched film?',''),
        b = prompt('your vote?','');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
    }
 }

 function detectPersonalLevel(){
     if(personalMovieDB.count < 10){
         console.log("Less movie watched");
     }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
         console.log("you are the movieman!");
    }else {
        console.log("Error");
    }
 }

 function showMyDB (hidden){
     if (!hidden){
         console.log(personalMovieDB);
     }    
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i -1] = prompt('Your likly genre ${i}');
    }
}

writeYourGenres();