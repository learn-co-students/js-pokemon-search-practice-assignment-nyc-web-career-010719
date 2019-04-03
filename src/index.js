document.addEventListener('DOMContentLoaded', () => {
//  console.log(POKEMON)


  var form = document.querySelector('#pokemon-search-form')
  var input = document.querySelector('#pokemon-search-input')
  //var filteredPokemon = []

  function pokemonSorter(filter){
    POKEMON.forEach(function(element){
      if (filter !== ""){
        if (element.name.includes(filter)){
           filteredPokemon.push(element)
        }
      }
      else {
        filteredPokemon = POKEMON
      }

    })
    console.log(filteredPokemon)
  }

  form.addEventListener("keyup", function(event){
    var input = document.querySelector('#pokemon-search-input')
    var filter = input.value.toLowerCase();
      filteredPokemon = []
      while (pokemon_container.firstChild){
      pokemon_container.removeChild(pokemon_container.firstChild)
    }
       displayPokemon()
       pokemonSorter(filter)
       displayPokemon()
       event.preventDefault()
       console.log(filter)
  })

  const pokemon_container = document.querySelector('#pokemon-container')

   function displayPokemon(){ for (let i = 0; i < filteredPokemon.length; i ++){
    let pokemon_card = document.createElement('div');
    pokemon_card.setAttribute("class", "pokemon-card")
    pokemon_container.appendChild(pokemon_card);

    var pokemon_frame = document.createElement('div')
    pokemon_frame.setAttribute("class", "pokemon-frame")
    pokemon_card.appendChild(pokemon_frame)

    var pokemon_name = document.createElement('h1')
    pokemon_name.setAttribute("class", "center-text")
    pokemon_name.innerHTML = filteredPokemon[i].name
    pokemon_frame.appendChild(pokemon_name)

    var pokemon_image_div = document.createElement('div')
    pokemon_image_div.setAttribute("class", "pokemon-image")
    pokemon_frame.appendChild(pokemon_image_div)


    var pokemon_image = document.createElement('img')
      pokemon_image.setAttribute("data-id", i.toString())
      pokemon_image.setAttribute("class", "toggle-sprite")
      pokemon_image.setAttribute("src", filteredPokemon[i].sprites.front)
      pokemon_image_div.appendChild(pokemon_image)
    }
  }


})
