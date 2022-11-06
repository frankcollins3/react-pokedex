import React, { useEffect, useState} from 'react'
import ReturnRandom from '../utility/ReturnRandom'
import APIcall from '../utility/pokeAPI'
import { $ } from 'react-jquery-plugin'
import EvolutionChain from '../utility/Evolution'


function StarterPokemon (props) {
    const [ulHover, setUlHover] = useState(false)
    const [start, setStart] = useState(false)
 
    const listHover = () => {
        setUlHover(true)
    }

    const starterpokemon = async (event) => {
        await setStart(true)
        $(event.target).siblings().detach()
        let options = [1, 4, 7]
        let randomPokemon = await ReturnRandom(options)
        await props.setStarterPokemon(randomPokemon)
        let pokedata = await APIcall('specify', randomPokemon)
        let chain = await EvolutionChain(randomPokemon)
        console.log('chain')
        console.log(chain)

        console.log('pokedata')
        console.log(pokedata)

    }

    const doNothing = () => console.info('nothing')

    return (
        <ul onMouseEnter={listHover} id="Start-List">
            <li style={{ 
                height: '55px',
                width: '55px',
                backgroundImage: `url(${'/img/bag.png'})`,
                display: ulHover === true ? 'none' : 'block'
            }}
            />
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
            }} 
            onClick={start === true ? doNothing : starterpokemon}
            ></li>            

            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
            }}
            // onClick={starterpokemon}
            onClick={start === true ? doNothing : starterpokemon}
            ></li>            
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
            }} 
            // onClick={starterpokemon}
            onClick={start === true ? doNothing : starterpokemon}
            >
                </li>            
        </ul>
    )
}

export default StarterPokemon
