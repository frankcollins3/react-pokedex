import APIcall from '../utility/pokeAPI'
import React, { useEffect, useState, useRef, createRef } from 'react';
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'
import { $ } from 'react-jquery-plugin'; 
// import InputMap from '../utility/MapMaker' works additively, but not subtractively. May bookmark to save and work out. 
import Bar from './RandomPokemonBar'
import ClassAction from '../utility/ClassAction'
import TrueFalseTool from '../utility/BooleanStateTool'
import EvolutionChain from '../utility/Evolution'
import GetImage from '../utility/ImageTool'
import myCSS from '../utility/CSStool'


let id = [1, 4, 7]
let randomid = id[Math.floor(Math.random()*id.length)]





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
    const [mainWrapHover, setMainWrapHover] = useState('false')

    const [evolvePokemon, setEvolvePokemon] = useState([])


    const [observerTarget, setObserverTarget] = useState([])    // try with array or string.
    const [hoverImage, setHoverImage] = useState('')
    // const observerRef = useRef(observerTarget)

    const [observerEntryState, setObserverEntryState] = useState([])
    const [randomPokemon, setRandomPokemon] = useState([])

    

    const [ghost, setGhost] = useState('false')

    

    let pokeRefs = useRef([]);      

    // ******** JQ/DOM referenec
    const Pokedex = $('.Pokedex')
    const pokedexText = $('.Pokedex-Text')
    const hCont = $('.Header-Container')
    const jqInput = $('#Screen-Input')
    const hiddenTag = $('.Invisible-P')
    const bootButton = $('.Bootstrap-Screen-Btn')
    
    let jqObserver = new IntersectionObserver((entries) => {
        entries.forEach( (entry) => {            
            if (entry.isIntersecting) {
        
                let siblingButton = $(entry.target).siblings()[0]                // console.log($(entry.target).siblings()) // had an error first didn't use $(entry.target)
                
                setObserverEntryState($(siblingButton)) // this would be our work around but I'd like to move onto a new project and we don't need this to be successful in our efforts of adding and removing animate specifically to                 
                
                hiddenTag.click( (event) => {
                    ClassAction('add', $(observerEntryState), 'Pokeball-Animate')                    
                })
                $(entry.target).on('mouseenter', (event) => {
                    // myCSS($(event.tar))
                    // myCSS($(event.target), 'border', '10px solid goldenrod')
                    // $(entry.target)
                })
                    

            } else {
                setTimeout(setHoverImage(''), 2000)
                setObserverEntryState([])   // this allows our state to be continually reset in the above if block where we set the siblingButton, targeted from $(entry.target).siblings()
                // ClassAction('remove', entry.target.siblings()[0], 'Pokeball-Animate')        we have lost reference of our jqObject
                entry.target.style.border = '';
            }
        })
    }, {threshold: 0.9})
    let allCards = document.querySelectorAll('.Poke-Card-Img')
    // let allMapParents = document.querySelectorAll('.Map-Parent')

    allCards.forEach( (card) => {
        // jqObserver.observe(card)
        jqObserver.observe(card)
    })

    // Jq backup DOM functionality
    const hideThis = (elem) => $(elem).hide();
    hCont.ready((event)=> $(event.target).children().addClass("Row-Center"));
    Pokedex.dblclick( () => setPokedexClick('true'))

    // useEffect
    useEffect( () => {

        (async() => {
            let squirtle = await APIcall('specify', 'squirtle')
            let bulbasaur = await APIcall('specify', 'bulbasaur')
            let charmander = await APIcall('specify', 'charmander')

            let squirtleIMG = squirtle[1].image
            let bulbasaurIMG = bulbasaur[1].image
            let charmIMG = charmander[1].image
            let imageArray = [squirtleIMG, bulbasaurIMG, charmIMG]
            await setEvolvePokemon(imageArray)
            // await console.log(imageArray)
        })()


        let pokedexObj = createRef()
        let pokedex = $(pokedexObj)    
        APIcall('all').then(async(pokedata) => {        
            await setPokemon(pokedata.pokemon)
        })
    }, [])

    const checkRefs = () => {              
        // workflow function: uncomment the ultraball onClick={checkRefs} and fire away: adding any relevant-to-the-then-task console.logs for quick checking. especially in state
    }
    

    const updateValue = ( {target: {value}}) => {   
        setRefLength({value}) // this is basically event.target.value
    }
    const inputEnter = async (event) => { 
        await setHoverCount(hoverCount + 1)
        if (isInputHovered == 'false' && hoverCount < 2) await setIsInputHovered('true') 
    }
    const inputExit = async (event) => 
    {                                   
        if (isInputHovered == 'true' && hoverCount < 2) setIsInputHovered('false')     
        await setPreInputValue('')  
        await setRefLength([])      
        return
    }

    const checkAgain = () => {
        console.log('hoverImage')
        console.log(hoverImage)
        console.log(hoverImage.length)
    }

    const handleWrapHover = () => setMainWrapHover("true")

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
                setTimeout( () => {
                    pokedexBg()      
                    setInputHide('true')              
                    
                }, 4000)                       
            } else if (objectClass.includes('Open') || objectClass === 'Open') {
                setPokedexClick('true')                
                $('*').removeClass('Pokedex-Animate')
            }
        })
        
    }

    

    const pokedexIconHover = (event) => {        
        let classValues = event.target.attributes.class.nodeValue
        let splitClassVals = classValues.split(' ')     
        splitClassVals.forEach( (v) => {             // v as in value            
            if (v.includes('Close'))    setPokedexHover('true') // this feels very thinking-in-code like.
            if (v.includes('Open'))    setPokedexHover('false')

        })
    }

    let hoverHandler = async (event) => {
        
    }

    let mouseLeaveHandler = async ( event) => {
        // let imageSrc = event.target.src 
        // console.log('imageSrc')
        // console.log(imageSrc)
        // let regexID = imageSrc.slice(imageSrc.length-5).replace(/[/\/.a-z]/g, '')
        // let backImage = await GetImage(regexID, 'back') 
        // let frontImage = await GetImage(regexID, 'front')
        // await $(event.target).attr('src', frontImage)
    }

    let imageClickHandler = async (event) => {
        console.log('event')
        console.log(event)
        let target = event.target
        let classList = target.classList
        let pokeIDclass = classList[1].replace(/[a-z]/g, '')+1 // type inference changed this to a string so blastoise which is poke#9 came out to 81. '8 + 1'
        console.log('pokeIDclass')
        console.log(pokeIDclass)

        // let imageSrc = event.target.src 
        // let regexID = imageSrc.slice(imageSrc.length-5).replace(/[/\/.a-z]/g, '')
        // let backImage = await GetImage(regexID, 'back') 
        // let frontImage = await GetImage(regexID, 'front')
        // await $(event.target).attr('src', backImage)
        // imageSrc = ''
        // regexID = ''
        // backImage = ''
        // frontImage = ''
        // const resetTarget = () => $(event.target).attr('src', frontImage ) // this will either make the image nothing or set it back to its inline style.
        // await setTimeout(resetTarget, 2000)
    }
    

    if (pokedexClick == 'true') {
    return (
        <>
            <div className="Screen-Wrapper">
            <div className="Input-Wrapper Column-Center">                
            </div>
            <button onClick={checkAgain} type="button" className="navBall" id="Greatball"> </button>
        <div className="Screen Column-Between">
               <ul id="Render-Ul">
                

                {pokeRefs.current.map((el, i) =>
                        <div key={`key${i}`} className="Map-Parent Column-Center">
                        {/* <Card> */}
                        <img 
                        onMouseEnter={hoverHandler}
                        onMouseLeave={mouseLeaveHandler}
                        onClick={imageClickHandler}
                        className={`Poke-Card-Img id${i}`}
                        // className="Poke-Card-Img"
                        src={hoverImage.length > 5 ? hoverImage : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        // src={setHoverImage.length > 5 ? hoverImage : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
                        />
                        <Button 
                        size="lg"
                        className="Bootstrap-Screen-Btn" 
                        variant={'outline-primary'}
                        onMouseEnter={null}
                        > 
                        </Button>
                        <p className="Invisible-P"> 'click me' </p>
                        {/* </Card> */}
                     </div>

                                          
                    )}                       
                    </ul>      
                    {/* <InputMap specifiedLength={[refLength, setRefLength]} inputTarget={ {target: jqInput } } /> */}                  
        </div>               {/* screen end  */}
            <div  className="Hidden-Input-Container Row-Center Half-Size">    
                    <div 
                    onMouseEnter={pokedexIconHover}
                    style = {
                        {

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
            <div onMouseEnter={handleWrapHover} className="Main-Wrap Column-Between">
            {/* <div onMouseEnter={TrueFalseTool([mainWrapHover], [setMainWrapHover()], 'true' )} className="Main-Wrap Column-Between"> */}

            <div onClick={pokedexClickHandler}className={pokeBgState == 'false' ? "Pokedex Close-Pokedex" :  "Pokedex Open-Pokedex" }> </div>   

            <Bar randomPokemon={randomPokemon} setRandomPokemon={setRandomPokemon} 
            ghost={ghost} mainWrapHover={mainWrapHover} 
            evolvePokemon={evolvePokemon} setEvolvePokemon={setEvolvePokemon}
            pokedexClick={pokedexClick}
            
            />              
  
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
            <h1 className="Pokedex-Text" style= {{ display: inputHide === 'false' && pokedexClick === 'false' ? 'none' : 'block'}}> Welcome!   </h1>        
            <h1 className="Pokedex-Text" style= {{ display: inputHide === 'false' && pokedexClick === 'false' ? 'none' : 'block'}}>  How many Pokemon  </h1>        
            <h1 className="Pokedex-Text" style= {{ display: inputHide === 'false' && pokedexClick === 'false' ? 'none' : 'block'}}>  Would You like to See?  </h1>        
            {/* <h4 className="Pokedex-Text" style= {{ display: inputHide === 'false' ? 'none' : 'block' }}> would you like to see? </h4>         */}
            </div>
            </div>    
    )
}
}       // function Screen() { end }
export default BootstrapScreen



// await console.log(starterchainevolve)             // [{…}]        confused why this cons.log returns this output below
// 0: {name: 'squirtle', id: 7, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'}
// 1: {name: 'wartortle', id: 8, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'}
// 2: {name: 'blastoise', id: 9, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'}
// await starterchainevolve.map( (mapitem) => console.log(mapitem))   // but when you map it only returns the first value. 
// {name: 'squirtle', id: 7, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'}

// console.log(starterchainevolve[0]) charmander
// console.log(starterchainevolve[1]) undefined
// console.log(starterchainevolve[2]) undefined
