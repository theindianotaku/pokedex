import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'semantic-ui-css/semantic.min.css';
import './styles/bootstrap-grid.min.css';
import './styles/main.css';

import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';
import { startSetPokemons } from './asyncs/pokemons';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root'));

store.dispatch(startSetPokemons());
// registerServiceWorker();
