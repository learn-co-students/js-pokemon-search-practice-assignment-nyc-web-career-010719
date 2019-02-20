document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  const searchBar = document.querySelector('#pokemon-search-input')
  const mainContainer = document.querySelector('#pokemon-container')


  //display all of the pokemon (fetch)
  function renderSinglePokemon(pokemon) {
    return (
      `<div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>`)
  }

  function renderAllPokemon(pokemonArray) {
    return pokemonArray.map(rendersinglePokemon).join('')
  }

  mainContainer.innerHTML = renderAllPokemon(POKEMON)

  //filter card based on search field input
  searchBar.addEventListener('input', (e) => {
    const filteredMon = POKEMON.filter(pokemonObject => pokemonObject.name.includes(e.target.value.toLowerCase()))
    const filteredCards = renderAllPokemon(filteredMon)
    mainContainer.innerHTML = filteredCards ? filteredCards : `<p>You're shit out of luck, sun.<p>`
  })























//     //show all pokemon
//     for (pokemon in POKEMON) {
//       //create and name new elements
//       const newCard = cardTable.createElement('div')
//       const frame = newCard.createElement('div')
//       const name = frame.createElement('h1')
//       const pic = frame.createElement('img')
//
//       //append frame to card, give card a class
//       newCard.setAttribute("class", "pokemon-card")
//       newCard.appendChild(frame)
//
//       //append name and pic to frame, give frame a class
//       frame.setAttribute("class", "pokemon-frame")
//       frame.appendChild(name)
//       frame.appendChild(pic)
//
//       //get name from pokemon array
//       name.innerHTML = pokemon.name
//
//       //set pic attributes
//       pic.setAttribute('data-id', POKEMON.id)
//       pic.setAttribute('data-action', 'flip')
//       pic.setAttribute('class', 'toggle-sprite')
//       pic.setAttribute('src', POKEMON.sprites.front)
//     }
//
//   }
// })
//
// searchBar.addEventListener('input', () => {
//   input = searchBar
//   filter = input.value.toUpperCase()
//
//   for (pokemon in POKEMON) {
//     card = cardTable.getElementByID()
//
//     if (pokemon.name.toUpperCase().indexOf(filter) > -1) {
//       card.style.display = 'grid'
//     } else {
//       card.style.display = 'none'
//     }
//   }
// })
// for (i = 0; i < li.length; i++) {
//   a = li[i].getElementsByTagName("a")[0];
//   txtValue = a.textContent || a.innerText;
//   if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//   }
// }
