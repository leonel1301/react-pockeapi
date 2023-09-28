import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);




  //Obtener Pokemones
  const getAllPokemons = async (limit = 20) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const response = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      console.log(data);
      return data;
    });
    const results = await Promise.all(promises);
    setAllPokemons(results);
  };


  //Obtener Pokemon por ID
    const getPokemonById = async (id) => {
        const baseUrl = "https://pokeapi.co/api/v2/";
        const response = await fetch(`${baseUrl}pokemon/${id}`);
        const data = await response.json();
        return data;
    };



  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        getPokemonById,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
