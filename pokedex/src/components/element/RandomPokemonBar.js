import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'
import { $ } from 'react-jquery-plugin'; 
import GiveAndGet from '../utility/GiveAndGetData'
import EvolutionChain from '../utility/Evolution'
// console.log('GiveAndGet')
// console.log(GiveAndGet)
let id = [1, 4, 7]
let randomid = id[Math.floor(Math.random()*id.length)]

// EvolutionChain(randomid)


// EvolutionChain('charizard')


let i = 0;
// jquery
let BarCont = $('.Poke-Bar')

let evolvebucket = [];                 // i like all lowercase variable declarations now because it can give a visual separator from Components or imported utility functions like EvolutionChain




function Bar(props) {
        
    for (i; i < props.randomPokemon; i++) {
        // let button = document.createElement('div').addClass('PokeDisplay')
    }

    let looplength = props.randomPokemon.length        
    useEffect(() => {
        (async () => {
            evolvebucket = await (EvolutionChain(randomid))    
            evolvebucket.map( (map) => {
                // console.log('map')
                // console.log(map)
            })        
        })()

        const randomizer2 = () => {
            APIcall('random', null, null, 3).then(async(data) => {      // 3 hours. this now works for 1 or 3
                    await props.setRandomPokemon(data)
            })        
            // a little weird. if you enter 3 it returns 4 pokemon.     (4) [{…}, {…}, {…}, {…}] !! ha. changed 3 to 2 and was rejected by condition [% 2 !== 0] not being met. I took out condition and now it (2) creates 3 randomPokemon. 
        }
        randomizer2()

        checkTypes()
    }, [])  

    let checkAgain = () => { console.log(evolvebucket }
    
    evolvebucket.map( (map) => {
        console.log('map')
    })
    
    let pokemap = props.randomPokemon.map( (mapitem, idx) => {
        return ( 
        <img 
        className="Poke-Bar-Pokemon" 
        key={idx}
        src={mapitem.img}
        >  
        </img> 
        )
    })

    return (
        <>
        <div className={pokemap.length === 3 ? "Row-Between" : "Row-Center"}> </div>
        <button onClick={checkAgain} type="button" className="navBall" id="Ultraball"> </button>
            <ul className={pokemap.length === 3 ? "Row-Between" : "Row-Center"}>
            {/* {randomPokeStateMap} */}
             {evolvebucket} || {pokemap}
            {/* {evolvebucket} {pokemap} */}
            </ul>
        {/* <button onClick={checkState} type="button" className="navBall" id="Greatball"> </button> */}
        </>     
    )
}
export default Bar


//     // console.log('useeffect in the randomPokemonBar')
    //     const randomizer = async () => {
    //         ReturnRandomPoke(1).then(async(data) => {
    //             ReturnRandomPoke(2).then(async(info) => {              
    //                 ReturnRandomPoke(3).then(async(poke) => {                  
    //                     await props.setRandomPokemon([data, info, poke])      // heaven stairway || farewell good stairwell. 
    //                 })
    //             })
    //         })
    //     }
        // randomizer()
