import displayPokemon from './src/displaySinglePokemon.js';
import fetchPokemon from './src/fetchPokemon.js';

const presentPokemon = async () => {
  const pokemonName = localStorage.getItem('pokemon');
  if (!pokemonName) {
    window.location.replace('index.html');
  } else {
    const pokemon = await fetchPokemon(pokemonName);
    displayPokemon(pokemon);
  }
};

window.addEventListener('DOMContentLoaded', presentPokemon());
