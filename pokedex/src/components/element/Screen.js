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
        // let length = cleaninput.length - 1
        let inputstate = cleaninput[`${length}`] || 'please enter a number'
        if (inputstate == 'please enter a number' ) {
            console.log("hey were over here")
            await setPreInputValue('')
            await setPreInputValue(`${inputstate}`)
        } else {
            await setPreInputValue(`${preInputValue} ${inputstate}`)
        }



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
            <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label>
            <button className="navBall"> </button>


            <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
            <button onClick={updateValue} className="navBall" id="Greatball"> </button>
            <button onClick={checkRefs} className="navBall" id="Ultraball"> </button>

        <div className="Screen Column-Between">
               
        </div>               {/* screen end  */}

        </div>
    )
}
export default Screen
