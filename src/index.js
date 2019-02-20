document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE

  // get the div element that other elements will be added to
  const pokeContainer = document.querySelector("#pokemon-container")
  // get the searched pokemon input
  const searchVar = document.querySelector("#pokemon-search-input")


  function displayPokemon(array) {
    return array.forEach( function (pokemon) {
      // create the pokemon-card div that's nested under the pokemon-container
      var pokeCard = document.createElement("div")
      pokeCard.setAttribute("class", "pokemon-card")
      // append the new pokemon-card div to the pokemon-container
      pokeContainer.appendChild(pokeCard)

      // create the pokemon-frame div that's under the pokemon-card
      var pokeFrame = document.createElement("div")
      pokeFrame.setAttribute("class", "pokemon-frame")
      // append the new pokemon-frame to the pokemon-card
      pokeCard.appendChild(pokeFrame)

      // create the h1 containing the name, under the pokemon-frame
      var pokeH1 = document.createElement("h1")
      pokeH1.innerText = pokemon.name
      pokeH1.setAttribute("class", "center-text")
      // append the h1 to the pokemon-frame
      pokeFrame.appendChild(pokeH1)

      // create the img div under the pokemon-frame
      var pokeImg = document.createElement("div")
      pokeImg.setAttribute("class", "pokemon-image")
      // append the img div to the pokemon-frame
      pokeFrame.appendChild(pokeImg)

      var pokemonSprite = "front"
      // create the img tag under the img div
      var pokePic = document.createElement("img")
      pokePic.setAttribute("class", "toggle-sprite")
      pokePic.setAttribute("src", pokemon.sprites.front)
      pokePic.setAttribute("data-id", pokemon.id)
      pokePic.setAttribute("data-action", "flip")
      // append the img tag to the img div
      pokeImg.appendChild(pokePic)

      // add an event listener to the pokemon picture
      // this should allow you to change the img src
      pokePic.addEventListener("click", function(event) {
        if (pokemonSprite === "front") {
          // if the pokemonSprite variable is now "front" --> it should switch it to the back
          pokePic.setAttribute("src", pokemon.sprites.back) // now it's the back img
          // console.log("front was clicked, now i'm the back!")
          pokemonSprite = "back"
        } else {
          // otherwise if the pokemon sprite is the back, it'll switch to the front
          pokePic.setAttribute("src", pokemon.sprites.front)
          // console.log("back was clicked, now i'm the front!")
          pokemonSprite = "front"
        }
      })

    }); // end of the pokemon filter
  }

  displayPokemon(POKEMON); // this will display all the pokemon at first

  // Implement a filter functionality for your Pokemon list.

  searchVar.addEventListener("input", function(event) {
    // clear the div pokemon-container every time you change input
    pokeContainer.innerHTML = ""

      var ps = POKEMON.filter( function(pokemon) {
        return pokemon.name.includes(searchVar.value)
      })

    displayPokemon(ps);
  })



  // build out other functionality
})



// Implement a flip functionality on each Pokemon. xxxx
// Your search should include pokemon whose names are not exact matches
// AS A BONUS, add a way to show users details for a particular pokemon: moves, abilities, etc.
