const PokemonCount = 151;
var pokedex = {} //{11:{"name":"bulasabar","img":url }}
var rand=6;


window.addEventListener("click",getpokemon(rand));

 window.onclick = async function name(params) {
    rand=document.getElementById("cnt").value;
    getpokemon(rand)
 }

async function getpokemon(num){
    
    
    let url ="https://pokeapi.co/api/v2/pokemon/" + num.toString();
      
    let res = await fetch(url);
    
    let pokemon = await res.json()
    let v= await fetch(pokemon["species"]["url"]);
    let pokemondesc = await v.json();
    let pokemonname = pokemon["name"];
     let imgstr = pokemon["sprites"]["front_default"];
     let type = pokemon["types"]["0"]["type"]["name"];
     let spec = pokemon["species"]["name"];
     let height = pokemon["height"];
     let ability = pokemon["abilities"]["0"]["ability"]["name"];
     
     
     pokemondesc =pokemondesc["flavor_text_entries"][9]["flavor_text"];
     document.getElementById("sprite").src=imgstr;
    document.getElementById("PokemonName").innerText=pokemonname;
    document.getElementById("PokemonType").innerText="Type: "+type;
    document.getElementById("PokemonSpecies").innerText="Species: "+spec;
    document.getElementById("Height").innerText="Height: "+height;
    document.getElementById("Ability").innerText="Ability: "+ability;

    document.getElementById("desc").innerText=pokemondesc;
    console.log(pokemon);
}

