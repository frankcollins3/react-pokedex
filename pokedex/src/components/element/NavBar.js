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
import RandomPosition from '../utility/RandomPosition'  // could also send an array of coordinates over to RandomPosition
import ReturnRandom from '../utility/ReturnRandom'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript'
// import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

let i = 0
let pageheight = $(document).height().toFixed()
let pagewidth = $(document).width().toFixed()



let ghostbtn = $('.ghostbtn')

// * MOUSEMOVE function that: -----> mousemoveCount % 100 === 0 { when modulo % ${random 25 50 75 or 100 2second timeout}

function Nav (props) {
    const time = async () => {
        
    }

    const [ghostBucket, setGhostBucket] = useState([])
    const [ghostBallPoke, setGhostBallPoke] = useState([])
    // stopGhost keyup command G to turn on/off




    let ghost = useRef()


    useEffect( () => {
        (async() => {            
            
        })()
    }, [])

    $(document).on('mousemove', async () => {
    
    })

        const cbForId = (randomValue) => {
            if (randomValue.pokemon.url.length < 4) {
                console.log(randomValue)                
            }  else {
                console.log('well maybe thatll work')
            }
        }

        const buttonHandler = async () => {
            // FuncTimer(2, time, 'timeout')              
            let ghostdata = await TypeLooper('ghost')            
            let ghostpokemon = ghostdata.pokemon
                await setGhostBucket(ghostpokemon)        
            const getSetGhost = async () => {
                let randomghost = await ReturnRandom(ghostBucket.length > 1 || ghostpokemon, null, 70, cbForId)        // this is solving an async issue that the state isn't updated by the time this is done. 
                
                let url = randomghost.pokemon.url
                let ghostid = await CleanUrl(url)
                if (ghostid.length < 4) {
                    let randomghostsrc = await ImageTool(ghostid, 'front')
                    await setGhostBallPoke(randomghostsrc)
                    
                }
            }
             
            getSetGhost()              
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
