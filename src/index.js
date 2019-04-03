document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const searchBar = document.querySelector('#pokemon-search-form');
  const pokeContainer = document.querySelector('#pokemon-container')
  generateAllPokemons(POKEMON);

  searchBar.addEventListener('input', function(e) {
    e.preventDefault();
    let textInput = document.querySelector('#pokemon-search-input').value
    let pokemon_list = POKEMON.filter(function(pokemon) {
      return pokemon.name.includes(textInput.toLowerCase())
    })
    while (pokeContainer.firstChild) {
      pokeContainer.removeChild(pokeContainer.firstChild);
    }
    generateAllPokemons(pokemon_list);
  })

  pokeContainer.addEventListener('click', function (cards) {
    if (cards.target.dataset.action === 'flip') {
      const pokemon = POKEMON.find(function(pokemon) {
        return pokemon.id == cards.target.dataset.id
      })
      if (cards.target.src === pokemon.sprites.front) {
        cards.target.src = pokemon.sprites.back
      } else {
        cards.target.src = pokemon.sprites.front
      }
    }
  })

  function generateAllPokemons(pokemon_list) {
    for (const pokemon of pokemon_list) {
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let div3 = document.createElement('div');
      let h1 = document.createElement('h1');
      let img = document.createElement('img');
      let pokeName = document.createTextNode(`${pokemon.name}`)
      div1.setAttribute('class','pokemon-card');
      div2.setAttribute('class','pokemon-frame');
      div3.setAttribute('class','pokemon-image');
      h1.setAttribute('class','center-text');
      img.setAttribute('class','toggle-sprite');
      img.setAttribute('data-id',`${pokemon.id}`);
      img.setAttribute('data-action','flip');
      img.src = pokemon.sprites.front;
      h1.appendChild(pokeName)
      div3.appendChild(img);
      div2.appendChild(h1);
      div2.appendChild(div3);
      div1.appendChild(div2);
      pokeContainer.appendChild(div1);
    }
  }
})



// <div class="pokemon-card">
//   <div class="pokemon-frame">
//     <h1 class="center-text">charizard</h1>
//     <div class="pokemon-image">
//       <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
//     </div>
//   </div>
// </div>
