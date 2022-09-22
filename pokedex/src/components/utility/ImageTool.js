import APIcall from './pokeAPI'
 
export default async function GetImage(pokemon, imgtype) {
    // 1) this tool will accept a "pokemon" parameter which would be either the pokemon.name or pokemon.id 
    // 2) use that string data to access pokeapi so we can return image data by accessing the poke data with out pure-function imgtype parameter. We will make a url that uses the pokemon parameter to fetch our data.
    console.log("getImage tool! options are: [ front || back || shiny ]")
    let keypiece;
    if (typeof pokemon === 'string')     keypiece = pokemon
    else if (typeof pokemon === 'number') keypiece = pokemon  // this number would be a returned string already. 
    
    let dataForImage = await APIcall('specify', keypiece)
    let actualPokeAPI = dataForImage[0]
    let images = actualPokeAPI.sprites
    console.log('images')
    console.log(images)
    const front = images.front_default
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
    
    console.log('front')    // can go into the console and take this url. [cmnd-t mac || cntr-t pc ] / new google chrome/browser tab paste the returned url and see the actual image rendered
    console.log(front)

    const back = images.back_default
    const shiny = images.front_shiny

    
}

// google chrome inspect ----> console.log(dataForImage)

// ImageTool.js:13 
// (2) [{…}, {…}]
// 0
// : 
// {abilities: Array(2), base_experience: 64, forms: Array(1), game_indices: Array(20), height: 7, …}
// 1
// : 
// {name: 'bulbasaur', id: 1, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}


