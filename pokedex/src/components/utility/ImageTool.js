import APIcall from './pokeAPI'
import Axios from 'axios'
let url = `https://pokeapi.co/api/v2/pokemon/`
 
export default async function GetImage(pokemon, imgtype) {
    // console.log(pokemon)
    // 1) this tool will accept a "pokemon" parameter which would be either the pokemon.name or pokemon.id 
    // 2) use that string data to access pokeapi so we can return image data by accessing the poke data with out pure-function imgtype parameter. We will make a url that uses the pokemon parameter to fetch our data.
    // console.log("getImage tool! options are: [ front || back || shiny ]")
    let keypiece;
    if (typeof pokemon === 'string')     keypiece = pokemon
    else if (typeof pokemon === 'number') keypiece = pokemon  // this number would be a returned string already. 

    let dataForImage = await APIcall('specify', keypiece)
    let datacall = await Axios(`${url}${pokemon}`)

    console.log('datacall')
    console.log(datacall)

    let actualPokeAPI = datacall.data
    // let actualPokeAPI = dataForImage[0]

    let images = actualPokeAPI.sprites

    if (imgtype === 'all') {
        return images

    } else if (imgtype === 'front' || imgtype === 'back' || imgtype.includes('shiny')) {
        
        const front = images.front_default     // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
        const back = images.back_default
        const frontshiny = images.front_shiny
        const backshiny = images.back_shiny
        
        if (imgtype == 'front') return front
        if (imgtype == 'back') return back
        // if (typeof imgtype == 'string') {
            if (imgtype == 'frontshiny') return frontshiny
            if (imgtype == 'backshiny') return backshiny
        }    
    }
    

    
// }

// google chrome inspect ----> console.log(dataForImage)

// ImageTool.js:13 
// (2) [{…}, {…}]
// 0
// : 
// {abilities: Array(2), base_experience: 64, forms: Array(1), game_indices: Array(20), height: 7, …}
// 1
// : 
// {name: 'bulbasaur', id: 1, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}


