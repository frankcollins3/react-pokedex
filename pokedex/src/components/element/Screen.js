import APIcall from '../utility/pokeAPI'

import React, { useEffect, useState, useRef, createRef } from 'react';
import { $ } from 'react-jquery-plugin';

console.log({ $ })


function Screen() {
    // state and jquery functions
    const [pokemon, setPokemon] = useState([])
    const [refLength, setRefLength] = useState()

    const [preInputValue, setPreInputValue] = useState([])
    const [isInputHovered, setIsInputHovered] = useState('false')
    const [dexClick, setDexClick] = useState('false')

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
        console.log('in the checkRefs function')
        pokeRefs.current.map( (el, i) => {
            console.log('el')
            console.log(el)
        })
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

    $('.Close-Pokedex').click((event)=> {
        // $(event.target).css('border', '20px solid orange');
        $(event.target).addClass('Pokedex-Animate')
        // $(event.target).css('background-image', "url('/img/openPokeDex.png')")
        console.log($(event.target))
        let classbucket = $(event.target)[0].attributes.class.textContent
        



    })


    if (dexClick == 'true') {
    return (
        <>

            <div className="Screen-Wrapper">
            <div className="Input-Wrapper Column-Center">                
            <input id={'Screen-Input'} onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text"/>
            <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label>
            </div>

        <div className="Screen Column-Between">
               <ul>
               {pokeRefs.current.map((el, i) =>
                    <div key={`key${i}`} className="Map-Parent">
                        <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        />
                        {/* <p key={i}> {el.name} </p>  took coming up an on-ramp to see why this wouldn't work. The original pokemon reference is gone.              */}
                    </div>
                    )}
                    </ul>      
        </div>               {/* screen end  */}
        </div>
                    </>
    )
}       // if (dexClick  == 'true') { end }
else { 
    return (
            <div className="Close-Pokedex"> </div>

            
    )
}
}       // function Screen() { end }
export default Screen


{/* <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
<button onClick={updateValue} className="navBall" id="Greatball"> </button>
<button onClick={checkRefs} className="navBall" id="Ultraball"> </button>  */}
