document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE

  const searchBar = document.querySelector("#pokemon-search-form")
  const pokeContainer = document.querySelector('#pokemon-container')
  generateAllPokemon(POKEMON)

  searchBar.addEventListener('input', function(e) {
    e.preventDefault()
    let textInput = document.querySelector('#pokemon-search-input').value
    let pokemon_list = POKEMON.filter(function(pokemon) {
      return pokemon.name.includes(textInput.toLowerCase())
    })
    while (pokeContainer.firstChild) {
      pokeContainer.removeChild(pokeContainer.firstChild)
    }
    generateAllPokemon(pokemon_list)
  })
  function generateAllPokemon(pokemon_list) {
    for (const pokemon of pokemon_list) {
      let div1 = document.createElement('div')
      let divInner = document.createElement('div')
      let div2 = document.createElement('div')
      let div3 = document.createElement('div')
      let divBack = document.createElement('div')
      let h1 = document.createElement('h1')
      let img = document.createElement('img')
      let pokename = document.createTextNode(`${pokemon.name}`)
      let abilities = document.createTextNode(` Abilities: ${pokemon.abilities} |`)
      let moves = document.createTextNode(` Moves: ${pokemon.moves} |`)
      let types = document.createTextNode(` Types: ${pokemon.types} |`)
      let weight = document.createTextNode(` Weight: ${pokemon.weight} |`)
      div1.setAttribute('class', 'pokemon-card')
      divInner.setAttribute('class', 'pokemon-card-inner')
      div2.setAttribute('class', 'pokemon-frame')
      div3.setAttribute('class', 'pokemon-image')
      divBack.setAttribute('class', 'pokemon-card-back')
      h1.setAttribute('class', 'center-text')
      img.setAttribute('class', 'toggle-sprite')
      img.setAttribute('data-id', `${pokemon.id}`)
      img.setAttribute('data-action', 'flip')
      img.src = pokemon.sprites['front']
      h1.appendChild(pokename)
      divBack.appendChild(abilities)
      divBack.appendChild(moves)
      divBack.appendChild(types)
      divBack.appendChild(weight)

      pokeContainer.appendChild(div1)
      div1.appendChild(divInner)
      divInner.appendChild(div2)
      divInner.appendChild(divBack)
      div2.appendChild(h1)
      div2.appendChild(div3)
      div3.appendChild(img)
    }
  }
})
