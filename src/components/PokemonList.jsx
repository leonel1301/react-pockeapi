import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import Grid from '@mui/material/Grid';

export const PokemonList = () => {
  const { allPokemons } = useContext(PokemonContext);

  return (
    <Grid container spacing={3}>
      {allPokemons.map((pokemon) => (
        <Grid item key={pokemon.id} xs={3}>
          <CardPokemon pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
};