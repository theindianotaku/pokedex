import React from 'react';
import { Table } from 'semantic-ui-react';

const PokemonTableItem = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.pokemon.nDex}</Table.Cell>
      <Table.Cell>{props.pokemon.name}</Table.Cell>
      <Table.Cell>{props.pokemon.tier}</Table.Cell>
      <Table.Cell>{props.pokemon.type1}</Table.Cell>
      <Table.Cell>{props.pokemon.type2}</Table.Cell>
      <Table.Cell>{props.pokemon.ability1}</Table.Cell>
      <Table.Cell>{props.pokemon.ability2}</Table.Cell>
      <Table.Cell>{props.pokemon.hiddenability}</Table.Cell>
    </Table.Row>
  );
};

export default PokemonTableItem;
