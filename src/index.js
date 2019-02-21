document.addEventListener('DOMContentLoaded', () => {
  const pokemonContainer = document.querySelector('#pokemon-container')

  renderAllPokemon(POKEMON)

  let input = document.querySelector('#pokemon-search-input')
  input.addEventListener('input', filterPokemon)

  pokemonContainer.addEventListener('click', function(e){
    const pokemon = POKEMON.find(p => p.id == e.target.dataset.id)
    if (e.target.src === pokemon.sprites.front) {
      e.target.src = pokemon.sprites.back;
    } else {
      e.target.src = pokemon.sprites.front
    }
  })
})

function renderAllPokemon(pokemons){
  const pokemonContainer = document.querySelector("#pokemon-container");
  pokemonContainer.innerHTML = "";
  pokemons.forEach(renderSinglePokemon);
}

function renderSinglePokemon(pokemon){
  const pokemonContainer = document.querySelector("#pokemon-container");
  pokemonContainer.innerHTML += `<div class="pokemon-card">
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

function filterPokemon(e){
  const filteredPokes = POKEMON.filter(function(poke){
    return poke.name.includes(e.target.value);
  })
renderAllPokemon(filteredPokes);
}

// document.addEventListener('DOMContentLoaded', () => {
//   var input = document.querySelector('#pokemon-search-input')
//
//   displayPokemon(POKEMON)
//   function displayPokemon(arg){
//     for (let i = 0; i < arg.length; i++) {
//       const pokeContainer = document.querySelector('#pokemon-container')
//       const pokeDiv = document.createElement('div')
//         pokeDiv.className = 'pokemon-card'
//         // pokeDiv.innerText = "look at MEEEE"
//       const pokeFrameDiv = document.createElement('div')
//         pokeFrameDiv.className = 'pokemon-frame'
//         // pokeDiv.innerText = "IMMA DIV"
//       const pokeHeader = document.createElement('h1')
//         pokeHeader.className = 'center-text'
//         pokeHeader.innerText = arg[i]['name']
//       const imageDiv = document.createElement('div')
//         imageDiv.className = 'pokemon-image'
//         // imageDiv.innerText = "WORK"
//       const pokeImage = document.createElement('img')
//         pokeImage.className = 'toggle-sprite'
//         pokeImage.src = arg[i]['sprites']['front']
//       imageDiv.appendChild(pokeImage)
//       pokeFrameDiv.appendChild(pokeHeader)
//       pokeFrameDiv.appendChild(imageDiv)
//       pokeDiv.appendChild(pokeFrameDiv)
//       pokeContainer.appendChild(pokeDiv)
//     }
//   }
//
//     var filterPokes = input.addEventListener('input', function(e){
//       keyword = input.value.toLowerCase();
//       filteredPokes = POKEMON.filter(function(poke){
//         var matcher = poke.name.includes(keyword)
//         return poke.name.indexOf(keyword) > -1;
//
//       })
//       console.log(filteredPokes)
//       displayPokemon(filteredPokes)
//       //   for (let i = 0; i < filteredPokes.length; i++) {
//       //   const pokeContainer = document.querySelector('#pokemon-container')
//       //   const pokeDiv = document.createElement('div')
//       //     pokeDiv.className = 'pokemon-card'
//       //     // pokeDiv.innerText = "look at MEEEE"
//       //   const pokeFrameDiv = document.createElement('div')
//       //     pokeFrameDiv.className = 'pokemon-frame'
//       //     // pokeDiv.innerText = "IMMA DIV"
//       //   const pokeHeader = document.createElement('h1')
//       //     pokeHeader.className = 'center-text'
//       //     pokeHeader.innerText = filteredPokes[i]['name']
//       //   const imageDiv = document.createElement('div')
//       //     imageDiv.className = 'pokemon-image'
//       //     // imageDiv.innerText = "WORK"
//       //   const pokeImage = document.createElement('img')
//       //     pokeImage.className = 'toggle-sprite'
//       //     pokeImage.src = filteredPokes[i]['sprites']['front']
//       //   imageDiv.appendChild(pokeImage)
//       //   pokeFrameDiv.appendChild(pokeHeader)
//       //   pokeFrameDiv.appendChild(imageDiv)
//       //   pokeDiv.appendChild(pokeFrameDiv)
//       //   pokeContainer.appendChild(pokeDiv)
//       // };
//
//     })
//
//   //getting all the cards on the page
//   //Implement a filter functionality for your Pokemon list.
// })
