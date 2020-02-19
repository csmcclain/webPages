
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
    debugger;
    let url = 'https://www.potterapi.com/v1/characters?key=$2a$10$e2vvEKONEi4fdC.ROuFEMOdwu4xG3VEjR.S9URLPsNero/Fanpasy';
    url += '&house=' + hogwartsHouse;
    if (deathEaters)
    {
      url += '&deathEater=true';
    }
    if (dumbledoresArmys)
    {
      url += '&dumbledoresArmy=true';
    }
    if (orderOfThePhoenixs)
    {
      url += '&orderOfThePhoenix=true';
    }
    if (ministryOfMagics)
    {
      url += '&ministryOfMagic=true';
    }
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
      results += "<h1>Harry Potter " + hogwartsHouse + " Characters</h1>";
      results += "<ul>";
      let size = Object.keys(json).length;

      for(let i = 0; i < size; i++)
      {
        results += "<li>" + json[i].name + ", " + json[i].house + ", " + json[i].bloodStatus + "</li>";
      }
      
      console.log(results);
      document.getElementById("results").innerHTML = results;

    });
}

document.getElementById('get').addEventListener('click', getCharacters)