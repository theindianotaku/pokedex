import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import pokemonsReducer from '../reducers/pokemons';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      pokemons: pokemonsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
