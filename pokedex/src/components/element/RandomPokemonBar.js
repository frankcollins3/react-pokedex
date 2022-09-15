import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'

let i = 0;

console.log("hey from randompokemon bar.js")    
function Bar(props) {
    // 
    let looplength = props.randomPokemon.length        
    
    // doesnt like accepting [state, setState] as props and trying to use setState. warning:
    // react_devtools_backend.js:4026 Warning: Cannot update a component (`BootstrapScreen`) while rendering a different component (`Bar`). To locate the bad setState() call inside `Bar`, follow the stack trace as described in
    useEffect( () => {
        ReturnRandomPoke(3).then(async (data) => {
            // console.log("use effect!")
            // console.log('data')
            // console.log(data)
            await props.setRandomPokemon(data)
        })
    }, []) // canceling-out-dependency array.

    let randomPokeStateMap = props.randomPokemon.map( (pokemapitem, idx) => {
        console.log('pokemapitem')
        console.log(pokemapitem)
        return (
            <div key={`div ${idx}`}>
            <li key={idx}> {pokemapitem.name} </li>
            <p key={`ptag $`}> hey </p>
            </div>
        )
    })

    
    const checkState = async () => {
        console.log('props.randomPokemon check state')        
        await console.log(props.randomPokemon)        
        console.log(props.randomPokemon.length)        
    }


    let createDisplay = document.createElement('div')



    
    return (
        <>
        <div className="Poke-Bar Row-Center"> </div>
        <button onClick={checkState} type="button" className="navBall" id="Greatball"> </button>
            <ul className="Row-Center">
            {randomPokeStateMap}
            </ul>
        {/* {for (i; i < looplength; i++) {
            {createDisplay}
        })} */}
        </>
        // {for (i; i < props.randomPokemon.length)}
        // possible carousel
    )
}
export default Bar
// export default Bar


// made the mistake of .log(props) on /RandomPokemon.js side when this is the component we imported. 
// thought of doing a slot machine / game host wheel where you would see the options to retrieve for pokemon. 
// loading message. 
