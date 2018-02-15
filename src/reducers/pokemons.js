const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return action.payload;
    default:
      return state;
  }
};

export default pokemonsReducer;
