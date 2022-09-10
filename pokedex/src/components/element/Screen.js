import APIcall from '../utility/pokeAPI'

import React, { useEffect, useState, useRef, createRef } from 'react';

function Screen() {
    const [pokemon, setPokemon] = useState([])
    const [refLength, setRefLength] = useState()
    const [isInputHovered, setIsInputHovered] = useState('false')
    const [hoverCount, setHoverCount] = useState(0)



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
        console.log('refLength')
        console.log(refLength)
    }

    const updateValue = ( {target: {value}}) => {   // didn't know you could set {value} object as value for key value pair.
        console.log(`value ${value}`)
        if (value) console.log(value)
        setRefLength(value) // this is basically event.target.value
    }

    // const inputEnter = () => setIsInputHovered(true)
    const inputEnter = async (event) => { 
        await setHoverCount(hoverCount + 1)

        if (isInputHovered == 'false') await setIsInputHovered('true') 
    }
    const inputExit = async (event) => { if (isInputHovered == 'true' && hoverCount < 3) setIsInputHovered('false') }

    const handleInput = async (event) => {        
        let inputval = event.target.value
        let isInputInteger = inputval.replace(/[a-z]/g, '')     // this is escaping/removing all letters/alpha-char. 
        if (isInputInteger.length) setRefLength(isInputInteger) // checking against refLength, which would only pass  if it was a non [a-z] set of numbers/char
        else return // if its true, return/stop/get-out.
    }

    return (
        <div className="Screen-Wrapper">
            <input onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text" value={isInputHovered == 'false'  ? 'How Many Pokemon?' : '' }/>
            {/* <input onMouseEnter={inputEnter}onChange={inputEnter}type="text" value={isInputHovered == 'false' ? 'how many pokemon?' : '' }/> */}

            <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
            <button onClick={updateValue} className="navBall" id="Greatball"> </button>
            <button onClick={checkRefs} className="navBall" id="Ultraball"> </button>

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
