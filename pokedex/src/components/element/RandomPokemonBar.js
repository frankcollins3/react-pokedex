import React, { useEffect, useState } from 'react'
import APIcall from '../utility/pokeAPI'
import ReturnRandomPoke from '../utility/RandomPokemon'
import { $ } from 'react-jquery-plugin'; 
import GiveAndGet from '../utility/GiveAndGetData'
// console.log('GiveAndGet')
// console.log(GiveAndGet)


let i = 0;
// jquery
let BarCont = $('.Poke-Bar')




function Bar(props) {
    // console.log('props')
    // console.log(props)

    for (i; i < props.randomPokemon; i++) {
        // let button = document.createElement('div').addClass('PokeDisplay')
    }
    // 
    let looplength = props.randomPokemon.length        
    
    // doesnt like accepting [state, setState] as props and trying to use setState. warning:
    // react_devtools_backend.js:4026 Warning: Cannot update a component (`BootstrapScreen`) while rendering a different component (`Bar`). To locate the bad setState() call inside `Bar`, follow the stack trace as described in
    // console.log("atleast were over here")
    useEffect(  () => {
        // console.log('useeffect in the randomPokemonBar')
        const randomizer = async () => {
            ReturnRandomPoke(1).then(async(data) => {
                ReturnRandomPoke(2).then(async(info) => {              
                    ReturnRandomPoke(3).then(async(poke) => {                  
                        await props.setRandomPokemon([data, info, poke])      // heaven stairway
                    })
                })
            })
        }
        randomizer()

        const randomizer2 = () => {
            console.log("in the randomizer 2 function")
            APIcall('random', null, null, 3)                    
        }
        randomizer2()
// a little weird. if you enter 3 it returns 4 pokemon.     (4) [{…}, {…}, {…}, {…}] !! ha. changed 3 to 2 and was rejected by condition [% 2 !== 0] not being met. I took out condition and now it (2) creates 3 randomPokemon. 
        const checkTypes = () => {
            console.log('check types function')
            props.randomPokemon.forEach(async(proprandom) => {
                // console.log('proprandom')
                // console.log(proprandom)
                let name = proprandom.name
                // console.log('name')
                // console.log(name)
                await GiveAndGet(name, 'type')
            })
        }
        checkTypes()

        // for (i = 0; i < 3; i++) {
        //     ReturnRandomPoke(3).then(async (data) => {            
        //         await props.setRandomPokemon(data)
        //     })
        // }
    }, []) // canceling-out-dependency array.

    let checkAgain = () => {
        console.log('props.randomPokemon')
        console.log(props.randomPokemon)
    }
    
    
    let pokemap = props.randomPokemon.map( (mapitem, idx) => {
        return ( 
        <img 
        className="Poke-Bar-Pokemon" 
        key={idx}
        src={mapitem.img}
        // src={mapitem.img} must be tired. got so excited thinking you could cut off /${cleanid} and replace it with {mapitem.img/${idx}} not the case.
        >  
        </img> 
        )
        // return ( <li className="Poke-Bar-Pokemon" key={idx}> {mapitem.name} </li> )
    })

    const checkState = async () => {
        // checkTypes()
    }

    



    
    return (
        <>
        <div className="Poke-Bar Row-Between"> </div>
        <button onClick={checkAgain} type="button" className="navBall" id="Ultraball"> </button>
            <ul className="Row-Between">
            {/* {randomPokeStateMap} */}
            {pokemap}
            </ul>
        {/* <button onClick={checkState} type="button" className="navBall" id="Greatball"> </button> */}

        </>
     
    )
}
export default Bar
