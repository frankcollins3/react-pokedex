import Axios from 'axios';
let apiurl = `https://pokeapi.co/api/v2/pokemon?limit=151`
let singleurl = `https://pokeapi.co/api/v2/pokemon/`

// import bootstrapState from '../element/Bootstrap'    you are not able to export state within useEffect. exports && imports have to be at the top level above where state would be. 


// let  specifyBucket = [] || new Array()   // pushed to see if the other [null || undefined] variables were being pushed and that they were being rendered instead of the one that had a value
// specifyBucket.push(method)
export default async function APIcall(method, poke, type, randomAmount) {          
    // if (poke == result.name) {
    //     let clean1liner = result.url.slice(result.url.length - 5).replace(/[/\/a-z]/g, '')
//     let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${clean1liner}.png`


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

    if (method === 'specify' && poke) {
        let singledatacall = await Axios.get(`${singleurl}${poke}`)        
        let singledata = singledatacall.data
        let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${singledata.id}.png`
        console.log('singledata')
        console.log(singledata)
        
        // return poke = {
        //     name: singledata.name,
        //     id: singledata.id,
        //     image: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${singledata.id}.png`
        // }        
        const  mypoke = {
            name: singledata.name,
            id: singledata.id,
            image: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${singledata.id}.png`
        }        
        return [singledata, mypoke]
        
        /*
        results.forEach( (result) => {
            if (poke === result.name) {
                return poke = { name: result.name, id: result.url.slice(urlLength-5).replace(/\/a-z), image: github/cleanid }
                1) i had this function set up under the others so it had access to the: [VScodeLine42: let results = response.data.results]
                2) huge separation-of-concerns problem. In terms of using specify/method and different datacalls from the randomPokemon && APIcallALL being relevant/part of console.logs() on this side.                
                *** $(this).approach.current()=> more boring than using the other results and validating on the .each(loop) for equivalency to our "poke" 2nd function parameter. proof-of-concept/isMinimViable / any-means-necessary at this point.
            }
        }
         */      
    }

    

    // **** ***** ****** **** ***** ****** **** return randomPokemon
    if (typeof method === 'string' && method === 'random') {
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

        if (typeof randomAmount === 'number' && randomAmount < 5 && randomAmount % 2 !== 0) {            
            console.log('randomAmount')
            console.log(randomAmount)
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
        console.log(`heres our methods: ${poke}`)
    
}
}

// Parameters
// * Method (what type of datacall are we initializing): 1) returnAllpokemon 2) returnRandomPokemon 3) returnSpecifiedPokemon (by poke.name || poke.id) 
// * pokemon: if (arg1/method == 'random') specify: 'pokemon.name/string i.e. bulbasaur' || id by int i.e. 1 (bulbasaur)
// * type: if (arg1/method == 'random') type of randomPokemon       <!- i also might allow type as an optional argument just to validate the specified pokemon against itself. Sounds useless and not needed but is an extra measure of validation/overcommunication -!>
// * random Amount: if (method == 'random' the amount of randomPokemon we will be returning. limited by 5. must be an odd number that will be validated against modulo % 2 !== 0; (odd number)
 

// Parameters
