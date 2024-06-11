const url = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = async (pokemonName) => {
  try {
    const response = await fetch(`${url}${pokemonName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPokemon;
