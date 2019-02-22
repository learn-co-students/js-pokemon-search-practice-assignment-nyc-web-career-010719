document.addEventListener("DOMContentLoaded", () => {
  renderPokemonsToPage(POKEMON);

  // select input bar
  let input = document.querySelector("#pokemon-search-input");
  // add event to input bar
  input.addEventListener("input", filterPokemon);
  const pokeContainer = document.querySelector("#pokemon-container");

  pokeContainer.addEventListener("click", function(e) {
    if (e.target.dataset.action == "flip") {
      const pokemon = POKEMON.find(p => p.id == e.target.dataset.id);
      if (e.target.src === pokemon.sprites.front) {
        e.target.src = pokemon.sprites.back;
      } else {
        e.target.src = pokemon.sprites.front;
      }
    } else if (e.target.dataset.action == "change color") {
    }
  });
});

function renderPokemonsToPage(pokemons) {
  const pokeContainer = document.querySelector("#pokemon-container");
  pokeContainer.innerHTML = ""; //clears pokemon displayed for filter
  pokemons.forEach(renderSinglePokemonToPage);
}
function renderSinglePokemonToPage(pokemon) {
  const pokeContainer = document.querySelector("#pokemon-container");
  pokeContainer.innerHTML += `<div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${
          pokemon.id
        }" data-action="flip" class="toggle-sprite" src="${
    pokemon.sprites.front
  }">
      </div>
    </div>
  </div>`;
}
function filterPokemon(e) {
  // console.log(e.target.value);

  const filteredPokes = POKEMON.filter(function(poke) {
    return poke.name.includes(e.target.value);
  });

  // console.log(filteredPokes);
  renderPokemonsToPage(filteredPokes);
}
