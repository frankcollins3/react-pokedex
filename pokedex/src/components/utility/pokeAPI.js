import Axios from 'axios';
let apiurl = `https://pokeapi.co/api/v2/pokemon?limit=151`
// import bootstrapState from '../element/Bootstrap'    you are not able to export state within useEffect. exports && imports have to be at the top level above where state would be. 


export default async function APIcall(method, specify, type, randomAmount) {    
    // console.log("in the api call")
    // console.log('method')
    // console.log(method)
    const randombucket = [] || new Array()
    let i = 0; 

    let response = await Axios.get(apiurl)
    let results = response.data.results
    //  *****   ******  **** very simple return-ALL-Pokemon 1-151 specified by above url with endpoint -> limit = 151
    if (typeof method === 'string' && method == 'all') {
        return results = {
            pokemon: results,
            imaginarykey: 'imaginary value'
        }
    }

    // **** ***** ****** **** ***** ****** **** return randomPokemon
    if (typeof method === 'string' && method == 'random') {
        // console.log('we have the random method here we go')
        // console.log('results down here')
        const RandomAndReset = async () => {
            let randomPokemon = results[Math.floor(Math.random()*results.length)]           
            let preSliceURL = randomPokemon.url.slice(randomPokemon.url.length - 5)
            let cleanid = preSliceURL.replace(/[/\/a-z]/g, '')
            let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cleanid}.png`

            let pokemon = { 
                name: randomPokemon.name,
                id: cleanid,
                img: imageurl
            }
            // console.log('pokemon')
            // console.log(pokemon)
            await randombucket.push(pokemon)                            
        }                

        if (typeof randomAmount == 'number' && randomAmount < 5 && randomAmount % 2 !== 0) {            
        // if (typeof randomAmount == 'number' && randomAmount < 5 && randomAmount + 1 % 2 !== 0) {            
            for (i; i < randomAmount-1; i++) {        
                RandomAndReset()                
            }
        }
        const checkBucket = () => {
            console.log(randombucket)
            if (randomAmount.length < 3) return randombucket[0]
            if (randombucket.length === 3) return randombucket
        }
        const doEmBoth = async () => {
            await RandomAndReset()
            await checkBucket()
        }
        console.log('here goes doEmBot')
        doEmBoth()

    
    }
    
}

// Parameters
// * Method (what type of datacall are we initializing): 1) returnAllpokemon 2) returnRandomPokemon 3) returnSpecifiedPokemon (by poke.name || poke.id) 
// * Specify: if (arg1/method == 'random') specify: 'pokemon.name/string i.e. bulbasaur' || id by int i.e. 1 (bulbasaur)
// * type: if (arg1/method == 'random') type of randomPokemon       <!- i also might allow type as an optional argument just to validate the specified pokemon against itself. Sounds useless and not needed but is an extra measure of validation/overcommunication -!>

// * random Amount: if (method == 'random' the amount of randomPokemon we will be returning. limited by 5. must be an odd number that will be validated against modulo % 2 !== 0; (odd number)
 

// Parameters
