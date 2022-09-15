import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'

let i = 0;

console.log("hey from randompokemon bar.js")    
function Bar(props) {
    console.log('props')
    console.log(props)
    // 
    let looplength = props.randomPokemon.length        
    
    // doesnt like accepting [state, setState] as props and trying to use setState. warning:
    // react_devtools_backend.js:4026 Warning: Cannot update a component (`BootstrapScreen`) while rendering a different component (`Bar`). To locate the bad setState() call inside `Bar`, follow the stack trace as described in
    useEffect( () => {
        ReturnRandomPoke(1).then(async(data) => {
            ReturnRandomPoke(2).then(async(info) => {              
                ReturnRandomPoke(3).then(async(poke) => {                  
                    props.setRandomPokemon([data, info, poke])      // heaven stairway
                })
            })

        })
        // for (i = 0; i < 3; i++) {
        //     ReturnRandomPoke(3).then(async (data) => {            
        //         await props.setRandomPokemon(data)
        //     })
        // }
    }, []) // canceling-out-dependency array.
    

    const checkState = async () => {
        console.log('props.randomPokemon')
        console.log(props.randomPokemon)
    }
    return (
        <>
        <div className="Poke-Bar Row-Center"> </div>
            <ul className="Row-Center">
            {/* {randomPokeStateMap} */}
            </ul>
        <button onClick={checkState} type="button" className="navBall" id="Greatball"> </button>
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
