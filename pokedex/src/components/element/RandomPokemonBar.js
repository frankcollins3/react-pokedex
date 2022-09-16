import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'
import { $ } from 'react-jquery-plugin'; 
import GiveAndGet from '../utility/GiveAndGetData'
import EvolutionChain from '../utility/Evolution'
// console.log('GiveAndGet')
// console.log(GiveAndGet)
let id = [1, 4, 7]
let randomid = id[Math.floor(Math.random()*id.length)]

// EvolutionChain(randomid)


// EvolutionChain('charizard')


let i = 0;
// jquery
let BarCont = $('.Poke-Bar')

let evolvebucket = ['heyy', 'yeah', 'sure'];                    // set them all equal to 4 and if evolvebucket||evolvePokemonState.map( (mapitem) => if (mapitem.length === 4) return else (return <img .src={evolvePokemonState.img}))
// i like all lowercase variable declarations now because it can give a visual separator from Components or imported utility functions like EvolutionChain




function Bar(props) {
    
    

    const [evolvePokemon, setEvolvePokemon] = useState([])
    

    for (i; i < props.randomPokemon; i++) {
        // let button = document.createElement('div').addClass('PokeDisplay')
    }

    let looplength = props.randomPokemon.length        
    useEffect(() => {
        ( async() => {
            let evolve = await EvolutionChain(randomid)   
            console.log('evolve') 
            await console.log(evolve) 
            // await setEvolvePokemon(evolve)
            console.log('evolvePokemon')
            await console.log(evolvePokemon)
        })()
        

        const randomizer2 = () => {
            APIcall('random', null, null, 3).then(async(data) => {      // 3 hours. this now works for 1 or 3
                    await props.setRandomPokemon(data)
            })        
            // a little weird. if you enter 3 it returns 4 pokemon.     (4) [{…}, {…}, {…}, {…}] !! ha. changed 3 to 2 and was rejected by condition [% 2 !== 0] not being met. I took out condition and now it (2) creates 3 randomPokemon. 
        }
        randomizer2()

        const checkTypes = () => {
        }
        checkTypes()
    }, [])  

    let checkAgain = () => {
        // console.log(evolvebucket)
        console.log('evolvePokemon')
        console.log(evolvePokemon)
    }
    evolvebucket.map( (map) => {
        // console.log('map')
    })

    let pokemap = props.randomPokemon.map( (mapitem, idx) => {
        return ( 
        <img 
        className="Poke-Bar-Pokemon" 
        key={idx}
        src={mapitem.img}
        >  
        </img> 
        )
    })

    let evolvemap = evolvePokemon.map( (map, idx) => {
        console.log(map.length)     // getting somewhere with this.

        return (
            <p key={idx}> {map} </p>
        )
    })

    

    setTimeout( () => {
        // console.log(evolvebucket)
        console.log(evolvePokemon)
    }, 1000)
    
    // $(document).ready( (event) => {
        // console.log(event)

    // const lookInTheBucket = async () => {    NO ASYNC in react.js rendering return
    //     setTimeout( () => {
    //         let evolvemap = evolvebucket.map( (item, idx) => {
    //             return (
    //                 <img 
    //                 className="Poke-Bar-Pokemon"
    //                 key={idx}
    //                 src={item.image}
    //                 />
    //                 )
    //             })
    //         }, 2000)     
    // }
    


    

    return (
        <>
        <div className={pokemap.length === 3 ? "Row-Between" : "Row-Center"}> </div>
        <button onClick={checkAgain} type="button" className="navBall" id="Ultraball"> </button>
            <p> {props.mainWrapHover == 'false' ? "It is false" : "it is true"} </p>
            <ul className={$('.Row-Between').children().length === 3 ? "Row-Between" : "Row-Center"}>
                {}
             {/* {pokemap} */}

            {/* {evolvePokemon.map((map)=> {
                <p> {map} </p>
            })}     */}
            {props.mainWrapHover === 'false' ? pokemap : ':) '}
        

             {/* {setTimeout( () => lookInTheBucket(), 2000)} */}
             {/* {evolvebucket || pokemap} */}               {/* {evolvebucket} || {pokemap} */}
            </ul>
        {/* <button onClick={checkState} type="button" className="navBall" id="Greatball"> </button> */}
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
