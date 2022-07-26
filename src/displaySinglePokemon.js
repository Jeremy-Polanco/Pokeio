import get from './getElement.js';

const displayPokemon = (data) => {
  const pokemon = data;
  const name = pokemon.name;
  const image = pokemon.sprites.front_default;
  const types = pokemon.types.map((element) => element.type.name);
  const height = pokemon.height;
  const weight = pokemon.weight;
  const moves = pokemon.moves.map((element) => element.move.name);
  const hp = pokemon.stats[0].base_stat;
  const attack = pokemon.stats[1].base_stat;
  const defense = pokemon.stats[2].base_stat;
  const sp_attack = pokemon.stats[3].base_stat;
  const sp_defense = pokemon.stats[5].base_stat;
  const speed = pokemon.stats[1].base_stat;
  const pokemonName = get('.pokemon-name');
  const img = get('.img');
  const pokemonHeight = get('.pokemon-height');
  const pokemonWeight = get('.pokemon-weight');
  const pokemonTypes = get('.types');
  const pokemonHealth = get('.vida');
  const pokemonAttack = get('.ataque');
  const pokemonDefense = get('.defensa');
  const pokemonSpecialAttack = get('.ataque-especial');
  const pokemonSpecialDefense = get('.defensa-especial');
  const pokemonSpeed = get('.velocidad');
  const progressHealthBarLeft = get('.health-progress-left');
  const progressHealthBarRight = get('.health-progress-right');
  const progressSpeedBarLeft = get('.speed-progress-left');
  const progressSpeedBarRight = get('.speed-progress-right');
  const progressAttackBarLeft = get('.attack-progress-left');
  const progressAttackBarRight = get('.attack-progress-right');
  const progressDefenseBarLeft = get('.defense-progress-left');
  const progressDefenseBarRight = get('.defense-progress-right');
  const progressSpecialDefenseBarLeft = get('.special-defense-progress-left');
  const progressSpecialDefenseBarRight = get('.special-defense-progress-right');
  const progressSpecialAttackBarLeft = get('.special-attack-progress-left');
  const progressSpecialAttackBarRight = get('.special-attack-progress-right');
  const pokemonMoves = get('.moves');
  img.src = image;
  document.title = name;
  pokemonName.textContent = name;
  pokemonHeight.textContent = `${height / 10} m`;
  pokemonWeight.textContent = `${weight / 10} kg`;
  pokemonTypes.textContent = types.map((type) => `(${type})`).join(' ');
  pokemonHealth.textContent = hp;
  pokemonAttack.textContent = attack;
  pokemonDefense.textContent = defense;
  pokemonSpecialAttack.textContent = sp_attack;
  pokemonSpecialDefense.textContent = sp_defense;
  pokemonSpeed.textContent = speed;
  if (hp >= 100) {
    progressHealthBarLeft.classList.add('progress-1');
  }
  if (hp >= 60 && hp < 75) {
    progressHealthBarLeft.classList.add('progress-3');
  }
  if (hp >= 75 && hp < 100) {
    progressHealthBarLeft.classList.add('progress-2');
  }
  if (hp < 50) {
    progressHealthBarRight.style.animation =
      hp > 25
        ? 'loading-2 1.8s linear forwards'
        : hp >= 15
        ? 'loading-3 1.8s linear forwards'
        : 'loading-4 1.8s linear forwards';
  }
  if (speed >= 100) {
    progressSpeedBarLeft.classList.add('progress-1');
  }
  if (speed >= 60 && speed < 75) {
    progressSpeedBarLeft.classList.add('progress-3');
  }
  if (speed >= 75 && speed < 100) {
    progressSpeedBarLeft.classList.add('progress-2');
  }
  if (speed < 50) {
    progressSpeedBarRight.style.animation =
      speed > 25
        ? 'loading-2 1.8s linear forwards'
        : speed >= 15
        ? 'loading-3 1.8s linear forwards'
        : 'loading-4 1.8s linear forwards';
  }
  if (attack >= 100) {
    progressAttackBarLeft.classList.add('progress-1');
  }
  if (attack >= 60 && attack < 75) {
    progressAttackBarLeft.classList.add('progress-3');
  }
  if (attack >= 75 && attack < 100) {
    progressAttackBarLeft.classList.add('progress-2');
  }
  if (attack < 50) {
    progressAttackBarRight.style.animation =
      attack > 25
        ? 'loading-2 1.8s linear forwards'
        : attack >= 15
        ? 'loading-3 1.8s linear forwards'
        : 'loading-4 1.8s linear forwards';
  }
  if (defense >= 100) {
    progressDefenseBarLeft.classList.add('progress-1');
  }
  if (defense >= 60 && defense < 75) {
    progressDefenseBarLeft.classList.add('progress-3');
  }
  if (defense >= 75 && defense < 100) {
    progressDefenseBarLeft.classList.add('progress-2');
  }
  if (defense < 50) {
    progressDefenseBarRight.style.animation =
      defense > 25
        ? 'loading-2 1.8s linear forwards'
        : defense >= 15
        ? 'loading-3 1.8s linear forwards'
        : 'loading-4 1.8s linear forwards';
  }
  if (sp_defense >= 100) {
    progressSpecialDefenseBarLeft.classList.add('progress-1');
  }
  if (sp_defense >= 60 && sp_defense < 75) {
    progressSpecialDefenseBarLeft.classList.add('progress-3');
  }
  if (sp_defense >= 75 && sp_defense < 100) {
    progressSpecialDefenseBarLeft.classList.add('progress-2');
  }
  if (sp_defense < 50) {
    progressSpecialDefenseBarRight.style.animation =
      sp_defense > 25
        ? 'loading-2 1.8s linear forwards'
        : sp_defense >= 15
        ? 'loading-3 1.8s linear forwards'
        : 'loading-4 1.8s linear forwards';
  }
  if (sp_attack >= 100) {
    progressSpecialAttackBarLeft.classList.add('progress-1');
  }
  if (sp_attack >= 60 && sp_attack < 75) {
    progressSpecialAttackBarLeft.classList.add('progress-3');
  }
  if (sp_attack > 75 && sp_attack < 100) {
    progressSpecialAttackBarLeft.classList.add('progress-2');
  }
  if (sp_attack < 50) {
    progressSpecialAttackBarRight.style.animation =
      sp_attack > 25
        ? 'loading-2 1.8s linear forwards'
        : sp_attack >= 15
        ? 'loading-3 1.8s linear forwards'
        : 'loading-4 1.8s linear forwards';
  }
  pokemonMoves.innerHTML = `${moves
    .map((movement) => {
      return `<tr><td>${movement}</td></tr>`;
    })
    .join('')}`;
};

export default displayPokemon;
