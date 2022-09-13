import APIcall from '../utility/pokeAPI'
import React, { useEffect, useState, useRef, createRef } from 'react';
import {Alert, Button}  from 'react-bootstrap'; 
// nice error: import { Alert, Button } from 'react-bootstrap/Alert .... 
// (1) didn't know i was still importing from /Alert endpoint from react-bootstrap API. 
// (2) while typing this i notice its so much easier to see these tools as APIs when you would access different elements/features-of-tool from different endpoints. (in this example react-bootstrap/Alert vs not)
// 
import { $ } from 'react-jquery-plugin'; 


// import {Alert, Button} from 'react-bootstrap/Alert';
console.log('Alert')
console.log(Alert)
console.log('Button')
console.log(Button)


console.log('Alert')
console.log(Alert)




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


    // Jq backup DOM functionality
    const hideThis = (elem) => $(elem).hide()

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
    // const hideinput = () => setInputHide('true')
    const hideinput = (event) => $(event.target).hide() || hideThis($(event.target))

    const pokedexClickHandler = (e) => {
        let clickEventClass = e.target.attributes.class.nodeValue
        console.log('clickEventClass')
        console.log(clickEventClass)

        let objClassNames = clickEventClass.split('x ')           
        console.log('objClassNames')
        console.log(objClassNames)

        objClassNames.forEach(async (objectClass) => {
            if (objectClass.includes('Close') || objectClass === 'Close') {
                // hideThis($('#Ultraball'))
                $(e.target).addClass('Pokedex-Animate')
                // setTimeout([pokedexBg(), checkconsole1(), checkconsole2()] , 4000) 
                // [setTimeout(pokedexBg(), 4000), setTimeout(checkconsole1(), 4000), setTimeout(checkconsole2(), 4000)]
                setTimeout( () => {
                    pokedexBg()
)
  
                }, 4000)
                    setTimeout( () => {

                        // [Pokedex.parents().removeClass('Pokedex-Animate'), Pokedex.siblings().removeClass('Pokedex-Animate')]
                    }, 5000)
                    // setTimeout( () => [Pokedex.parents().removeClass('Pokedex-Animate'), Pokedex.siblings().removeClass('Pokedex-Animate')], 5000)

                    // setTimeout([Pokedex.parents().removeClass('Pokedex-Animate'), Pokedex.siblings().removeClass('Pokedex-Animate')], 5000)     
                    // the above code returns an unexpected identifier because it is an array instead of a function, setTimeouts first parameter is a function
                    
                    // setTimeout([Pokedex.parents().removeClass('Pokedex-Animate'), Pokedex.siblings().removeClass('Pokedex-Animate')], 5000)
            } else if (objectClass.includes('Open') || objectClass === 'Open') {
                setPokedexClick('true')
                // $('*').removeClass('Pokedex')
                $('*').removeClass('Pokedex-Animate')

            }
        })

    }
    $('.Pokedex').dblclick( () => setPokedexClick('true'))
    
    if (pokedexClick == 'true' && animateHappened == 'false') {
    return (
        <>
            <div id="Screen-Wrapper-ID" className="Screen-Wrapper">
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
            <input 
            style={{ display: inputHide === 'false' ? 'none' : 'block'}}
            // style={{ border: pokedexClick === 'false' ? '5px dotted hotpink' : '20px solid goldenrod'}}
            // style={{ display: pokedexClick === 'false' ? 'hidden' : 'block'}}
            id={'Screen-Input'} 
            onMouseEnter={inputEnter} 
            onMouseLeave={inputExit} 
            onChange={handleInput}
            type="text"
            />
            <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label>

        </>    
    )
}
}       // function Screen() { end }
export default BootstrapScreen
