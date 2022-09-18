import React, { useEffect, useState, useRef, createRef } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'
import { $ } from 'react-jquery-plugin'; 
import GiveAndGet from '../utility/GiveAndGetData'
import EvolutionChain from '../utility/Evolution'
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   // ---> || import Alert from 'react-bootstrap/Alert'

// console.log('GiveAndGet')
// console.log(GiveAndGet)
// let id = [1, 4, 7]
// let randomid = id[Math.floor(Math.random()*id.length)]

// EvolutionChain(randomid)


// EvolutionChain('charizard')


let i = 0;
// jquery
let BarCont = $('.Poke-Bar')

let evolvebucket = ['heyy', 'yeah', 'sure'];                    // set them all equal to 4 and if evolvebucket||evolvePokemonState.map( (mapitem) => if (mapitem.length === 4) return else (return <img .src={evolvePokemonState.img}))
// i like all lowercase variable declarations now because it can give a visual separator from Components or imported utility functions like EvolutionChain




function Bar(props) {
    // console.log('props')
    // console.log(props)
    // console.log('props.pokedexClick')
    // console.log(props.pokedexClick)

    let BAR = $('.Bar-Wrap')
    
    const screenTestObj = useRef(BAR)
    console.log('screenTestObj')
    console.log(screenTestObj)
    let parent = screenTestObj.current.offsetParent
    

    
    

    const [evolvePokemon, setEvolvePokemon] = useState(['yeah', 'sure', 'this', 'works'])
    

    for (i; i < props.randomPokemon; i++) {

    }


    let looplength = props.randomPokemon.length        

    useEffect(() => {

        ( async() => { 
            
        })()
        

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

    let checkAgain = () => {        
    }
    evolvebucket.map( (map) => {
        // console.log('map')
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


        
    

    setTimeout( () => {


    }, 1000)
    
    const screenTest = () => {

        
    }

    return (
        <>
        <div id="Bar-Wrap" ref={screenTestObj} className={$('#Poke-Bar-UL').children().length > 1 ? "Row-Between" : "Row-Center"}> 
            {/* {props.mainWrapHover === 'false' ? pokemap : evolvemap } */}
            <ul id="Poke-Bar-UL" className="Row-Between">
            {props.mainWrapHover === 'false'  && props.pokedexClick !== 'true' ? pokemap : evolvemap }
            {/* <ul className={$('#Bar-Wrap').children().length > 1 ? "Row-Between" : "Row-Center"}> */}
            {/* <ul className={$('.Row-Between').children().length > 0 ? "Row-Between" : "Row-Center"}> */}
            {/* <Carousel>
            <Carousel.Item> */}
            {/* {props.pokedexClick === 'false' ? pokemap : evolvemap } */}
            {/* </Carousel.Item>
            </Carousel> */}
            </ul>
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
