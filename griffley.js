"use strict";
// this function will take the api data and go through the moves
var processMoves = function (pokemon) {
    pokemon.moves.forEach(function (moveBlock) {
        // find the unordered list element
        var unordered = document.getElementById('bulbasaurMoves');
        // if it exists add a line to it
        if (unordered !== null) {
            // this is a cleaner way of creating html elements
            var line = document.createElement('li');
            // put the text in the line element
            line.innerText = moveBlock.move.name;
            // parent the line to the unordered list
            unordered.appendChild(line);
            // the old code
            // const markup = `<li>${moveBlock.move.name}</li>`;
            // unordered.insertAdjacentHTML('beforeend', markup);
        }
    });
};
// i simplified this part to just grab the data and pass it to a function
// this makes it less cluttered and easier to work with
fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(function (res) { return res.json(); })
    .then(function (data) { return processMoves(data); });
// "moves":
// [
//   {"move":{
//     "name":"razor-wind",
//     "url":"https://pokeapi.co/api/v2/move/13/"
//   },
