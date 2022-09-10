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

    const checkRefs = () => {
        console.log('preInputValue')
        console.log(preInputValue)
    }

    const updateValue = ( {target: {value}}) => {   // didn't know you could set {value} object as value for key value pair.
        console.log(`value ${value}`)
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


    // have to get these two strings connected.

    const handleInput = async ({ target: {value}}) => {      
        let inputval = value // event.target.value
        let isInputInteger = value.replace(/[a-z]/g, '')     // this is escaping/removing all letters/alpha-char. 
        const newInput = `${preInputValue} ${inputval}`                
        let cleaninput = newInput.replace(/[\s[a-z]/g, '')
        let length = cleaninput.length - 1
        let inputstate = cleaninput[`${length}`]
        await setPreInputValue(`${preInputValue} ${inputstate}`)

        // console.log('cleaninput BEFORE')
        // console.log(cleaninput)
        // if (cleaninput.length > 1) cleaninput = cleaninput.slice(0, 0)
        // // if (cleaninput.length > 1) console.log(cleaninput.slice(0))
        // console.log('cleaninput after the slice trick')
        // console.log(cleaninput)
        // console.log(cleaninput.length)
        // if (cleaninput.length > 3) cleaninput = 'clean'
        // else  await setPreInputValue(cleaninput)

        // problem:
        // [1] this creates a fun problem in which: 
        // [2] typing '1' then '5' into the input (as if you were typing in 151, the maximum total length onto which our pokemon API could cover. )
        // [3] 1 gets typed in and then when you type in 5: '115' The original "1" which is still a value of the input element is being transferred to the state. 
        // [4] typine in 151: sets the state to 1155. 

        // solution
        // [5] : store cleaninput.length as a value. reference the char.At().. set to length of input -1 (factoring in array-indexing)


// setPreInputValue(preInputValue.toString() + {value}) no/fair-guess ([object Object][object Object][object Object])

        if (isInputInteger.length) { 
        await setRefLength(isInputInteger) 
        pokeRefs.current = pokeRefs.current.splice(0, isInputInteger)    
        for (let i = 0; i < value; i++) {
            pokeRefs.current[i] = pokeRefs.current[i] || createRef()
        }
        }
        else {
            setRefLength('')
            console.log('no integer')
            return 
        }    
            // if its true, return/stop/get-out.
        // else return 
    }

    const keyDownHandler = (event) => {
        console.log('lets see that')

    }
    keyDownHandler()
    
    return (
        <div className="Screen-Wrapper">
            <input id={'Screen-Input'} onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text"/>
            <label htmlFor={'Screen-Input'}> {preInputValue || ''}  </label>
            {/* <input onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text" value={isInputHovered == 'false'  ? 'How Many Pokemon?' :  }/> */}
            <button className="navBall"> </button>
            {/* <input onMouseEnter={inputEnter}onChange={inputEnter}type="text" value={isInputHovered == 'false' ? 'how many pokemon?' : '' }/> */}

            <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
            <button onClick={updateValue} className="navBall" id="Greatball"> </button>
            <button onClick={checkRefs} className="navBall" id="Ultraball"> </button>

        <div className="Screen Column-Between">
               
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
