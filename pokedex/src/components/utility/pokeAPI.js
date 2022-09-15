import Axios from 'axios';
let apiurl = `https://pokeapi.co/api/v2/pokemon?limit=151`
// import bootstrapState from '../element/Bootstrap'    you are not able to export state within useEffect. exports && imports have to be at the top level above where state would be. 


export default async function APIcall(method, pokemon, type, randomAmount) {    
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
            return pokemon

            // console.log('pokemon')
            // console.log(pokemon)
            await randombucket.push(pokemon)                            
        }                

        if (typeof randomAmount == 'number' && randomAmount < 5 && randomAmount % 2 !== 0) {            
        // if (typeof randomAmount == 'number' && randomAmount < 5 && randomAmount + 1 % 2 !== 0) {   
            if (randomAmount > 1) {
                for (i; i < randomAmount-1; i++) {    
                // for (i; i < randomAmount-1; i++) {    
                    console.log(`this is running ${[i]} times!`)        // displaying a visual of the problem.  
                    // RandomAndReset()   
                    let newbucket = [await RandomAndReset(), await RandomAndReset(), await RandomAndReset()]     
                    return newbucket
                }
            }  else {
               let newbucket = [await RandomAndReset()]
               return newbucket
            }
        }    
    }       // typeOf method == 'string' && method == 'random'
    if (typeof method === 'string' && method === 'specify' && pokemon) {            // pokemon || pokemon.length or : [pokemon !== null || pokemon !== undefined)
        console.log('method')
        console.log(method)
        console.log('pokemon')
        console.log(pokemon)
        
        results.forEach( (result) => {
            // pokemon === result.name ? console.log(`thats ${result.name} signature move!`) : console.log('there is no equal value') // 150pokeAPI.js:70 nope no value 
            if (pokemon == result.name) {
                console.log("yeah weve got the value")
            } else { return }  
            // else { console.log('nope no value!') 
            // 1)  150pokeAPI.js:70 nope no value!  2) I thought this was wrong that it runs 150x "nope no value" That condition is met for every result.name that doesn't satisfy the condition.
            // 3) looking at this logic: lets say I pick charizard for [pokemon.id# "6"]    3.1  else { return } if i set a return statement i'm guessing the 1st value: bulbasaur. which doesn't satisfy the if but satisfies the else return statement: 
            // 4) this logic tells me that our return statement would end this entire forEach loop, and it would be met on the first id if we picked anybody besides the first pokemon "bulbasaur"
            // 5) wrongful assumption! charizard will run and the return will only apply to that specific instance of .forEach(result). Return for that result, the loop moves on. Return does not end the loop like a function does. 
        })
    }
    
}


 

// Parameters
