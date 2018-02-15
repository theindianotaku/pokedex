import { setPokemons } from '../actions/pokemons';
import pokemonsArr from '../assets/data/pokemon.json';

// const fetchPokemons = async () => {
//   let response = await fetch('../assets/data/pokemon.json');
//   let json = await response.data;
//   console.log(response);
//   //let pokemonsArray = await pokemonsJSON.parse();
//
//   return json;
// };

export const startSetPokemons = () => {
  return (dispatch) => {
    return dispatch(setPokemons(pokemonsArr));
  };
};
