function append(parent, el)
{
    return parent.appendChild(el);
}


function getCharacters(e)
{
    debugger;
    e.preventDefault();
    //now lets get them values
    let something = document.getElementById('houseSelector');
    let hogwartsHouse = something.options[something.selectedIndex].value;
    let deathEaters = document.getElementById('deathEater').checked;
    let dumbledoresArmys = document.getElementById('dumbledoresArmy').checked;
    let orderOfThePhoenixs = document.getElementById('orderOfThePhoenix').checked;
    let ministryOfMagics = document.getElementById('ministryOfMagic').checked;

    //setup url
    const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';
    const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: hogwartsHouse.value}
    
    console.log(url);
    //Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
  let characters = data;
  // console.log(characters);
  //Map through the results
  return characters.map(function(character) {
    // Create the li's
    let li = createNode('li');
    // Make the HTML of our li the character's name and blood status
    li.innerHTML = `${character.name}, ${character.bloodStatus}`;
    // Append the li's to the ul
    append(ul, li);
  })
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
  append(body, p);
});
    



}













document.getElementById('get').addEventListener('click', getCharacters)