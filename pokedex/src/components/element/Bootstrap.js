import APIcall from '../utility/pokeAPI'
import React, { useEffect, useState, useRef, createRef } from 'react';
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'
import { $ } from 'react-jquery-plugin'; 
// components
// import InputMap from '../utility/MapMaker' works additively, but not subtractively. May bookmark to save and work out. 
import Bar from './RandomPokemonBar'
import Axios from 'axios'
// utility functions
import ClassAction from '../utility/ClassAction'
import TrueFalseTool from '../utility/BooleanStateTool'
import EvolutionChain from '../utility/Evolution'
import GetImage from '../utility/ImageTool'
import toggleHideShow from '../utility/hideShow'
import myCSS from '../utility/CSStool'
import TextTool from '../utility/TextTool'
import attrTool from '../utility/attrTool'
import animate from '../utility/animationTool'
import EventTool from '../utility/EventTool'
import CleanUrl from '../utility/CleanUrlTool'
import {Container} from '../styles/Container.styled'
import Watch from '../utility/TimerTool'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

let id = [1, 4, 7]
let randomid = id[Math.floor(Math.random()*id.length)]


function BootstrapScreen(props) {
    console.log('props from the bootstrap ')
    console.log(props)
    
    // state and jquery functions
        // ******** JQ/DOM reference
        const Pokedex = $('.Pokedex')
        const pokedexText = $('.Pokedex-Text')
        const hCont = $('.Header-Container')
        const jqInput = $('#Screen-Input')
        const hiddenTag = $('.Invisible-P')
        const bootButton = $('.Bootstrap-Screen-Btn')
        const pokeText = $('.PokeText')
        const pokemonCard = $('.Poke-Card-Img')

        let secretDB = props.fakeDbState

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
    const [elementsToHide, setElementsToHide] = useState([]) 

    const [evolvePokemon, setEvolvePokemon] = useState([])

    const [hoverImage, setHoverImage] = useState('')    // manipulate upon <pokemonImg mouseEnter={hoverHandler}
    const [observerEntryState, setObserverEntryState] = useState([]) 
    const [observerTarget, setObserverTarget] = useState('')    // try with array or string.
    const [randomPokemon, setRandomPokemon] = useState([])
    const [clickCountMouse, setClickCountMouse] = useState()
    const [scrollCheck, setScrollCheck] = useState('false')

    const [haunterHover, setHaunterHover] = useState('false')
    const haunterHoveritem = useRef("")

    const [speedBump, setSpeedBump] = useState(0)
    const doc = window || $(document)
    const jqdoc = $(document)


    let pokeRefs = useRef([]);      

    // let jqObserver = new IntersectionObserver((entries) => {
    //     entries.forEach( (entry) => {            
    //         if (entry.isIntersecting) {         
    //             console.log("we are observing!")
    //             let siblingButton = $(entry.target).siblings()[0]                // console.log($(entry.target).siblings()) // had an error first didn't use $(entry.target)
    //             setObserverEntryState($(siblingButton)) // this would be our work around but I'd like to move onto a new project and we don't need this to be successful in our efforts of adding and removing animate specifically to                 
                
    //             hiddenTag.on('click', (event) => {
    //                 console.log("atleast were clicking")
    //                 // console.log('we are clicking')
    //                 // setClickCountMouse(clickCountMouse + 1)            
    //                 let targetevent = event.target
                
    //                 ClassAction('add', $(observerEntryState), 'Pokeball-Animate')   
    //                 animate(hiddenTag, '2', ['opacity', 'border'], ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.05', '0.0'], [500, 1000, 2000, 4000, 10000], myCSS)  
    //                 $(observerEntryState)
    //                 .animate({
    //                     border: '5px solid transparent'
    //                 }, 1000, async function(event) {
    //                         let siblings = $(targetevent).siblings()        
                                                            
    //                             let siblingPokeCard = siblings[0]
    //                             let targetpokemonurl = siblings[0].currentSrc  // went through this before too where [src || currentSrc] made a difference in a new value being retrieved.
    //                             let len = targetpokemonurl.length
    //                             let cleanID = targetpokemonurl.slice(len-5).replace(/[/\/.a-z]/g, '')  
    //                             let stateID = parseInt(cleanID)
                                                                
    //                             await props.setFakeDbState([...props.fakeDbState, parseInt(stateID)])                                                
    //                             let observerPoke = await APIcall('specify', cleanID) // oops got hit with an unreturned promise from forgetting await                                                    
    //                             myCSS($(observerEntryState), 'opacity', '0.1' )                                                             
    //                         let pTag = siblings[2]
    //                         myCSS(pTag, 'opacity', '0.1')
    //                     })                    
    //             })                                    
                
    //         } else {       
    //             setSpeedBump(0)                                         
    //             setTimeout(setHoverImage(''), 2000)
    //             setObserverEntryState([])   // this allows our state to be continually reset in the above if block where we set the siblingButton, targeted from $(entry.target).siblings()
    //             entry.target.style.border = '';
    //         }            
    //     })
    // }, {threshold: 1, rootMargin: '300px'})

    // let allCards = document.querySelectorAll('.Poke-Card-Img')

    // allCards.forEach( (card) => {
    //     // jqObserver.observe(card)
    //     jqObserver.observe(card)
    // })

    // Jq backup DOM functionality
    const hideThis = (elem) => $(elem).hide();
    hCont.ready((event)=> $(event.target).children().addClass("Row-Center"));
    // Pokedex.dblclick( () => setPokedexClick('true'))
    Pokedex.on('dblclick', () => props.setPokedexClick('true'))

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
        })()
        let pokedexObj = createRef()
        let pokedex = $(pokedexObj)    
        APIcall('all').then(async(pokedata) => {        
            await setPokemon(pokedata.pokemon)
        })
    }, [])

    useEffect( () => {
        //  ** 1) mutation observer ---> add className  ghostClick --> add ClassName ="saveanimate"
        // **  2) gengar animation side to side             
    }, [props.fakeDbState])



    const updateValue = ({target: {value}}) => {   
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

    const someState = () => {            
    //    props.setFakeDbState(...props.fakeDbState, ...randomWord)
    }

    const checkAgain = () => {
    }

    const handleWrapHover = () => setMainWrapHover("true")

    // have to get these two strings connected.
    const handleInput = async ({ target: {value}}) => 
    {      
        setScrollCheck('false')
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

    const hintText = () => {
        toggleHideShow($('.Invisible-P'), 'hide')
    }

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

                // await setPokedexClick('true')                
                await props.setPokedexClick('true')                

                $('*').removeClass('Pokedex-Animate')
            }
        })
        
    }

    const pokedexIconHover = (event) => {        
        let classValues = event.target.attributes.class.nodeValue
        let splitClassVals = classValues.split(' ')     
        splitClassVals.forEach( (v) => {             // v as in value            
            if (v.includes('Close'))   {
                // console.log('this happened') 
                setPokedexHover('true') // this feels very thinking-in-code like.
                console.log($('.Pokedex-Input'))            
                let jqInputValue = $('.Pokedex-Input')[0].value // this feels very codey to make it so specific that it won't close if you're sitting there on 0 and thinking about what number to pick.
                console.log('jqInputValue')
                console.log(jqInputValue)

                if (jqInputValue == 0 ) {
                    console.log('yeah and?')
                }  else {
                    setTimeout(() => {
                        setPokedexHover('false')
                    }, 3000)    
                }

                
            } 

            if (v.includes('Open'))  {
                // console.log('that happened')
                setPokedexHover('false')
            }  
        })
    }
    

    let hoverHandler = async (event) => {
        let target = event.target
        let classList = target.classList
        let pokeIDclass = classList[1].replace(/[a-z]/g, '') 
        let idInt = parseInt(pokeIDclass)
        let newId = idInt + 1        
        let backImage = await GetImage(newId, 'back')
        // await setHoverImage(backImage)
        await attrTool(target, 'src', backImage)            
    }

    let mouseLeaveHandler = async (event) => {
        let target = event.target
        let classList = target.classList
        let pokeIDclass = classList[1].replace(/[a-z]/g, '') 
        let idInt = parseInt(pokeIDclass)
        let newId = idInt + 1        
        let frontImage = await GetImage(newId, 'front')        
        await attrTool(target, 'src', frontImage)    
    }

    const applyName = async (event) => {
        // THIS WILL DO NOTHING! if props.ghost === 'true' the element linked to this will be {display: none} out of reach like jq$.detach() it obliterates REFERENCE to elem.
        //  if (props.ghost === 'true') props.setGhost('false') // props.ghost === 'false'  typed this first 
        if (scrollCheck === 'false') {
            setScrollCheck('true') // this was going to be a scroll based event.        
            let tgt = event.target                  // let tgt = $(event.target)  // this will return undefined when you try to access the attributes endpoint/value of the event.target object/API
            console.log('tgt')
            console.log(tgt)
            let imagesrc = tgt.attributes[1].nodeValue         // let imagesrc = tgt.attributes[1].toString()  if (tgt.attributes[1].src) { this won't work its not a string }  // src is not part of endpoint structure
            let len = imagesrc.length    
            let idFromProps = event.target.attributes[1].nodeValue                                            
            let oneliner = imagesrc.slice(len-5).replace(/[/\/.a-z]/g, '')             
            let eventdata = await APIcall('specify', `${idFromProps}`)
            console.log('eventdata')
            console.log(eventdata)
            let behaviorBasedName = eventdata[1].name
            let siblings = $(event.target).siblings()  // family = $(event.target).siblings().siblings()         
            let nametag = siblings[2]
            ClassAction('remove', $(nametag), 'Invisible')  // $(nametag).removeClass('Invisible')
            TextTool(nametag, 'html', `${behaviorBasedName}: #${idFromProps}`)
        } 
    }    
    let scrollClicker = () => {
        if (scrollCheck === 'false') { 
            $('.Poke-Card-Img').click()     // this works but isn't best practices. moving forward!
            setScrollCheck('true')
        } else {
            return 
        }
    }
    

    let GhostMouse = async (event) => {   
        let jqTarget = $(event.target)
        let card = $(event.target).siblings()[0]
        let cardURL = card.src
        let cleanid = await CleanUrl(cardURL);
        console.log(cleanid)
        if (secretDB.includes(cleanid)) {
            myCSS(jqTarget, 'cursor', 'not-allowed');
        }
    }

    let InvisibleClick = async (event) => {   
        let pokeCard = $(event.target).siblings()[0]
        let cardSrc = pokeCard.src
        let siblingButton = $(event.target).siblings()[1]

        console.log($(event.target).siblings())
        let cleanid = await CleanUrl(cardSrc); // thought src || currentSrc was the problem the class and this.method() wasn't linked up correctly.            

        if (secretDB.includes(cleanid)) {
            myCSS($(event.target).css('cursor', 'not-allowed'));
        } else {
            setObserverEntryState(siblingButton)
            let targetevent = event.target
            ClassAction('add', $(observerEntryState), 'Pokeball-Animate')
            let animateArray = [hiddenTag, $(observerEntryState), pokeCard]
            setTimeout( () => myCSS(pokeCard, 'opacity', '0.1'), 4000)
            animateArray.forEach( (elems) => {
                // animate(elem)
                animate(elems, '2', ['opacity', 'border'], ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.05', '0.0'], [500, 1000, 2000, 4000, 10000], myCSS)              
            })

            // animate(hiddenTag, '2', ['opacity', 'border'], ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.05', '0.0'], [500, 1000, 2000, 4000, 10000], myCSS)  
            // animate($(observerEntryState), '2', ['opacity', 'border'], ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.05', '0.0'], [500, 1000, 2000, 4000, 10000], myCSS)  
            // animate(pokeCard, '2', ['opacity', 'border'], ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.05', '0.0'], [500, 1000, 2000, 4000, 10000], myCSS)  
            $(observerEntryState)
            .animate({
                border: '1px solid transparent'
            }, 1000, async function () {
                let siblings = $(targetevent).siblings()
                let siblingPokeCard = siblings[0]        
                let targetpokemonurl = siblings[0].currentSrc
                let len = targetpokemonurl.length
                let cleanID = targetpokemonurl.slice(len-5).replace(/[/\/.a-z]/g, '')
                
                let stateID = parseInt(cleanID)
                if (props.fakeDbState.includes(siblingPokeCard.id)) {                    
                } else {
                    await props.setFakeDbState([...props.fakeDbState, siblingPokeCard.id])                    
                }
            })
        }


    }
                                                                                
    const ghostClick = (event) => { 
        
        if (props.ghost === 'true') {
            let eventchild = $(event.target).children()     // i used siblings() first still kind of thinking were using the <img 
            let pokemoncard = eventchild[0]    
            let easyid = event.target.attributes.id.nodeValue

            const addToFakeDb = async () => {
                await props.setFakeDbState([...props.fakeDbState, easyid])
            }
            addToFakeDb()

            $(event.target)
            .removeClass('Haunter')
            .addClass('Map-Parent')
            $(pokemoncard)
            .addClass('Poke-Card-Img')
            .css('opacity', '1.0')
        } else {            
        }            
    }
    
    const bodystyle = async () => {
        console.log("we are hitting the bodystyle");
        console.log('window')
        console.log(window)

        console.log('jqdoc')
        console.log(jqdoc)
        let bodystyles = jqdoc[0].body.attributes
        let bg = $('.Home-Body').css('background-image')

        if (bg.includes('blackpokedex.png')) {
            // myCSS($('#root'), 'background-image', '')
            $('.Screen-Wrapper').parents().css('background-image', '')                  
            $('body').css('background-image', '')  
            $('body').css('background-size', 'cover')  
            $('body').css('background-repeat', 'no-repeat')  
                                
        } else {
            console.log( $('.Screen-Wrapper').parents())
            // $('#root').css("background-color", 'limegreen');
            // $('.Home-Body').css("border", '5px solid hotpink')
            $('.Home-Body').css('background-image', `url(${'/img/blackpokedex.png'})`)  
            $('.Home-Body').css('background-size', 'cover')
            $('.Home-Body').css('background-repeat', 'no-repeat')
            


            // $('body').css('background-repeat', 'no-repeat')  

            // $('.Screen-Wrapper').parents([2]).css('background-image', `url(${'/img/blackpokedex.png'})`)  
            // $('.Screen-Wrapper').parents([2]).css('background-size', 'cover')
    
            // myCSS(bg, 'background-image', `url(${'/public/img/blackpokedex.png'})`)
        }
    }
    
    
    if (props.pokedexClick == 'true') {
    return (
        <>
            <div className="Screen-Wrapper">
            <div className="Input-Wrapper Column-Center">                
            </div>
            {/* <button onClick={checkAgain} type="button" className="navBall" id="Greatball"> </button> */}
            {/* <button onClick={someState} type="button" className="navBall" id="Ultraball"> </button> */}
        <div className="Screen Column-Between" onScroll={scrollClicker}>
            <ul id="Render-Ul">
                
                {pokeRefs.current.map((el, i) =>
                        <div key={`key${i}`} id={i + 1} onClick={ghostClick} className={props.ghost === 'true' ? "Haunter" : "Map-Parent Column-Center"}>                                                                                                                                                                                                                
                        <img 
                        style={{                                                             
                            display: props.ghost === 'true' ? 'none': 'block',
                            opacity: props.ghost === 'true' ? '0.0' : '1.0'                                
                        }}
                        onMouseEnter={hoverHandler}
                        onMouseLeave={mouseLeaveHandler}
                        onClick={applyName}
                        className={`Poke-Card-Img id${i}`}
                        id={i + 1} 
                        src={
                            props.ghost === 'true' ? '' :
                            hoverImage.length > 3 ? hoverImage : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
                        }                        
                        />
                        <Container>
                        <Button 
                        size="lg"
                        className="Bootstrap-Screen-Btn Double-Size" 
                        variant={'outline-primary'}                            
                        onMouseEnter={null}    
                        style={{ 
                            opacity: props.ghost === 'true' ? '0.0' : '1.0'
                            // display: props.ghost === 'true' ? 'none' : 'block'
                        }}                    
                        > 
                        </Button>
                        </Container>
                        <img      
                        style={{ 
                            opacity: props.ghost === 'true' ? '0.0' : '1.0'
                        }}
                        onMouseEnter={GhostMouse}
                        onClick={InvisibleClick}                  
                        className="Invisible-P Mouse-Icon" src={"/img/leftClick.png"}                         
                        />                        
                        <p 
                        style={{ 
                            display: props.ghost === 'true' ? 'none' : 'block'
                        }}
                        className="Name-Tag Invisible"> '' 
                        </p>
                    </div>

                    )}                       
                    </ul>      
                    {/* <InputMap specifiedLength={[refLength, setRefLength]} inputTarget={ {target: jqInput } } /> */}                  
        </div>               {/* screen end  */}
            <div  className="Hidden-Input-Container Row-Center Half-Size">    
                    <div 
                    onMouseEnter={pokedexIconHover}                    
                    className = {pokedexHover === 'false' ? "Pokedex Close-Pokedex Quarter-Size" : "Open-Pokedex Pokedex Quarter-Size" }                     
                    // className="Pokedex Close-Pokedex Quarter-Size"                     
                    >
                    </div>

                    <input 
                    className="Pokedex-Input"
                    style = { { display: pokedexHover == 'false' ? "none" : "block" }}
                    id={'Screen-Input'} onMouseEnter={inputEnter} onMouseLeave={inputExit} onChange={handleInput}type="text"
                    />

                    { pokedexHover === 'true' ?
                                    //  {props.thirdPage === true ?                    
                    <>
                                        <button
                                        onClick={bodystyle}
                                        id="NightModeBtn"
                                        className="Sprite Half-Size"
                                        >
                                        </button>
                    <Watch pokedexHover={pokedexHover} setPokedexHover={setPokedexHover}/>
                    </>
                        :
                        ''
                    }
                        </div>
        </div>
    </>
    )
} 
else  { 
    return (
            <div onMouseEnter={handleWrapHover} className="Main-Wrap Column-Between">
                
            <div onClick={pokedexClickHandler}className={pokeBgState == 'false' ? "Pokedex Close-Pokedex" :  "Pokedex Open-Pokedex" }> </div>   

            <Bar randomPokemon={randomPokemon} setRandomPokemon={setRandomPokemon} 
            mainWrapHover={mainWrapHover} 
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
            </div>

            </div>    
    )
}
}       // function Screen() { end }
export default BootstrapScreen
