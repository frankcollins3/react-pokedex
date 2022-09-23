import React, { useEffect, useState, useRef, createRef } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'
import { $ } from 'react-jquery-plugin'; 
import GiveAndGet from '../utility/GiveAndGetData'
import EvolutionChain from '../utility/Evolution'
import toggleHideShow from '../utility/hideShow'
import myCSS from '../utility/CSStool'
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'



let i = 0;
let BarCont = $('.Poke-Bar')

let evolvebucket = ['heyy', 'yeah', 'sure'];                    // set them all equal to 4 and if evolvebucket||evolvePokemonState.map( (mapitem) => if (mapitem.length === 4) return else (return <img .src={evolvePokemonState.img}))
// i like all lowercase variable declarations now because it can give a visual separator from Components or imported utility functions like EvolutionChain




function Bar(props) {
    
    let pageHeight = $(document).height().toFixed()
    let pageWidth = $(document).width().toFixed()


    let BAR = $('.Bar-Wrap')
    let ul = $('#Poke-Bar-UL')
    let pokemon = $('.Poke-Bar-Pokemon')

   
    // JQ or useRef bank DOM targeting.
    
    const screenTestObj = useRef(BAR)
    let refTarget = screenTestObj.current
    let parent = screenTestObj.current.offsetBody

    let topOfElem = refTarget.offsetHeight 

    // $(refTarget).children().css('border', '5px solid pink')

    // $(refTarget).css('border', '5px solid hotpink')
    $(refTarget)
    .css('opacity', '0.1')
    .animate({
        opacity: 0.1
    }, "1000")
    .animate({
        opacity: 0.3
    }, "1000")
    .animate({
        opacity: 0.5        
    }, "1000")
    .animate({
        opacity: 0.6        
    }, "1000")
    .animate({
        opacity: 0.8        
    }, "1000")
    .animate({
        opacity: 1.0        
    }, "1000", () => {
        $(refTarget)
        .css('opacity', '0.1')
        .fadeOut("3000")
        
    })
    
setTimeout(async() => {  
    //      nice idea but i think it looks better without it. good habit to use every single selector based function
    if (props.mainWrapHover === 'true') {
        // toggleHideShow($(refTarget), 'hide')
    }
}, 5000)

    


    // setTimeout(toggleHideShow($(refTarget), 'hide'),'4000')

    

    const [evolvePokemon, setEvolvePokemon] = useState(['yeah', 'sure', 'this', 'works'])
    

    


    let looplength = props.randomPokemon.length        

    useEffect(() => {    
        const randomizer2 = () => {
            APIcall('random', null, null, 3).then(async(data) => {      // 3 hours. this now works for 1 or 3
                    await props.setRandomPokemon(data)
            })        

        }
        randomizer2()

        const checkTypes = () => {            
        }
        checkTypes()
    }, [])  


    evolvebucket.map( (map) => {

    })
    let pokemap = props.randomPokemon.map( (mapitem, idx) => {
        return ( 
        <img 
        // props.pokedexClick == true? display block if true none if false
        // style= {{ display: }}
        className="Poke-Bar-Pokemon" 
        key={idx}
        src={mapitem.img}
        >  
        </img> 
        )
    })
    let evolvemap = props.evolvePokemon.map( (mapitem, idx) => {            // just tried to put a pokemap over here. no good.
        return (        
        <img
        className="Poke-Bar-Pokemon"
        key={idx}
        src={mapitem}
        />
        )
    })


        
    


    return (
        <>
        <div id="Bar-Wrap" ref={screenTestObj} className={$('#Poke-Bar-UL').children().length > 1 ? "Row-Between" : "Row-Center"}> 
            {/* {props.mainWrapHover === 'false' ? pokemap : evolvemap } */}
            <ul 
            style={ { border: props.mainWrapHover === 'false' ? '3px solid papayawhip' : '' }}
            id="Poke-Bar-UL" 
            className={props.mainWrapHover === 'false' ? 'Row-Between' : 'Row-Between Pokedex-Float'}>
            {/* lassName="Row-Between Pokedex-Float"> */}

            {props.mainWrapHover === 'false' ? '' : evolvemap }
            </ul>
            
            {/* {props.mainWrapHover === 'false' ? pokemap : evolvemap } */}

            {/* <ul className={$('#Bar-Wrap').children().length > 1 ? "Row-Between" : "Row-Center"}> */}
            {/* <ul className={$('.Row-Between').children().length > 0 ? "Row-Between" : "Row-Center"}> */}
            {/* <Carousel>
            <Carousel.Item> */}
            {/* {props.pokedexClick === 'false' ? pokemap : evolvemap } */}
            {/* </Carousel.Item>
            </Carousel> */}
        </div>
        

            
            
        {/* <button onClick={checkAgain} type="button" className="navBall" id="Ultraball"> </button> */}
        </>     
    )

// }) cant enclose useEffect with a callback. 

}
export default Bar
        // (async () => {           
            // evolvebucket = await (EvolutionChain(randomid))    
            // evolvebucket.map( (map) => {
                // console.log('map')
                // console.log(map)
            // })        
        // })()
