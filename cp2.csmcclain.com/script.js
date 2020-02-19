
function getCharacters(e)
{
    
    e.preventDefault();
    //now lets get them values
    let something = document.getElementById('houseSelector');
    let hogwartsHouse = something.options[something.selectedIndex].value;
    let deathEaters = document.getElementById('deathEater').checked;
    let dumbledoresArmys = document.getElementById('dumbledoresArmy').checked;
    let orderOfThePhoenixs = document.getElementById('orderOfThePhoenix').checked;
    let ministryOfMagics = document.getElementById('ministryOfMagic').checked;

    //setup url
    let url = 'https://www.potterapi.com/v1/characters?key=$2a$10$e2vvEKONEi4fdC.ROuFEMOdwu4xG3VEjR.S9URLPsNero/Fanpasy';
    debugger;
    console.log(url);
    fetch(url)
    .then(function(response) 
    {
      console.log(response);
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) 
    {
      let results = "";
      results += "<h1>";
          
    });
}

document.getElementById('get').addEventListener('click', getCharacters)