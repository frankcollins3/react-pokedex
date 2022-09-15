import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'
import { $ } from 'react-jquery-plugin'; 

let i = 0;
// jquery
let BarCont = $('.Poke-Bar')




console.log("hey from randompokemon bar.js")    
function Bar(props) {
    for (i; i < props.randomPokemon; i++) {
        // let button = document.createElement('div').addClass('PokeDisplay')
    }
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
    
    let pokemap = props.randomPokemon.map( (mapitem, idx) => {
        return ( 
        <img 
        className="Poke-Bar-Pokemon" 
        key={idx}
        src={mapitem.img}
        // src={mapitem.img} must be tired. got enthused thinking you could cut off /${cleanid} and replace it with {mapitem.img/${idx}} not the case.
        >  
        </img> 
        )
        // return ( <li className="Poke-Bar-Pokemon" key={idx}> {mapitem.name} </li> )
    })

    const checkState = async () => {
        console.log('props.randomPokemon')
        console.log(props.randomPokemon)
    }

    



    
    return (
        <>
        <div className="Poke-Bar Row-Center"> </div>
            <ul className="Row-Center">
            {/* {randomPokeStateMap} */}
            {pokemap}
            </ul>
        {/* <button onClick={checkState} type="button" className="navBall" id="Greatball"> </button> */}

        </>
     
    )
}
export default Bar
