import React, { Component } from 'react';
import Search from '../components/Search';
import PokemonTable from '../components/PokemonTable';

class App extends Component {
  render() {
    return (
      <div>
        <nav id="header" className="ui inverted top fixed menu">
          <div className="ui container">
            <a className="header item m-r-md">
              <img alt="logo" className="ui mini image m-r-md" src={require('../assets/sprites/voltorb.gif')} />
              Poke-Search
            </a>
            <div className="header valign-wrapper">
              <Search />
            </div>
          </div>
        </nav>
        <div className="ui container main">
          <PokemonTable />
        </div>
      </div>
    );
  }
}

export default App;
