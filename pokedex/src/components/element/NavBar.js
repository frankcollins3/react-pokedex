import { useEffect, useRef, useState } from 'react'
import { $ } from 'react-jquery-plugin'
import TypeLooper from '../utility/TypeTool'
import GiveAndGet from '../utility/GiveAndGetData'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import ImageTool from '../utility/ImageTool'
import myCSS from '../utility/ClassAction'
import RandomPosition from '../utility/RandomPosition'
// import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'


let i = 0
let pageheight = $(document).height().toFixed()
let pagewidth = $(document).width().toFixed()
console.log('pageheight')
console.log(pageheight)

// I was going to make this an exportable tool but wanted to make sure it was grabbing the size of this page for reference. 
const randomlocation = () => {

}

function Nav () {
    // $(document).on('mousemove') 

    const [ghostBallPoke, setGhostBallPoke] = useState('')

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
            const randompokemon = pokemon[Math.floor(Math.random()*pokemon.length-150)]
            let url = randompokemon.pokemon.url            
            let ghostid = await CleanUrl(`${url}`)

            
            // const checkForGhost = () => {
                // if (ghostid < 100) {

                    let ghostobjects = await APIcall('specify', ghostid)
                    // console.log('ghostobjects')
                    // console.log(ghostobjects)
                    let name = ghostobjects[1].name                
                    let ghostImage = await ImageTool(name, 'front')
                    // console.log('ghostImage')
                    // console.log(ghostImage)
                    setGhostBallPoke(ghostImage)
                    // myCSS(ghostImage, )
                    RandomPosition(ghostImage)
                    // return ghostimage
                    // NavBar.js:43 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png

                // }
            // }
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
            <img className="navBall Half-Size" id="Ghost" src={ghostBallPoke} />
            {/* <button ref={ghost} className="navBall Half-Size" id="Ghost"></button> */}
        </div>
    )
}

export default Nav
