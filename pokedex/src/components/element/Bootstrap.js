import APIcall from '../utility/pokeAPI'
import React, { useEffect, useState, useRef, createRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import { $ } from 'react-jquery-plugin';

console.log('Alert')
console.log(Alert)


console.log({ $ })


function BootstrapScreen() {




    // state and jquery functions
    const [pokemon, setPokemon] = useState([])
    const [refLength, setRefLength] = useState()

    const [preInputValue, setPreInputValue] = useState([])
    const [isInputHovered, setIsInputHovered] = useState('false')
    const [pokedexClick, setPokedexClick] = useState('false')
    const [pokeBgState, setPokeBgState] = useState('false')
    const [inputHide, setInputHide] = useState('false')
    const [animateHappened, setAnimateHappened] = useState('false')
    const [hoverCount, setHoverCount] = useState(0)

    let pokeRefs = useRef([]);      

    // ******** JQ/DOM referenec
    const Pokedex = $('.Pokedex')


  

    // useEffect
    useEffect( () => {
        let pokedexObj = createRef()
        let pokedex = $(pokedexObj)
        console.log('pokedex')
        console.log(pokedex)

        APIcall().then(async(pokedata) => {        
            await setPokemon(pokedata.pokemon)
        })
    }, [])

    

    const checkRefs = () => {              
        console.log('pokeBgState')
        console.log(pokeBgState)
        console.log('animateHappened')
        console.log(animateHappened)
    }
    

    const updateValue = ( {target: {value}}) => {   // didn't know you could set {value} object as value for key value pair.        if (value) console.log(value)
        setRefLength({value}) // this is basically event.target.value
    }
    // const inputEnter = () => setIsInputHovered(true)
    const inputEnter = async (event) => { 
        await setHoverCount(hoverCount + 1)
        if (isInputHovered == 'false' && hoverCount < 2) await setIsInputHovered('true') 
        // $(event.target).hide()
    }
    const inputExit = async (event) => 
    { 
        if (isInputHovered == 'true' && hoverCount < 2) setIsInputHovered('false')     
        await setPreInputValue('')
        $()
        return
    }
    // have to get these two strings connected.
    const handleInput = async ({ target: {value}}) => 
    {      
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
            return 
        }    
            // if its true, return/stop/get-out.
        // else return 
    }
    const pokedexBg = async () => await setPokeBgState('true');
    const removeClosePokedexClass = () => $('.Pokedex').removeClass('Close-Pokedex')

    const checkconsole1 = () => console.log("lets see")
    const checkconsole2 = () => console.log("lets see some more")

    const pokedexClickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.attributes.class.nodeValue)
        let clickEventClass = e.target.attributes.class.nodeValue
        console.log('clickEventClass')
        console.log(clickEventClass)
        let objClassNames = clickEventClass.split('x ')     
        objClassNames.forEach(async (objectClass) => {
            console.log('objectClass')
            console.log(objectClass)
            if (objectClass.includes('Close') || objectClass === 'Close') {
                console.log('it sure does')
                $(e.target).addClass('Pokedex-Animate')

                // setTimeout([pokedexBg(), checkconsole1(), checkconsole2()] , 4000) // for some reaosn the 
                // [setTimeout(pokedexBg(), 4000), setTimeout(checkconsole1(), 4000), setTimeout(checkconsole2(), 4000)]
                setTimeout( () => {
                    pokedexBg()
                    checkconsole1()
                    checkconsole2()
                    $('.Pokedex').addClass('Pokedex-Animate')
                    $('.Pokedex').removeClass('Close-Pokedex')
                }, 4000)

                // setTimeout(removeClosePokedexClass, 5000)
                // setTimeout(await setPokeBgState('true'), 4000)
                // await setPokeBgState('true');
                // $(e.target).removeClass('Close-Pokedex')
                // $(e.target).addClass('Open-Pokedex')
            }
        })
        // console.log([objClassNames[0]])
        // console.log([objClassNames[1]])

    }


    // $('.Pokedex').click(async function pokedexClick(event) {  
    //     console.log("clicking on the pokedex")
    //     console.log($(event.target)) 
    //     $(event.target).on('click', () => {
    //         console.log("this is a skip function and would only be triggered if you clicked during the click")
    //          setPokeBgState('true')
    //         //  $(event.target).removeClass('Open-Pokedex')
    //         //  $(event.target).removeClass('Close-Pokedex')
    //     }) 
    //     await setAnimateHappened('true')

    //     // $(event.target).hide()     
    //     let currentTargetClass = event.currentTarget.attributes.class.nodeValue 
    //    if (animateHappened == 'false') $(event.target).addClass('Pokedex-Animate')
    // // even creating boolean-like state to check true/false is applying this $(e.tgt)animationClass to the input, .Input-Wrapper,  .Screen, 
    // if (currentTargetClass.includes('Open-Pokedex')) {
    //         setTimeout($(event.target).removeClass("Close-Pokedex"), 3000);
    //         setPokedexClick('true')
    //         // $(event.target).removeClass("Closed-Pokedex")
    //         // fun little error without $(event.target).remove Class(ClosePokedex) this code repeats over and over. 
    //         // our if/includes block of code, if below the .addClass('Pokedex-Animate') makes the encased cons.log() run 4x. 
    //     }
    //     // if (currentTargetClass.includes('Close')) console.log("yeah and????")
    //     if (currentTargetClass.includes('Close')) {
    //         setTimeout( () => {
    //             console.log("yeah and?")
    //             setPokeBgState('true')
    //             console.log("hey were down over here")
    //             console.log($(event.target)) 
                           
    //             // $(event.target).unbind(pokedexClick)

    //         }, 4000)          
    //     }             
    // })
    
    if (pokedexClick == 'true') {
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
} 
else { 
    return (
        <>  
            <div onClick={pokedexClickHandler}className={pokeBgState == 'false' ? "Pokedex Close-Pokedex" :  "Pokedex Open-Pokedex" }> </div>      
            <input id={'Screen-Input'} onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text"/>
            <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label>
     

            <button onClick={checkRefs} className="navBall" id="Ultraball"> </button>  
            {/* <button onClick={APIcall} className="navBall" id="Pokeball"> </button>      
            <button onClick={updateValue} className="navBall" id="Greatball"> </button> */}
           
            {/* <p> hey  </p> */}
        </>    
    )
}
}       // function Screen() { end }
export default BootstrapScreen


