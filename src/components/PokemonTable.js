import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import PokemonTableItem from './PokemonTableItem';

class PokemonTable extends Component {
  render() {
    const pokemonsArr = this.props.pokemons;
    const PokemonTableRows = pokemonsArr ? pokemonsArr.map((pokemon) => {
      return (<PokemonTableItem key={pokemon.orderID} pokemon={pokemon} />);
    }) : (<p>Loading...</p>);

    return (
      <div>
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan='1'>Dex</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Tier</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Type 1</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Type 2</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Ability 1</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Ability 2</Table.HeaderCell>
              <Table.HeaderCell rowSpan='1'>Hidden Ability</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { PokemonTableRows }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  };
};

export default connect(mapStateToProps)(PokemonTable);
