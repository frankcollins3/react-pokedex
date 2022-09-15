import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'

ReturnRandomPoke(3).then( (data) => {
    
})

console.log("hey from randompokemon bar.js")    
function Bar(props) {
    console.log('props')
    console.log(props)
            
    
    // doesnt like accepting [state, setState] as props and trying to use setState. warning:
    // react_devtools_backend.js:4026 Warning: Cannot update a component (`BootstrapScreen`) while rendering a different component (`Bar`). To locate the bad setState() call inside `Bar`, follow the stack trace as described in
    
    const changeState = async () => {
        console.log("lets change the state")
        // await barSetRandomPokemon('sure why not', 'yes', 'yeah')
        props.setRandomPokemon('hey')
        
    }
    const checkState = async () => {
        console.log('check state')
        console.log('randomPokemon')
        console.log(props.randomPokemon)
        
    }
    const doEmBoth = async () => {
        console.log('doemboth function')
        await changeState()
    }
    
    return (
        <div className="Poke-Bar Row-Center"> 
                <h1> hey </h1>
                <button onClick={doEmBoth} className="navBall" id="Greatball"> </button>
        </div>
    )
}
export default Bar
// export default Bar


// made the mistake of .log(props) on /RandomPokemon.js side when this is the component we imported. 
// thought of doing a slot machine / game host wheel where you would see the options to retrieve for pokemon. 
// loading message. 