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

let pixel1 = '100px'
let pixel2 = '200px'
let pixel3 = '300px'
let pixel4 = '400px'
let pixel5 = '500px'
let pixelbucket = [pixel1, pixel2, pixel3]
let randomlocation = pixelbucket[Math.floor(Math.random()*pixelbucket.length)]


// console.log(pageheight)
let ghostbtn = $('.ghostbtn')

// I was going to make this an exportable tool but wanted to make sure it was grabbing the size of this page for reference. 


function Nav (props) {
    

    const [ghostBallPoke, setGhostBallPoke] = useState([])

    let ghost = useRef()
    
    useEffect( () => {
        console.log($(document))
        let linealdescent = $(document).children().children().children()[13]
        console.log(linealdescent)
        
    })
    $('document').on('mousemove', async () => {
        
        // console.log('document mousemove')
        
        let ghostdata = await TypeLooper('ghost')
        myCSS($('.ghostbtn'), 'opacity', 0.1)
        const { pokemon } = ghostdata 
        const randompokemon = pokemon[Math.floor(Math.random()*pokemon.length)]
        let  url = randompokemon.pokemon.url
        let ghostid = await CleanUrl(`${url}`)
        
        if (ghostid < 151 && ghostid.length < 4) {
            

            myCSS($('.ghostbtn'), 'opacity', 1.0)
            // console.log('ghostid')
            console.log(ghostid)
            let ghostimg = await ImageTool(ghostid, 'front')
            // console.log(ghostimg)
            await setGhostBallPoke(ghostimg)
        } else {
                await setGhostBallPoke('hey')
                // $('.ghostbtn')
                // .css('position', 'relative')
                // .css('left', `${randomlocation}`)
                
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
            
        // const buttonHandler = () => console.log(rops)

           
            
            

    })
    return (
        <div className="Nav-Bar">
            <button className="navBall Half-Size" id="Pokeball"></button>
            <button className="navBall Half-Size" id="Greatball"></button>
            <button className="navBall Half-Size" id="Ultraball"></button>
            <button 
            style= { { 
                
                opacity: ghostBallPoke.includes('usercontent') ? '1.0' : '0.0', 
                left: ghostBallPoke.includes('usercontent') ? '5px' : randomlocation,
                backgroundImage: ghostBallPoke.includes('usercontent') ? `url('${ghostBallPoke}')` : '/img/energy/energyPsychic.jpg'
            }}
            className="navBall Half-Size ghostbtn" 
            id="Ghost" 
            >
            </button>
            
        </div>
    )
}

export default Nav
