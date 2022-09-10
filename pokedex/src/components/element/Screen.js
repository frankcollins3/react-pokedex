import APIcall from '../utility/pokeAPI'

import React, { useEffect, useState, useRef, createRef } from 'react';

function Screen() {

    const [pokemon, setPokemon] = useState([])
    const [refLength, setRefLength] = useState()
    const [preInputValue, setPreInputValue] = useState([])
    const [isInputHovered, setIsInputHovered] = useState('false')
    const [hoverCount, setHoverCount] = useState(0)

    let pokeRefs = useRef([]);      
    // let pokeRefs = [createRef(), createRef()]
    useEffect( () => {
        APIcall().then(async(pokedata) => {
            console.log('pokedata')
            console.log(pokedata)
            await setPokemon(pokedata.pokemon)
        })
    }, [])

    const updateValue = ( {target: {value}}) => {   // didn't know you could set {value} object as value for key value pair.
        if (value) console.log(value)
        setRefLength({value}) // this is basically event.target.value
    }

    // const inputEnter = () => setIsInputHovered(true)
    const inputEnter = async (event) => { 
        await setHoverCount(hoverCount + 1)
        if (isInputHovered == 'false' && hoverCount < 2) await setIsInputHovered('true') 
    }
    const inputExit = async (event) => { 
        if (isInputHovered == 'true' && hoverCount < 2) setIsInputHovered('false')     
        await setPreInputValue('')
        return    
    }

    const handleInput = async ({ target: {value}}) => {      
        let inputval = value // event.target.value
        let isInputInteger = value.replace(/[a-z]/g, '')     // this is escaping/removing all letters/alpha-char. 
        const newInput = `${preInputValue} ${inputval}`                       
        let cleaninput = newInput.replace(/[\s[a-z]/g, '') 
        let length = cleaninput.length - 1
        // let length = cleaninput.length - 1
        let inputstate = cleaninput[`${length}`] || 'please enter a number'
        if (inputstate == 'please enter a number' ) {
            console.log("hey were over here")
            await setPreInputValue('')
            await setPreInputValue(`${inputstate}`)
        } else {
            await setPreInputValue(`${preInputValue} ${inputstate}`)
        }

        if (isInputInteger.length) { 
        await setRefLength(isInputInteger) 
        pokeRefs.current = pokeRefs.current.splice(0, isInputInteger)    
        for (let i = 0; i < value; i++) {
            pokeRefs.current[i] = pokeRefs.current[i] || createRef()
        }
        }
        else {
            setRefLength('')
            return 
        }}
    
    return (
        <div className="Screen-Wrapper">
            <div className="Input-Wrapper Column-Center">                
            <input id={'Screen-Input'} onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text"/>
            <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label>
            </div>

             <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
            <button onClick={updateValue} className="navBall" id="Greatball"> </button>
            <button onClick={checkRefs} className="navBall" id="Ultraball"> </button> 

        <div className="Screen Column-Between">
               <ul>
               {pokeRefs.current.map((el, i) =>
                    <div key={`key${i}`} className="Map-Parent">
                        <p key={i}> {i + 1}</p>
                        <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        />
                    </div>
                    )}
                    </ul>      
        </div>               {/* screen end  */}

        </div>
    )
}
export default Screen


// 
{/* {pokemon.map( (pokemap, index) => {
                return (
                    <div key={index+1}  className="Map-Parent">
                    <li className="Poke-Card" key={index}> {pokemap.name} </li>                    
                    </div>
                    )
                })}   */}


            {/* <input onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text" value={isInputHovered == 'false'  ? 'How Many Pokemon?' :  }/> */}
            {/* <input onMouseEnter={inputEnter}onChange={inputEnter}type="text" value={isInputHovered == 'false' ? 'how many pokemon?' : '' }/> */}
