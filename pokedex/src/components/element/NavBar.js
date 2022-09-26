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

let posx = (Math.random() * ($(document).width())).toFixed();     // mvp if you wanted to .width()-divsize)) to factor in size of element into screen size
let posy = (Math.random() * ($(document).height())).toFixed();
let posx2 = Math.floor(Math.random() * ($(document).width())).toFixed();
let posy2 = Math.floor(Math.random() * ($(document).height())).toFixed();
let posx3 = Math.floor(Math.random() * ($(document).width())).toFixed();
let posy3 = Math.floor(Math.random() * ($(document).height())).toFixed();
// console.log(pageheight)
let ghostbtn = $('.ghostbtn')

// I was going to make this an exportable tool but wanted to make sure it was grabbing the size of this page for reference. 
const randomlocation = () => {

}

function Nav () {

    const [ghostBallPoke, setGhostBallPoke] = useState([])

    let ghost = useRef()
    
    useEffect( () => {
      
    })

    $(document).on('mousemove', async () => {
        // console.log('document mousemove')
        
        let ghostdata = await TypeLooper('ghost')
        myCSS($('.ghostbtn'), 'opacity', 0.1)
        const { pokemon } = ghostdata 
        const randompokemon = pokemon[Math.floor(Math.random()*pokemon.length)]
        let  url = randompokemon.pokemon.url
        let ghostid = await CleanUrl(`${url}`)
        
        if (ghostid < 151 && ghostid.length < 4) {
            

            myCSS($('.ghostbtn'), 'opacity', 1.0)
            console.log('ghostid')
            console.log(ghostid)
            let ghostimg = await ImageTool(ghostid, 'front')
            console.log(ghostimg)
            await setGhostBallPoke(ghostimg)
        } else {
                await setGhostBallPoke('hey')
                // $('.ghostbtn').css('border', '5px solid blue')
                // await setGhostBallPoke(undefined)
            }
        // const evaluateGhost = async () => {       

            // let ghostdata = await TypeLooper('ghost')
            // let len = ghostdata.len
            
            // const { data, pokemon, raw } = ghostdata
            
            
            // const moves = data.moves
            // const method = raw.config.method
            // const randompokemon = pokemon[Math.floor(Math.random()*pokemon.length)]
            // let url = randompokemon.pokemon.url            
            // let ghostid = await CleanUrl(`${url}`)
            
            

           
            
            

    })
    return (
        <div className="Nav-Bar">
            <button className="navBall Half-Size" id="Pokeball"></button>
            <button className="navBall Half-Size" id="Greatball"></button>
            <button className="navBall Half-Size" id="Ultraball"></button>
            <img 
            style= { { opacity: ghostBallPoke.includes('usercontent') ? '1.0' : '0.1'}}
            className="navBall Half-Size ghostbtn" 
            id="Ghost" 
            src={ghostBallPoke || 'img/energy/energyPsychic.jpg'} />
            {/* <button ref={ghost} className="navBall Half-Size" id="Ghost"></button> */}
        </div>
    )
}

export default Nav
