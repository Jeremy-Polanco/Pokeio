import setPokemon from './src/setPokemon.js';
import fetchPokemon from './src/fetchPokemon.js';

const searchForm = document.querySelector('.nav-container');
const searchInput = document.querySelector('.form-input');
const cardContainer = document.querySelector('.card');

const handleSubmit = async (e) => {
  e.preventDefault();
  cardContainer.innerHTML = `<div class="loading"></div>`;
  try {
    const data = await fetchPokemon(searchInput.value.toLowerCase());
    setPokemon(data.name);
    window.location.href = 'pokemon.html';
    cardContainer.innerHTML = `<header><h2>Busca un pokemon</h2></header>`;
  } catch (error) {
    console.log(error);
    cardContainer.innerHTML = ` 
    <h2>Ningún Pokémon hallado, intente otra vez.</h2>
    `;
  }
};

searchForm.addEventListener('submit', handleSubmit);
