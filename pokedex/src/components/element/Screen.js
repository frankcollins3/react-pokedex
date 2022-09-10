import APIcall from '../utility/pokeAPI'

import React, { useEffect, useState, useRef, createRef } from 'react';

function Screen() {
    const [pokemon, setPokemon] = useState([])



    let pokeRefs = [];
    // let pokeRefs = [createRef(), createRef()]
    useEffect( () => {
        APIcall().then(async(pokedata) => {
            console.log('pokedata')
            console.log(pokedata)
            await setPokemon(pokedata.pokemon)
        })
    }, [])

    const checkRefs = () => {
        // console.log('pokemon')
        // console.log(pokemon)
    }

    return (
        <div className="Screen-Wrapper">
            <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
            <button onClick={checkRefs} className="navBall" id="Greatball"> </button>

        <div className="Screen Column-Between">
               {pokemon.map( (pokemap, index) => {
                return (
                    <div key={index+1}  className="Map-Parent">
                    <li className="Poke-Card" key={index}> {pokemap.name} </li>                    
                    </div>
                    )
                })}  
        </div>               {/* screen end  */}

        </div>
    )
}
export default Screen