"use strict";
let NumberOfFilms;

function start(){
    NumberOfFilms = +prompt('how many films did you watched?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
        NumberOfFilms = +prompt('how many films did you watched?', '');
    }
}
start();