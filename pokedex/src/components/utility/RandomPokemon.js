import { useState, useEffect } from 'react';
import APIcall from './pokeAPI'

export default function ReturnRandomPoke (nPoke) {
    
    const randomPokeBucket = [] || new Array() 
    console.log("we are in the return random pokemon function")
    useEffect( () =>{
        APIcall().then(async(data) => {
            let pokemon = data.pokemon
            let randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)]
            randomPokeBucket.push(randomPokemon)  // 

            let pokemonvalue =  randomPokeBucket[0]    
            let preSliceURL = pokemonvalue.url.slice(pokemonvalue.url.length - 10)
            
            let cleanid = preSliceURL.replace(/[/\/a-z]/g, '')
            let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cleanid}.png`
            
            if (nPoke) {
                if (typeof nPoke === 'number' && nPoke < 5 && nPoke % 2 == 0) {
                    console.log("hey weve got a number")

                } else return
            }
            const random = {
                pokemon: randomPokemon,
                image: imageurl
            }
            return { random } 
            // could also do a separate randomizer utility function
        })
    }, [])
}

            // [{…}] RandomPokemon.js(16) mankey
            // [{…}] RandomPokemon.js(16) geodude
            // for some reason: .log(randomPokemon) returns 2 console inputs for 2 successfully grabbed and different random pokeapi value-objects.
            // when i push: pokeBucket.push(randomPokemon) only 1 of the 2 random values is entered into the array. 

            // ********* ****************** ********* ********* ********* ********* Nevermind: useEffect with empty-dependencyArray yields us one value.

                   // let [randomPokemon] = pokemon[Math.floor(Math.random() * pokemon.length)]
            // randomPokemon.forEach( (r) => {      // not iterable yet throwing 2 values back. I tried to set declaration of: randomPokemon as an array to see if we can pinpoint the reason behind returning more than 1.
            //     console.log('r')
            //     console.log(r)
            // })
        
            // pokemonvalue
// RandomPokemon.js:16 {name: 'abra', url: 'https://pokeapi.co/api/v2/pokemon/63/'}
// RandomPokemon.js:15 pokemonvalue
// RandomPokemon.js:16 {name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/'}



// while finishing this functionality; the decision to allow randomPokemon() function to accept a specified, to-be-data-validated-as-int-parameter that does all the pokemon retrieving on this side.
// since i'd like 3 random Pokemon to be retrieved. I'd rather handle all of the randomPokemon computations on this side rather than run a: [return 1 pokemon] function 3 times on the pokemonBar.js side.

// while finishing this up, i noticed this code that explaining why we are returning 2 different random values when the code seems to be asking for one. 
//  2RandomPokemon.js:22 hey weve got a number      // actual terminal output from the component that is importing this function .