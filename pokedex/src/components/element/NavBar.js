import { useEffect, useRef, useState } from 'react'
import { $ } from 'react-jquery-plugin'
import TypeLooper from '../utility/TypeTool'
import GiveAndGet from '../utility/GiveAndGetData'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import ImageTool from '../utility/ImageTool'


let i = 0


function Nav () {
    // $(document).on('mousemove') 


    let ghost = useRef()
    
    useEffect( () => {
        const evaluateGhost = async () => {            
            let ghostdata = await TypeLooper('ghost')
            let len = ghostdata.len
            console.groupCollapsed()
            console.log(ghostdata)
            const { data, pokemon, raw } = ghostdata
          
            
            const moves = data.moves
            const method = raw.config.method
            const randompokemon = pokemon[Math.floor(Math.random()*pokemon.length)]
            let url = randompokemon.pokemon.url            
            let ghostid = await CleanUrl(`${url}`)
            
            
            let ghostobjects = await APIcall('specify', ghostid)
            console.log('ghostobjects')
            console.log(ghostobjects)
            // let ghostImage = await ImageTool()
            

            

            
          

            console.groupEnd()
        }        
        evaluateGhost()
    })

    $(document).on('mousemove', () => {

    })
    return (
        <div className="Nav-Bar">
            <button className="navBall Half-Size" id="Pokeball"></button>
            <button className="navBall Half-Size" id="Greatball"></button>
            <button className="navBall Half-Size" id="Ultraball"></button>
            <button ref={ghost} className="navBall Half-Size" id="Ghost"></button>
        </div>
    )
}

export default Nav
