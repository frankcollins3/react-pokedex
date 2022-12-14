import APIcall from './pokeAPI'
let pokemonObject = {
    name: '',
    id: '',
    url: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
}
export default async function ObjectTemplate(nameOrId) {
    
    if (typeof nameOrId === 'string') {    
        let specificFetch = await APIcall('specify', nameOrId)                    
        let emptyObject = {empty: pokemonObject}
        specificFetch.push(emptyObject)             
        return specificFetch
        // relative-to-personal-experience-level but this is insane that you can do this. it is defeating the purpose of this being a quick tool to get a quick object to render.
        
    } else if (typeof nameOrId === 'number') {
        console.log("nice numbers")
        let dataForObject = await APIcall('specify', nameOrId)           
        let emptyObject = {empty: pokemonObject}
        dataForObject.push(emptyObject)
        return dataForObject    
    }
}


// (2) [{…}, {…}] this has everything you need! I was also trying to merge 2 arrays or map together. 
// 0: {abilities: Array(2), base_experience: 267, forms: Array(1), game_indices: Array(20), height: 17, …}
// 1: {name: 'charizard', id: 6, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'}
// length: 2
// [[Prototype]]: Array(0)


// let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${singledata.id}.png`

// let preObjectData = await APIcall('all')
// let pokeArray = preObjectData.pokemon
// pokeArray.forEach( (result) => {
//     if (result.name === nameOrId) {
    //     }
    // })
//  // {name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'}                                
