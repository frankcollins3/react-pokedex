// this utility function is an exercise in wondering if its against practices/unidirectional-flow to: 1) send props into an exportable-to-be-invoked-function 2)export that function and use with outside props. It seems an ideal utility function would be more of a pure function?
import { useState, useEffect } from 'react';
import APIcall from './pokeAPI'
import Axios from 'axios'


console.log("hello from randomPokemon.js")
let axiosurl = `https://pokeapi.co/api/v2/pokemon?limit=151`
let i = 0;

export default async function ReturnRandomPoke(nPoke) {    
    let response = await Axios.get(axiosurl)
    let results = response.data.results
    APIcall().then( (data) => console.log(data))
    console.log('nPoke')
    console.log(nPoke)
    const bucketOfRandoms = [] || new Array()

    if (typeof nPoke === 'number' && nPoke <= 5 && nPoke % 0 !== 2) {
        console.log('hey weve got a number')
        for (i; i < nPoke; i++) {
            let randomPokemon = results[Math.floor(Math.random()*results.length)]
            console.log('randomPokemon')
            console.log(randomPokemon)
            let pokename = randomPokemon.name
            let pokeurl = randomPokemon.url
            let url = randomPokemon.url

            let preSliceURL = url.slice(url.length-5)            
            let cleanid = preSliceURL.replace(/[/\/a-z]/g, '')
            let imageurl = `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cleanid}.png`
            
            const random = {
                name: randomPokemon.name,
                pokeid: cleanid,
                img: imageurl
            }
            bucketOfRandoms.push(random)
            if (bucketOfRandoms.length) {
                console.log("atleast were in the .length condition")
                const resetRandom = async () => {
                    randomPokemon = ''
                    randomPokemon = results[Math.floor(Math.random()*results.length)]

                    let rangePokemon = results.forEach((pokeresult) => {
                        let idOneLine = pokeresult.url.slice(pokeresult.url.slice-10).replace(/[/\/a-z 2]/g, '')
                        console.log('idOneLine')
                        console.log(idOneLine)
                        // if ()
                        // if (pokeresult.url.slice(pokeresult.url.slice-10).replace(/[/\/a-z 2]/g, ''))
                    })

                    let newPokemonCall = await Axios.get(axiosurl)
                    let newResults = newPokemonCall.data.results
                    let newRandomPokemon = newResults[Math.floor(Math.random()*newResults.length)]  // newResults or results probably might not matter at this point. 
                    
          
                    bucketOfRandoms.push(randomPokemon, newRandomPokemon)       // the darnest problem of our randomizers only grabbing pokemon within like < 20 ids. Not the end of the world, in fact, kind of themely, as if you are just beginning the intro. Would be nice to fix. 
                    

                }
                resetRandom()
            }
          
            return bucketOfRandoms

        }

    }
}



