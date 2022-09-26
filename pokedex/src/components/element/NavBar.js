import { useEffect, useRef, useState } from 'react'
import { $ } from 'react-jquery-plugin'
import TypeLooper from '../utility/TypeTool'
import GiveAndGet from '../utility/GiveAndGetData'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import ImageTool from '../utility/ImageTool'
import myCSS from '../utility/ClassAction'
// import Watch from '../utility/TimerTool'
import FuncTimer from '../utility/PureFuncTimer'
import RandomPosition from '../utility/RandomPosition'
// import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

let i = 0
let pageheight = $(document).height().toFixed()
let pagewidth = $(document).width().toFixed()



let ghostbtn = $('.ghostbtn')



function Nav (props) {
    const time = () => {
        setGhostBallPoke('true')
    }

    const [ghostBallPoke, setGhostBallPoke] = useState([])

    let ghost = useRef()
    
    useEffect( () => {
        console.log('useEffect navBar')

        FuncTimer(3, time)


        // console.log($(document))
        // console.log(linealdescent)  
    }, [])

   

        const buttonHandler = () => {
            console.log(ghostBallPoke)
            console.log('clicking the ghost only when its not opacity 0.0')
        }

        const nofunction = () => {
            console.log('hey')
        }
            
       

           
            
            

    return (
        <div className="Nav-Bar">
            <button className="navBall Half-Size" id="Pokeball"></button>
            
            <button 
            onClick={buttonHandler}
            className="navBall Half-Size" id="Greatball">

            </button>

            <button className="navBall Half-Size" id="Ultraball"></button>
            <button 
            onClick={ghostBallPoke.includes('usercontent') ? buttonHandler : nofunction }

            style= { { 
                // opacity: ghostBallPoke.includes('usercontent') ? '1.0' : '0.0', 
                // left: ghostBallPoke.includes('usercontent') ? '5px' : '100px',
                backgroundImage:  `url('${ghostBallPoke}')`
                // backgroundImage: ghostBallPoke.includes('usercontent') ? `url('${ghostBallPoke}')` : ''
                // backgroundImage: ghostBallPoke.includes('usercontent') ? `url('${ghostBallPoke}')` : '/img/energy/energyPsychic.jpg'
            }}
            className="navBall Half-Size ghostbtn" 
            id="Ghost" 
            >
            </button>
            
        </div>
    )
}

export default Nav
