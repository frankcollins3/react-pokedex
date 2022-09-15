import Axios from 'axios';
let apiurl = `https://pokeapi.co/api/v2/pokemon?limit=151`

export default async function APIcall(method, specify, type, randomAmount) {    
    // console.log("in the api call")
    // console.log('method')
    // console.log(method)
    const randombucket = [] || new Array()
    let i = 0; 

    let response = await Axios.get(apiurl)
    let results = response.data.results
    if (typeof method === 'string' && method == 'all') {
        return results = {
            pokemon: results,
            imaginarykey: 'imaginary value'
        }
    }

    if (typeof method === 'string' && method == 'random') {
        // console.log('we have the random method here we go')
        // console.log('results down here')
        const RandomAndReset = async () => {
            // console.log("random and reset")            

            let randomPokemon = results[Math.floor(Math.random()*results.length)]           
            let preSliceURL = randomPokemon.url.slice(randomPokemon.url.length - 5)
            let cleanid = preSliceURL.replace(/[/\/a-z]/g, '')
            let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cleanid}.png`

            let pokemon = { 
                name: randomPokemon.name,
                id: cleanid,
                img: imageurl
            }
            await randombucket.push(pokemon)
            console.log('randombucket')
            console.log(randombucket)
            
            
        }
        if (typeof randomAmount == 'number' && randomAmount < 5 && randomAmount % 2 !== 0) {
            for (i; i < randomAmount; i++) {
                RandomAndReset()
            }
        }
        RandomAndReset()
        


    }

}

// Parameters
// * Method (what type of datacall are we initializing): 1) returnAllpokemon 2) returnRandomPokemon 3) returnSpecifiedPokemon (by poke.name || poke.id) 
// * Specify: if (arg1/method == 'random') specify: 'pokemon.name/string i.e. bulbasaur' || id by int i.e. 1 (bulbasaur)
// * type: if (arg1/method == 'random') type of randomPokemon       <!- i also might allow type as an optional argument just to validate the specified pokemon against itself. Sounds useless and not needed but is an extra measure of validation/overcommunication -!>

// * random Amount: if (method == 'random' the amount of randomPokemon we will be returning. limited by 5. must be an odd number that will be validated against modulo % 2 !== 0; (odd number)
 

// Parameters
