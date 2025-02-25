const PokemonCount = 151;
var pokedex = {} //{11:{"name":"bulasabar","img":url }}
var rand=1;

const btn= document.getElementById("change");
console.log(btn.conten);



 window.onload = async function name(params) {
    
    getpokemon(rand);
 }
function changes(){

    rand=document.getElementById("cnt").value;

    if(rand<1){
        rand=1;
        document.getElementById("cnt").value=1;
    }
    if(rand>151){
        rand=151;
        document.getElementById("cnt").value=151;
    }
    console.log(rand);
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
     let weight = pokemon["weight"];
     
     pokemondesc =pokemondesc["flavor_text_entries"][9]["flavor_text"];
     document.getElementById("sprite").src=imgstr;
    document.getElementById("PokemonName").innerText=pokemonname.toUpperCase();
    document.getElementById("PokemonType").innerText="Type: "+type;
    document.getElementById("PokemonSpecies").innerText="Species: "+spec;
    document.getElementById("Height").innerText="Height: "+height;
    document.getElementById("Ability").innerText="Ability: "+ability;
    document.getElementById("Weight").innerText="Weight: "+weight;

    document.getElementById("desc").innerText=pokemondesc;
    console.log(pokemon);
}
