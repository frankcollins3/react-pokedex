import APIcall from './pokeAPI'

export default function GetImage(pokemon, imgtype) {
    // 1) this tool will accept a "pokemon" parameter which would be either the pokemon.name or pokemon.id 
    // 2) use that string data to access pokeapi so we can return image data by accessing the poke data with out pure-function imgtype parameter. We will make a url that uses the pokemon parameter to fetch our data.
    console.log("getImage tool! options are: [ front || back || shiny ]")
    if (typeof pokemon === 'string')     console.log(`string ${pokemon}`)
    else if (typeof pokemon === 'number')     console.log(`integer/number ${pokemon}`)
    
}