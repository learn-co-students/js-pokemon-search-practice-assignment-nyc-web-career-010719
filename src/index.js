document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE


  const pokemonContainer = document.querySelector("#pokemon-container")

  const form = document.querySelector("#pokemon-search-form")

  const input = document.querySelector("#pokemon-search-input")

  displayPokemon(POKEMON)
  document.querySelector("p").style.display = 'none'
  document.querySelector("center").style.display = 'none'

  input.addEventListener("input", function(event) {
    // event.preventDefault()
    while (pokemonContainer.firstChild) {
    pokemonContainer.removeChild(pokemonContainer.firstChild)
    }
    let filter = input.value.toLowerCase()
    let filteredPokemon = POKEMON.filter(function(pokemon) {
      return pokemon.name.indexOf(filter) > -1
    })
    if (filteredPokemon.length > 0) {
      displayPokemon(filteredPokemon)
    } else if (filteredPokemon.length == 0) {
        let p = document.createElement('p')
        let center = document.createElement('center')
        center.innerText = "There are no Pokémon here"
        p.appendChild(center)
        pokemonContainer.appendChild(p)
    }
  })
// if filter is something show filtered cards


function displayPokemon(group) {


  group.forEach(function (pokemon) {

    let pokemonCard = document.createElement("div")
    pokemonCard.setAttribute("class", "pokemon-card")
    pokemonContainer.appendChild(pokemonCard)

    let pokemonFrame = document.createElement("div")
    pokemonFrame.setAttribute("class", "pokemon-frame")
    pokemonCard.appendChild(pokemonFrame)

    let pokemonName = document.createElement("h1")
    pokemonName.setAttribute("class", "center-text")
    pokemonName.innerText = pokemon.name
    pokemonFrame.appendChild(pokemonName)

    let pokemonImage = document.createElement("div")
    pokemonImage.setAttribute("class", "pokemon-image")
    pokemonFrame.appendChild(pokemonImage)

    let image = document.createElement("img")
    image.setAttribute("class", "toggle-sprite")
    image.setAttribute("data-action", "flip")
    image.setAttribute("data-id", pokemon.id)
    image.setAttribute("src", pokemon.sprites.front)
    pokemonImage.appendChild(image)

    image.addEventListener("click", sprite)

    function sprite() {
      if (image.src === pokemon.sprites.front) {
        image.src = pokemon.sprites.back
      }
      else if (image.src === pokemon.sprites.back) {
        image.src = pokemon.sprites.front
      }
    }

  })}


})
