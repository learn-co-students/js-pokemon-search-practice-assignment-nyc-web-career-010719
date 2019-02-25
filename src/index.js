document.addEventListener('DOMContentLoaded', () => {
  renderAllPokemonToPage(POKEMON)
  // myPoke();
  //YOUR CODE HERE
  //SELECT CONTAINERS
  let pokeContainer = document.querySelector('#pokemon-container')
  let input = document.querySelector('#pokemon-search-input')

  //CALL EVENT LISTENERS ON CONTAINERS W FUNCTIONS
  input.addEventListener('input', filterPokemon)
  pokeContainer.addEventListener('click', togglePokemon)

}) // end of DOM CONTENT LOADED

//WRITE FUNCTIONS
function renderAllPokemonToPage(pokemons){
  const pokeContainer = document.querySelector('#pokemon-container')
  pokeContainer.innerHTML = ""
  pokemons.forEach(renderSinglePokemonToPage)
}

function renderSinglePokemonToPage(pokemon){
  const pokeContainer = document.querySelector('#pokemon-container')
  pokeContainer.innerHTML += `<div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
  </div>`
}

function filterPokemon(e){
 const filteredPokes = POKEMON.filter(pokemon => pokemon.name.includes(e.target.value))
 renderAllPokemonToPage(filteredPokes)
}

function togglePokemon(e){
  if (e.target.dataset.id){
    const poke = POKEMON.find(p => p.id == e.target.dataset.id)
    if (e.target.src === poke.sprites.front){
      e.target.src = poke.sprites.back
    } else {
      e.target.src = poke.sprites.front
    }
  }
}

// render pokemon
// make sure to call the function in DOM content loaded
// render one pokemone by passing a pokemon, selecting the container and updating the innerHTML.
// then call this function forEACH pokemon in the POKEMON array.



//filter pokemon
// call event listener on search input through input event. define function.
// function filters all pokemon where the name includes the value that was put into the search bar and saves this to a variable
// then it calls the render all pokemones with the updated filtered array



// toggle pokemon:
// select entire container
// define an event listener on click and call function
// outside of DOM content loaded - write function
// toggle pokemon, accepts an event -- the event that is declared with the LISTENERS
// it then checks to see if you are clicking on a specific pokemon instead of anything else by checking the dataset id target
// then you need to find the pokemon that was clicked on by searching through the pokemon array and finding where the id matches the clicked on id.
// then you change the img src to the opposite of its current state.

















/////////////////////////INITIAL CODE ///////////////////////




// var poke = document.querySelector('.toggle-sprite')
// poke.addEventListener("click", myToggle);

// let toggle = true;
// function myToggle(toggle, element) {
//   let imgLink = document.querySelector('.toggle-sprite').src
//   toggle = !toggle
//   if(toggle === false){
//     img.src = element.sprites.back;
//   }
//   else if (toggle === true){
//     img.src = element.sprites.front;
//     }
//   }


function myPoke(){
  POKEMON.forEach(function(element){
    pokeCont = document.querySelector('#pokemon-container')
    var pokemon_card = document.createElement('div','pokemon_card');
    var pokemon_frame = document.createElement('div', 'pokemon_frame');
    var pokemon_text = document.createElement('div', 'pokemon_text');
    var center_text = document.createElement('h1', 'center_text');
    var pokemon_image = document.createElement('div', 'pokemon_image');
    var img = document.createElement('img');
    img.setAttribute("src", element.sprites.front)

    center_text.innerHTML = element.name;
    // img.src = element.sprites.front;
    pokeCont.appendChild(pokemon_card);
    pokemon_card.appendChild(pokemon_frame);
    pokemon_frame.appendChild(center_text);
    pokemon_frame.appendChild(pokemon_image);
    img.setAttribute("id", element.id)
    img.setAttribute("data-action", "flip")
    img.setAttribute("class", "toggle-sprite")
    pokemon_image.appendChild(img);
    var poke = document.querySelector('.toggle-sprite')
    let pokeFace = false
    poke.addEventListener("click", function(event){
    if (pokeFace === false){
      img.setAttribute("src", element.sprites.back)
      pokeFace = true
    }
    else if (pokeFace === true){
      img.setAttribute("src", element.sprites.front)
      pokeFace = false
    }
  });
});
}
