document.addEventListener('DOMContentLoaded', () => {
//  console.log(POKEMON)

//DEFAULT SCREEN----------------------------------------------------------------
window.onload = function(){
  displayPokemon(POKEMON)
}

//GLOBAL VARIABLES--------------------------------------------------------------
  const form = document.querySelector('#pokemon-search-form')
  const input = document.querySelector('#pokemon-search-input')
  const pokemon_container = document.querySelector('#pokemon-container')

//SORT POKEMON------------------------------------------------------------------
  function pokemonSorter(filter){
    POKEMON.forEach(function(element){
      if (filter !== ""){
        if (element.name.includes(filter)){
           filteredPokemon.push(element)
        }
      } else {
        filteredPokemon = POKEMON
      }
    })
  }

//EVENT LISTENER---------------------------------------------------------------
  form.addEventListener("keyup", function(event){
    var input = document.querySelector('#pokemon-search-input')
    var filter = input.value.toLowerCase();
      filteredPokemon = []
      while (pokemon_container.firstChild){
      pokemon_container.removeChild(pokemon_container.firstChild)
    }
       displayPokemon(filteredPokemon)
       pokemonSorter(filter)
       displayPokemon(filteredPokemon)
       event.preventDefault()
       console.log(filter)
  })


//SPRITE FLIP------------------------------------------------------------------
  pokemon_container.addEventListener("click", function(e) {
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

//DISPLAY POKEMON CARDS --------------------------------------------------------
   function displayPokemon(array){
     for (let i = 0; i < array.length; i ++){

       let pokemon_card = document.createElement('div');
       pokemon_card.setAttribute("class", "pokemon-card")
       pokemon_container.appendChild(pokemon_card);

        let pokemon_frame = document.createElement('div')
        pokemon_frame.setAttribute("class", "pokemon-frame")
        pokemon_card.appendChild(pokemon_frame)

        let pokemon_name = document.createElement('h1')
        pokemon_name.setAttribute("class", "center-text")
        pokemon_name.innerHTML = array[i].name
        pokemon_frame.appendChild(pokemon_name)

        let pokemon_image_div = document.createElement('div')
        pokemon_image_div.setAttribute("class", "pokemon-image")
        pokemon_frame.appendChild(pokemon_image_div)

        let pokemon_image = document.createElement('img')
        pokemon_image.setAttribute("data-id", i.toString())
        pokemon_image.setAttribute("data-action", "flip")
        pokemon_image.setAttribute("class", "toggle-sprite")
        pokemon_image.setAttribute("src", array[i].sprites.front)
        pokemon_image_div.appendChild(pokemon_image)
    }
  }
})
