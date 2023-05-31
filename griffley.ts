// this is a simplified version of the pokemon data in data.json
// i have isolated only the parts that are used
//
// {
//   "moves":[
//     {
//       "move":{
//         "name":"razor-wind"
//       }
//     },
//     {
//       "move":{
//         "name":"swords-dance"
//       }
//     }
//   ]
// }

// this describes the top level of the api data
interface PokemonData {
  moves: Array<MoveBlock>,
}

// this describes the next level down of the api data
interface MoveBlock {
  move: {
    name: string;
  }
}

// this function will take the api data and go through the moves
const processMoves = (
  pokemon: PokemonData,
) => {
  pokemon.moves.forEach((moveBlock) => {
    // find the unordered list element
    const unordered = document.getElementById('bulbasaurMoves');
    // if it exists add a line to it
    if (unordered !== null) {
      // this is a cleaner way of creating html elements
      const line = document.createElement('li');
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
  .then((res) => res.json())
  .then((data) => processMoves(<PokemonData>data))
  .catch(() => '');
