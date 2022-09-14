import APIcall from '../utility/pokeAPI'
import React, { useEffect, useState, useRef, createRef } from 'react';
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'
// import InputMap from '../utility/MapMaker'
import ClassAction from '../utility/ClassAction'
import { $ } from 'react-jquery-plugin'; 


// import {Alert, Button} from 'react-bootstrap/Alert';





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
    const [pokedexHover, setPokedexHover] = useState('false')

    const [observerTarget, setObserverTarget] = useState([])    // try with array or string.

    const [observerEntryState, setObserverEntryState] = useState([])


    let pokeRefs = useRef([]);      

    // ******** JQ/DOM referenec
    const Pokedex = $('.Pokedex')
    const pokedexText = $('.Pokedex-Text')
    const hCont = $('.Header-Container')
    const jqInput = $('#Screen-Input')
    const hiddenTag = $('.Invisible-P')
    const bootButton = $('.Bootstrap-Screen-Btn')

    // ***** ***** ***** ***

    // hiddenTag.click( (event) => {
        //     ClassAction('add', bootButton, 'Pokeball-Animate')
        // })

    // ***** ***** ***** ***

    // observer intersection init. i'm using react & jq observer instead of useRef && inView. I ended up using createRef() and looping instead of pokemonState.map()'ing.     // i was able to set it up with a container but not for the map data 
    //  react amplifies why its easy to see why people just about demand an answer of why you're using jquery. DOM-in-node-ejs kind of makes sense to reaccess poke api without browser refresh. react and unidirectional data flow and things being concrete in react with inline styling, ternary-ops etc. This example is a very smiple data api access and img src change upon behavior from /front_default || /shiny_front
    let jqObserver = new IntersectionObserver((entries) => {
        // $(entries).each( (entry) => {
        //     console.info(`${entry} && ${entries.isIntersecting}`)
        // })
        entries.forEach( (entry) => {

            // console.log(entry)       // this will show .log() for every single element that could be observed, not under observation. 
            // if (entry.intersectionRatio > 0) {
            if (entry.isIntersecting) {

                // console.log($(entry.target).siblings()) // had an error first didn't use $(entry.target)
                let siblingButton = $(entry.target).siblings()[0]

                setObserverEntryState($(siblingButton)) // this would be our work around but I'd like to move onto a new project and we don't need this to be successful in our efforts of adding and removing animate specifically to 
                
                // $(siblingOfSiblings).css('border-radius', '50%')
                // $(siblingButton).css('border', '2px solid hotpink')     // o.O again forgot the $(siblingButton).css() v.s. siblingButton.css()
                hiddenTag.click( (event) => {
                    ClassAction('add', $(observerEntryState), 'Pokeball-Animate')
                    // ClassAction('add', $(siblingButton), 'Pokeball-Animate')
                })

                // console.log(entry.target)
                // console.log(entry.target.currentSrc)
                // console.log(entry.target.currentSrc.replace(/[0-9]/g, ''))  // cant do this in the regular pokeapi url because of /api/v2/ the number 2. Can do a more sophisticated regex. 

                entry.target.style.border = '5px solid hotpink';

                // setObserverTarget(entries.)
            } else {
                setObserverEntryState([])
                // ClassAction('remove', entry.target.siblings()[0], 'Pokeball-Animate')        we have lost reference of our jqObject

                // jqObserver.unobserve(entry.target)
                // jqObserver.unobserve(entry.target)
                entry.target.style.border = '';
            }
        })

        // console.log('entries')
        // console.log(entries)

    }, {threshold: 0.9})

    // jqObserver.observe($('.Poke-Card-Img'))

    // console.log('document')
    // console.log(document)
    let allCards = document.querySelectorAll('.Poke-Card-Img')

    allCards.forEach( (card) => {
        jqObserver.observe(card)
    })

    // Jq backup DOM functionality
    const hideThis = (elem) => $(elem).hide();
    hCont.ready((event)=> $(event.target).children().addClass("Row-Center"));


    // useEffect
    useEffect( () => {
        let pokedexObj = createRef()
        let pokedex = $(pokedexObj)
        

        APIcall().then(async(pokedata) => {        
            await setPokemon(pokedata.pokemon)
        })
    }, [])

    

    const checkRefs = () => {              
        // workflow function: uncomment the ultraball onClick={checkRefs} and fire away: adding any relevant-to-the-then-task console.logs for quick checking. especially in state
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
        await setRefLength([])      
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
        let inputstate = cleaninput[`${length}`] || 'please enter a number'
        if (inputstate == 'please enter a number' ) {
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
        }            
    }
    const pokedexBg = async () => await setPokeBgState('true');
    const removeClosePokedexClass = () => $('.Pokedex').removeClass('Close-Pokedex')

    const hideinput = (event) => $(event.target).hide() || hideThis($(event.target))

    const pokedexClickHandler = (e) => {
        let clickEventClass = e.target.attributes.class.nodeValue
        let objClassNames = clickEventClass.split('x ')           
        objClassNames.forEach(async (objectClass) => {
            if (objectClass.includes('Close') || objectClass === 'Close') {
                // hideThis($('#Ultraball'))
                try { if (e.target) $(e.target).addClass('Pokedex-Animate') } catch { console.log('weve got nothing') }
                // setTimeout([pokedexBg(), checkconsole1(), checkconsole2()] , 4000) 
                // [setTimeout(pokedexBg(), 4000), setTimeout(checkconsole1(), 4000), setTimeout(checkconsole2(), 4000)]
                setTimeout( () => {
                    pokedexBg()      
                    setInputHide('true')              
                }, 1000)                       
            } else if (objectClass.includes('Open') || objectClass === 'Open') {
                setPokedexClick('true')                
                $('*').removeClass('Pokedex-Animate')
            }
        })
        
    }
    $('.Pokedex').dblclick( () => setPokedexClick('true'))

    const saveToFakeDbState = () => {
        // console.log("fakeDbState function!!!")
    }

    const pokedexIconHover = (event) => {
        // doing functions this way || $('.Hidden-Input-Container').onMouseEnter( ()=> ) minding jQuery and keeping it out of way as much as possible of react in-line-styles. 
        // I had trouble passing $('jQobject') a jQ object stored as a variable as props. might give it time/research later. but you're probably not supposed to do that either. Using judgment. 
        let classValues = event.target.attributes.class.nodeValue
        let splitClassVals = classValues.split(' ')     
        splitClassVals.forEach( (v) => {             // v as in value            
            if (v.includes('Close'))    setPokedexHover('true') // this feels very thinking-in-code like.
            if (v.includes('Open'))    setPokedexHover('false')

        })
    }

    $('.Bootstrap-Screen-Btn').click( (event) => {
        console.log('click')
    })

    // $('.Invisible-P').on('mouseenter', () => {
    //     console.log("hey were hovering on pointer-events: none")
    // })

    if (pokedexClick == 'true') {
    return (
        <>
            <div className="Screen-Wrapper">
            <div className="Input-Wrapper Column-Center">                
            </div>
        <div className="Screen Column-Between">
               <ul id="Render-Ul">
                {pokeRefs.current.map((el, i) =>
                    //     <div key={`key${i}`} className="Map-Parent Column-Center">
                    //     {/* <Card> */}
                    //     <img 
                    //     className="Poke-Card-Img"
                    //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                    //     />
                    //     <Button 
                    //     className="Bootstrap-Screen-Btn" 
                    //     variant={'outline-primary'}
                    //     onMouseEnter={null}
                    //     > 
                    //     </Button>
                    //     <p className="Invisible-P"> 'click me' </p>
                    //     {/* </Card> */}
                    //  </div>
                    <Card key={`cardkey ${i}`} body="true">
                        <Card.Img     
                        className="Map-Parent"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        variant={'bottom'}
                        />
                    </Card>                        
                    )}                       
                    </ul>      
                    {/* <InputMap specifiedLength={[refLength, setRefLength]} inputTarget={ {target: jqInput } } /> */}                  
        </div>               {/* screen end  */}
            <div  className="Hidden-Input-Container Row-Center Half-Size">                  
                    <div 
                    onMouseEnter={pokedexIconHover}
                    style = {
                        {
                            //  backgroundImage: pokedexHover == 'false' ? 'block' : 'none'
                            //  display: pokedexHover == 'false' ? 'block' : 'none',
                         }
                    }
                    className = {pokedexHover === 'false' ? "Pokedex Close-Pokedex Quarter-Size" : "Open-Pokedex Pokedex Quarter-Size" }                     
                    // className="Pokedex Close-Pokedex Quarter-Size"                     
                    >
                    </div>
                    <input 
                     style = { { display: pokedexHover == 'false' ? "none" : "block" }}
                     id={'Screen-Input'} onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text"
                     />

                    {/* <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label> */}
                        </div>
        </div>
    </>
    )
} 
else  { 
    return (
        <>  
            <div onClick={pokedexClickHandler}className={pokeBgState == 'false' ? "Pokedex Close-Pokedex" :  "Pokedex Open-Pokedex" }> </div>      
            <input 
            style={{ display: inputHide === 'false' ? 'none' : 'block'}}            
            id={'Screen-Input'} 
            onMouseEnter={inputEnter} 
            onMouseLeave={inputExit} 
            onChange={handleInput}
            type="text"
            />
            <label htmlFor={'Screen-Input'}> {preInputValue == 'undefined' ? '' : preInputValue}  </label>    

            <div className="Header-Container Column-Center">    
            <h1 className="Pokedex-Text" style= {{ display: inputHide === 'false' && pokedexClick === 'false' ? 'none' : 'block'}}> How many Pokemon </h1>        
            <h4 className="Pokedex-Text" style= {{ display: inputHide === 'false' ? 'none' : 'block' }}> would you like to see? </h4>        
            </div>
        </>    
    )
}
}       // function Screen() { end }
export default BootstrapScreen
